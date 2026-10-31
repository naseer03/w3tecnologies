import type { Metadata } from "next";
import AdminAuthForm from "@/components/admin/AdminAuthForm";
import AdminAuthPage from "@/components/admin/AdminAuthPage";
import { registrationOpen } from "@/lib/admin-validation";
import "@/styles/admin.css";

export const metadata: Metadata = {
  title: "Admin Register",
  robots: { index: false, follow: false },
};

export default async function AdminRegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ register?: string }>;
}) {
  const { register } = await searchParams;
  const open = registrationOpen();

  return (
    <AdminAuthPage
      heading="Register  Form"
      status={register === "failed" ? "Registration Failed !. Try again!" : undefined}
      footer={
        <>
          If you already have an account{" "}
          <b>
            <a href="/adminlogin">Sign in</a>
          </b>{" "}
          Now!
        </>
      }
    >
      {open ? (
        <AdminAuthForm mode="register" />
      ) : (
        // The PHP site let anyone create an admin; now it has to be switched on explicitly.
        <p className="m-0">
          Admin registration is disabled. Set ALLOW_ADMIN_REGISTRATION=true to create an account.
        </p>
      )}
    </AdminAuthPage>
  );
}
