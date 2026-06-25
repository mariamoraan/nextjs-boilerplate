import { auth } from "@/auth";
import { UserMenu } from "@/core/components/user-menu";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 sm:px-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Dashboard
        </h1>
        <UserMenu user={session.user} />
      </header>

      <main className="p-4 sm:p-6">
        <p className="text-zinc-600 dark:text-zinc-400">
          Welcome to the dashboard
        </p>
      </main>
    </div>
  );
}
