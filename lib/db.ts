import "server-only";
import mysql from "mysql2/promise";

const globalForDb = globalThis as unknown as { dbPool?: mysql.Pool };

// The pool connects lazily, so importing this at build time is safe.
export const db =
  globalForDb.dbPool ??
  mysql.createPool({
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "w3tech",
    connectionLimit: 10,
    dateStrings: true,
  });

// Reuse one pool across hot reloads in development.
if (process.env.NODE_ENV !== "production") globalForDb.dbPool = db;
