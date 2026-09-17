export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            ZAVQON
          </a>

          <nav className="flex items-center gap-3">
            <a
              href="/signin"
              className="rounded-xl px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100"
            >
              Sign in
            </a>

            <a
              href="/signup"
              className="rounded-xl bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-slate-800"
            >
              Sign up
            </a>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Global Opportunity Network
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Discover opportunities.
            <br />
            Connect globally.
            <br />
            Grow together.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            ZAVQON connects businesses, investors, partners, buyers and
            sellers around real global opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/opportunities"
              className="rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white hover:bg-slate-800"
            >
              Explore opportunities
            </a>

            <a
              href="/signup"
              className="rounded-xl border border-slate-300 px-6 py-3.5 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Create your account
            </a>

          </div>

        </div>
      </section>

      {/* Flow */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              From opportunity to growth
            </h2>

            <p className="mt-3 text-slate-500">
              The ZAVQON journey.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">

            {[
              "Opportunity",
              "Discovery",
              "Matching",
              "Connection",
              "Negotiation",
              "Transaction",
              "Growth",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="mb-3 text-sm font-semibold text-blue-600">
                  0{index + 1}
                </div>

                <div className="font-semibold">
                  {step}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-slate-900 px-8 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Ready to discover your next opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Create your ZAVQON account and start connecting with
            opportunities around the world.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <a
              href="/signup"
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-900 hover:bg-slate-100"
            >
              Sign up
            </a>

            <a
              href="/opportunities"
              className="rounded-xl border border-slate-600 px-6 py-3.5 font-semibold text-white hover:bg-slate-800"
            >
              Explore opportunities
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-slate-500">

          <span>© 2026 ZAVQON</span>

          <div className="flex gap-5">
            <a href="/signup" className="hover:text-slate-900">
              Sign up
            </a>

            <a href="/signin" className="hover:text-slate-900">
              Sign in
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}
