"use client";

import { useMemo, useState } from "react";

const opportunities = [
  {
    type: "Buy",
    title: "Looking for European Food Suppliers",
    company: "Global Foods",
    location: "Europe",
    description: "Looking for reliable suppliers of premium food products for international distribution.",
  },
  {
    type: "Sell",
    title: "Premium Organic Coffee",
    company: "Mountain Coffee",
    location: "South America",
    description: "Premium organic coffee available for distributors and wholesale buyers.",
  },
  {
    type: "Partner",
    title: "Technology Distribution Partner",
    company: "TechVision",
    location: "Global",
    description: "Looking for partners to distribute innovative technology products in new markets.",
  },
  {
    type: "Invest",
    title: "Growing Logistics Business",
    company: "LogiCore",
    location: "Europe",
    description: "Investment opportunity in a fast-growing logistics and supply-chain company.",
  },
];

const filters = ["All", "Buy", "Sell", "Partner", "Invest"];

export default function OpportunitiesPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opportunity) => {
      const matchesFilter =
        activeFilter === "All" || opportunity.type === activeFilter;

      const text = search.toLowerCase();

      const matchesSearch =
        opportunity.title.toLowerCase().includes(text) ||
        opportunity.company.toLowerCase().includes(text) ||
        opportunity.location.toLowerCase().includes(text) ||
        opportunity.description.toLowerCase().includes(text);

      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold tracking-tight">
            ZAVQON
          </a>

          <div className="flex items-center gap-3">
            <button className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-100">
              Sign in
            </button>

            <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white">
              Post opportunity
            </button>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            ZAVQON Opportunities
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Discover your next opportunity.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Discover businesses, products, partnerships, investment
            opportunities and potential customers around the world.
          </p>

          <div className="mt-8 flex max-w-3xl flex-col gap-3 md:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search opportunities..."
              className="flex-1 rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
            />

            <button className="rounded-xl bg-slate-900 px-7 py-4 font-semibold text-white">
              Search
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Latest opportunities</h2>
            <p className="mt-1 text-slate-500">
              {filteredOpportunities.length} opportunities found
            </p>
          </div>

          {filteredOpportunities.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
              <h3 className="text-xl font-bold">No opportunities found</h3>
              <p className="mt-2 text-slate-500">
                Try another search or filter.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredOpportunities.map((opportunity) => (
                <article
                  key={opportunity.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                      {opportunity.type}
                    </span>

                    <span className="text-sm text-slate-400">
                      {opportunity.location}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {opportunity.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {opportunity.company}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">
                    {opportunity.description}
                  </p>

                  <button className="mt-6 font-semibold text-blue-600">
                    View opportunity →
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
