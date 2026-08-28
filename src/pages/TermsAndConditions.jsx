const sections = [
  {
    title: "Purpose of this application",
    body: "MatSync is a prototype built for Smart India Hackathon 2026 (Problem Statement SIH26099) to demonstrate AI-driven standardization of material codes across CPSEs. It is not an official government system and is not affiliated with, endorsed by, or deployed on behalf of the Ministry of Petroleum & Natural Gas or any CPSE.",
  },
  {
    title: "No warranty",
    body: "This demo is provided as-is, for evaluation and demonstration purposes. Matching results, canonical codes, and confidence scores shown are illustrative and should not be relied on for real procurement decisions.",
  },
  {
    title: "Acceptable use",
    body: "Do not upload data you do not have the right to share, or data containing sensitive personal information. This demo is intended for sample or synthetic material-list data only.",
  },
  {
    title: "Intellectual property",
    body: "Code and design for this project belong to the team building it for SIH 2026, unless and until a different licensing arrangement is agreed for a production deployment.",
  },
  {
    title: "Changes",
    body: "These terms may be updated as the project evolves from hackathon prototype toward a production system.",
  },
];

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-navy mb-2">
        Terms &amp; Conditions
      </h1>
      <p className="text-sm text-navy/50 mb-10">Last updated: August 2026</p>
      <div className="space-y-8">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display font-semibold text-navy text-lg mb-2">{s.title}</h2>
            <p className="text-navy/70 leading-relaxed text-sm">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}