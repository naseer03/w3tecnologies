import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, signSession, verifySession, type AdminSession } from "./token";

export async function createSession(session: AdminSession) {
  const store = await cookies();
  // No maxAge: like the PHP session, it ends when the browser closes (the token also expires).
  store.set(SESSION_COOKIE, await signSession(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const store = await cookies();
  return verifySession(store.get(SESSION_COOKIE)?.value);
}

/** For admin pages and actions: the proxy already redirects, this guards direct action calls too. */
export async function requireSession() {
  const session = await getSession();
  if (!session) redirect("/adminlogin");
  return session;
}

export async function deleteSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
