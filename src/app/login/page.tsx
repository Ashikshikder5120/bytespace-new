import Link from "next/link";
import { AuthPanel } from "@/components/layout/AuthPanel";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <AuthPanel
        heading="Sign in with ease"
        description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      />

      <div className="flex flex-1 items-center justify-center bg-white px-6 py-16">
        <div className="w-full max-w-sm">
          <p className="font-body text-label-s font-medium text-primary-600">Sign In</p>
          <h2 className="mt-1 font-heading text-heading-s font-semibold text-neutral-800">
            Welcome Back
          </h2>

          <form className="mt-8 space-y-5">
            <div>
              <label className="font-body text-label-s font-medium text-neutral-700">
                Email
              </label>
              <input
                type="email"
                placeholder="designer@example.com"
                className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 font-body text-body-m text-neutral-800 outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="font-body text-label-s font-medium text-neutral-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 font-body text-body-m text-neutral-800 outline-none focus:border-primary-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-secondary-500 px-6 py-3 font-body text-label-m font-medium text-neutral-800"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="font-body text-body-xs text-neutral-400">or</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="flex justify-center gap-4">
            <button
              aria-label="Continue with Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-800"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </button>
            <button
              aria-label="Continue with Google"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-800"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.3h5.9c-.3 1.4-1 2.5-2.2 3.3v2.7h3.6c2.1-1.9 3.2-4.8 3.2-8.1z" />
                <path fill="#34A853" d="M12 23c3 0 5.4-1 7.2-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z" />
                <path fill="#FBBC05" d="M6 14.3a6.6 6.6 0 0 1 0-4.6V6.9H2.3a11 11 0 0 0 0 10.2z" />
                <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.3 1.6l3.2-3.2C17.4 2 15 1 12 1a11 11 0 0 0-9.7 5.9l3.7 2.8c.9-2.5 3.2-4.3 6-4.3z" />
              </svg>
            </button>
          </div>

          <p className="mt-8 text-center font-body text-body-s text-neutral-500">
            New user?{" "}
            <Link href="/signup" className="font-medium text-primary-600">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}