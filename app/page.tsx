export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            ZAVQON
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#opportunities" className="hover:text-blue-600">
              Opportunities
            </a>
            <a href="#how-it-works" className="hover:text-blue-600">
              How it works
            </a>
            <a href="#network" className="hover:text-blue-600">
              Network
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-100">
              Sign in
            </button>

            <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              🌍 Global Opportunity Network
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Discover opportunities.
              <br />
              <span className="text-blue-600">
                Connect. Grow.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              ZAVQON connects companies, buyers, sellers, investors,
              suppliers and partners around real business opportunities.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-slate-900 px-7 py-4 font-semibold text-white hover:bg-slate-800">
                Explore opportunities
              </button>

              <button className="rounded-xl border border-slate-300 px-7 py-4 font-semibold hover:bg-slate-50">
                Post an opportunity
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Flow */}
      <section
        id="how-it-works"
        className="border-y border-slate-200 bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How ZAVQON works
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From opportunity to growth.
            </h2>

            <p className="mt-4 text-slate-600">
              One network connecting the entire business opportunity journey.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4 lg:grid-cols-7">
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
                <div className="text-sm font-bold text-blue-600">
                  0{index + 1}
                </div>

                <div className="mt-3 font-semibold">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Types */}
      <section id="opportunities" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              One network
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built around opportunities
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Buy",
                description:
                  "Find products, services and businesses to buy.",
              },
              {
                title: "Sell",
                description:
                  "Reach potential buyers and expand your market.",
              },
              {
                title: "Partner",
                description:
                  "Discover companies and partners for collaboration.",
              },
              {
                title: "Invest",
                description:
                  "Discover promising businesses and opportunities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>

                <button className="mt-6 text-sm font-semibold text-blue-600">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="network" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-900 px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Your next opportunity is out there.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Join a global network designed to turn opportunities
            into real connections and business growth.
          </p>

          <button className="mt-8 rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 hover:bg-slate-100">
            Join ZAVQON
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <div>© 2026 ZAVQON</div>
          <div>Global Opportunity Network</div>
        </div>
      </footer>
    </main>
  );
}