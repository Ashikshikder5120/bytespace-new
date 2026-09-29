import Link from "next/link";
import { AuthPanel } from "@/components/layout/AuthPanel";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      <AuthPanel
        heading="Sign up and come in"
        description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      />

      <div className="flex flex-1 items-center justify-center bg-white px-6 py-16">
        <div className="w-full max-w-sm">
          <p className="font-body text-label-s font-medium text-primary-600">Create an Account</p>
          <h2 className="mt-1 font-heading text-heading-s font-semibold text-neutral-800">
            Welcome to ByteSpace
          </h2>

          <form className="mt-8 space-y-5">
            <div>
              <label className="font-body text-label-s font-medium text-neutral-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jamie Davis"
                className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 font-body text-body-m text-neutral-800 outline-none focus:border-primary-500"
              />
            </div>

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
              Continue
            </button>
          </form>

          <p className="mt-8 text-center font-body text-body-s text-neutral-500">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}