import Link from "next/link";

import { siteConfig } from "@/core/config/site";

const ERROR_MESSAGES: Record<string, string> = {
  AccessDenied:
    "Your email is not authorized to access this application. If you believe this is a mistake, contact an administrator.",
  Configuration: "There is a problem with the server configuration.",
  Default: "An error occurred during sign in.",
};

type AuthErrorPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AuthErrorPage({ searchParams }: AuthErrorPageProps) {
  const { error } = await searchParams;
  const message = error
    ? (ERROR_MESSAGES[error] ?? ERROR_MESSAGES.Default)
    : ERROR_MESSAGES.Default;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-zinc-950">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
            <svg
              aria-hidden="true"
              className="h-6 w-6 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Sign in failed
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {message}
          </p>

          <Link
            href="/login"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Back to sign in
          </Link>

          <p className="mt-6 text-xs text-zinc-500">{siteConfig.name}</p>
        </div>
      </div>
    </div>
  );
}
