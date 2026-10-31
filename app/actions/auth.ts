"use server";

import { timingSafeEqual } from "node:crypto";
import bcrypt from "bcryptjs";
import type { RowDataPacket } from "mysql2";
import { redirect } from "next/navigation";
import { registrationOpen, validateAdmin } from "@/lib/admin-validation";
import { createSession, deleteSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

type AdminRow = RowDataPacket & { admin_id: number; admin_name: string; admin_password: string };

const field = (formData: FormData, name: string) => String(formData.get(name) ?? "").trim();
const isHash = (stored: string) => /^\$2[aby]\$/.test(stored);

function sameText(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/** Checks a password, upgrading a legacy plain-text one (as the PHP site stored them) to bcrypt. */
async function passwordMatches(admin: AdminRow, password: string) {
  if (isHash(admin.admin_password)) return bcrypt.compare(password, admin.admin_password);
  if (!sameText(admin.admin_password, password)) return false;
  await db.execute("UPDATE admin SET admin_password = ? WHERE admin_id = ?", [
    await bcrypt.hash(password, 12),
    admin.admin_id,
  ]);
  return true;
}

export async function login(formData: FormData) {
  const name = field(formData, "name");
  const password = field(formData, "password");

  let admin: AdminRow | undefined;
  if (Object.keys(validateAdmin({ name, password }, "login")).length === 0) {
    const [rows] = await db.execute<AdminRow[]>(
      "SELECT admin_id, admin_name, admin_password FROM admin WHERE admin_name = ?",
      [name],
    );
    for (const row of rows) {
      if (await passwordMatches(row, password)) {
        admin = row;
        break;
      }
    }
  }

  if (!admin) redirect("/adminlogin?login=failed");
  await createSession({ adminId: admin.admin_id, adminName: admin.admin_name });
  redirect("/dashboard?login=success");
}

export async function register(formData: FormData) {
  const values = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    password: field(formData, "password"),
    confirmPassword: field(formData, "confirm-password"),
  };
  let saved = false;
  if (registrationOpen() && Object.keys(validateAdmin(values, "register")).length === 0) {
    try {
      await db.execute("INSERT INTO admin (admin_name, admin_email, admin_password) VALUES (?, ?, ?)", [
        values.name,
        values.email,
        await bcrypt.hash(values.password, 12),
      ]);
      saved = true;
    } catch (error) {
      console.error("Admin registration failed", error);
    }
  }
  redirect(saved ? "/adminlogin?register=success" : "/adminregister?register=failed");
}

export async function logout() {
  await deleteSession();
  redirect("/adminlogin");
}
