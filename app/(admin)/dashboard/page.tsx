import StatusModal from "@/components/StatusModal";

export default async function DashboardHome({ searchParams }: { searchParams: Promise<{ login?: string }> }) {
  const { login } = await searchParams;
  return (
    <>
      <StatusModal message={login === "success" ? "Login Successful!. welcome to the dashboard." : undefined} />
      <h1 className="text-center">Welcome to dashboard</h1>
    </>
  );
}
