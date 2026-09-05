import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <p className="text-xs tracking-widest uppercase text-steel font-medium mb-2">
        SIH26099
      </p>
      <h1 className="font-display text-3xl font-semibold text-navy mb-6">
        About this project
      </h1>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-navy text-lg mb-2">The problem</h2>
        <p className="text-navy/70 leading-relaxed">
          Different Central Public Sector Enterprises (CPSEs) name the same procurement
          items differently — "SS Pipe-2IN", "Steel Pipe, 2 inch dia", and
          "Pipe-STL-050mm" may all refer to the exact same item. This inconsistency causes
          duplicate purchases and wasted government spend, and makes it hard to get a
          unified view of inventory across organizations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-navy text-lg mb-2">The solution</h2>
        <p className="text-navy/70 leading-relaxed">
          MatSync ingests messy material lists, normalizes and expands abbreviations,
          then uses TF-IDF similarity matching to group entries that refer to the same
          item — with an AI verification pass reserved only for ambiguous cases. The
          output is a single harmonized catalog with a standardized name and code per
          item, along with an explainable match reason for every grouping.
        </p>
        <p className="text-navy font-medium mt-4">
          Every duplicate SKU eliminated is a duplicate purchase order CPSEs never have
          to raise — turning fragmented catalogs into measurable procurement savings.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-navy text-lg mb-2">Team</h2>
        <p className="text-navy/70">
          A 6-member CSE team from College of Engineering Muttathara (KTU, Kerala),
          built for Smart India Hackathon 2026.
        </p>
      </section>

      <section className="bg-navy rounded-xl px-6 py-8 text-center">
        <h2 className="font-display font-semibold text-white text-xl mb-2">
          See it in action
        </h2>
        <p className="text-white/70 mb-5 max-w-md mx-auto">
          Upload a sample material list and watch MatSync harmonize it in real time.
        </p>
        <Link
          to="/upload"
          className="inline-block bg-saffron text-navy font-medium px-6 py-2.5 rounded-lg hover:bg-saffron/90 transition-colors"
        >
          Try it yourself
        </Link>
      </section>
    </div>
  );
}