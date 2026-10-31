import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "w3_admin";
const SESSION_HOURS = 12;

export type AdminSession = { adminId: number; adminName: string };

function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value) throw new Error("SESSION_SECRET is not set");
  return new TextEncoder().encode(value);
}

export async function signSession(session: AdminSession) {
  return new SignJWT(session)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_HOURS}h`)
    .sign(secret());
}

export async function verifySession(token: string | undefined): Promise<AdminSession | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret(), { algorithms: ["HS256"] });
    return { adminId: Number(payload.adminId), adminName: String(payload.adminName) };
  } catch {
    return null;
  }
}
