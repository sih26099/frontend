const sections = [
  {
    title: "What this demo collects",
    body: "This is a hackathon demo application. In its current form, files you upload are processed in your browser session and are not stored on a server beyond what's needed to run the standardization demo. No account, email, or personal data is required to use it.",
  },
  {
    title: "Uploaded material data",
    body: "Material lists you upload are used only to demonstrate the matching and clustering pipeline. Treat this as a prototype — avoid uploading sensitive or production procurement data until a production deployment with proper data-handling safeguards is in place.",
  },
  {
    title: "Cookies",
    body: "This site uses a small amount of local storage to remember your cookie preference and basic interface settings. See the Cookie Preferences page for details and controls.",
  },
  {
    title: "Third-party services",
    body: "The production version of this system is designed to call third-party AI providers (such as Groq or Gemini) for a small number of ambiguous-match verifications. In this demo, no such calls are made — all results shown are illustrative sample data.",
  },
  {
    title: "Changes to this policy",
    body: "As this project moves from hackathon prototype to a deployed system, this policy will be updated to reflect real data retention, storage location, and processing practices.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-navy mb-2">Privacy Policy</h1>
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