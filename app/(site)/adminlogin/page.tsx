import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminAuthForm from "@/components/admin/AdminAuthForm";
import AdminAuthPage from "@/components/admin/AdminAuthPage";
import { registrationOpen } from "@/lib/admin-validation";
import { getSession } from "@/lib/auth/session";
import "@/styles/admin.css";

export const metadata: Metadata = { title: "Admin Login", robots: { index: false, follow: false } };

const statusMessages: Record<string, string> = {
  "login=failed": "Login Failed !. Invalid Credentials, please login again.",
  "register=success": "Register Successful!. Click 'ok' to login",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  if (await getSession()) redirect("/dashboard");
  const params = await searchParams;
  const status = Object.entries(params)
    .map(([key, value]) => statusMessages[`${key}=${value}`])
    .find(Boolean);

  return (
    <AdminAuthPage
      heading="Login Form"
      status={status}
      footer={
        registrationOpen() && (
          <>
            If you don&apos;t have account{" "}
            <b>
              <a href="/adminregister">Sign up</a>
            </b>{" "}
            Now!
          </>
        )
      }
    >
      <AdminAuthForm mode="login" />
    </AdminAuthPage>
  );
}
