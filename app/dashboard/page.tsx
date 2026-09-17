"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type User = {
  name: string;
  email: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem("zavqon_logged_in");
    const savedUser = localStorage.getItem("zavqon_user");

    if (loggedIn !== "true" || !savedUser) {
      router.push("/signin");
      return;
    }

    try {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
    } catch {
      localStorage.removeItem("zavqon_logged_in");
      router.push("/signin");
      return;
    }

    setChecking(false);
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("zavqon_logged_in");
    router.push("/signin");
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-slate-600">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ZAVQON
          </Link>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-950">
            Welcome, {user?.name}!
          </h1>

          <p className="mt-3 text-slate-600">
            You are successfully signed in to ZAVQON.
          </p>

          <div className="mt-8 rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Your email</p>

            <p className="mt-1 font-semibold text-slate-900">
              {user?.email}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/opportunities"
              className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Explore opportunities
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}