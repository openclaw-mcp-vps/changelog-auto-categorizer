export default function Page() {
  const badges = [
    { label: "Critical", color: "bg-red-900 text-red-300" },
    { label: "Major", color: "bg-orange-900 text-orange-300" },
    { label: "Minor", color: "bg-yellow-900 text-yellow-300" },
    { label: "Patch", color: "bg-green-900 text-green-300" },
  ];

  const faqs = [
    {
      q: "How does the AI categorize changelog entries?",
      a: "Our LLM analyzes each entry for scope, user-facing impact, and severity — then assigns Critical, Major, Minor, or Patch labels automatically.",
    },
    {
      q: "Can I connect my Git repository directly?",
      a: "Yes. You can link a GitHub, GitLab, or Bitbucket repo and the tool will pull commit messages and tags to generate categorized release notes on every push.",
    },
    {
      q: "What if I want to edit the generated release notes?",
      a: "Every generated note is fully editable before publishing. You can tweak wording, merge entries, or override impact levels at any time.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {badges.map((b) => (
            <span key={b.label} className={`text-xs font-semibold px-3 py-1 rounded-full ${b.color}`}>
              {b.label}
            </span>
          ))}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Auto-categorize changelogs{" "}
          <span className="text-[#58a6ff]">by impact level</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your changelog or connect your Git repo. AI instantly labels every entry as Critical, Major, Minor, or Patch — then writes polished release notes your customers will actually read.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get started — $18/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-xl p-8 bg-[#161b22] text-center">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited changelog entries",
              "AI impact categorization (Critical / Major / Minor / Patch)",
              "Auto-generated customer-facing release notes",
              "Git repo integration (GitHub, GitLab, Bitbucket)",
              "Export to Markdown, HTML, or JSON",
              "Priority email support",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} Changelog Auto-Categorizer. All rights reserved.
      </footer>
    </main>
  );
}
