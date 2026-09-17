"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SigninPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSignin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = String(form.get("email") || "")
      .trim()
      .toLowerCase();

    const password = String(form.get("password") || "");

    const savedUser = localStorage.getItem("zavqon_user");

    if (!savedUser) {
      setMessage("No account found. Please create an account first.");
      return;
    }

    try {
      const user = JSON.parse(savedUser);

      if (user.email !== email || user.password !== password) {
        setMessage("Email or password is incorrect.");
        return;
      }

      localStorage.setItem("zavqon_logged_in", "true");

      router.push("/dashboard");
    } catch {
      setMessage("Something went wrong. Please create your account again.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          <div className="mb-8 text-center">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight text-slate-900"
            >
              ZAVQON
            </Link>

            <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h1>

            <p className="mt-3 text-slate-500">
              Sign in to your ZAVQON account.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            <button
              type="button"
              onClick={() =>
                setMessage("Google sign in will be connected next.")
              }
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 px-5 py-3.5 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm text-slate-400">OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <form onSubmit={handleSignin} className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-20 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 hover:text-slate-900"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {message && (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-5 py-3.5 font-semibold text-white hover:bg-slate-800"
              >
                Sign in
              </button>

            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create account
              </Link>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}