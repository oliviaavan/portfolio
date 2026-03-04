const projects = [
  {
    title: "Google Award-Winning Auditory Rehabilitation App with HearBat",
    description:
      "Top 100 global winner for HearBat, an app that helps cochlear implant users strengthen their hearing through gamified training.",
    href: "/hearbat",
  },
  {
    title: "UX Validation for Construction Accounting Platform at Trimble",
    description:
      "Designed and usability-tested high-fidelity prototypes, focusing on validating workflows, dashboards, and financial views with small business contractors.",
    href: "#",
  },
  {
    title: "Community Driven Discovery Mobile App with Atlas",
    description:
      "Designed a community built map that challenges algorithm driven discovery by surfacing overlooked local spots, stories, and shared experiences across Oregon.",
    href: "/atlas",
  },
  {
    title: "Between",
    description:
      "An AI-driven wearable and app that helps long distance couples, friends, and families stay emotionally connected through haptics, mood sharing, and gentle daily rituals.",
    href: "#",
  },
];

// Repeating sparkle divider pattern
const SPARKLE = "· ✦ ·° · +✦ · ✧ ·· ✦ +° ·✧ · ✦ · °· +✦ ·✧ ·· ✦ ·° · +✦ · ";

export default function Home() {
  return (
    <main
      className="bg-white min-h-screen"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* Navigation */}
      <nav className="px-10 py-5">
        <div className="max-w-[860px] mx-auto flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-1.5 text-[#1a1a1a] hover:opacity-50 transition-opacity duration-200"
          >
            <span className="text-[13px]">✦</span>
            <span
              className="text-[20px]"
              style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
            >
              OV
            </span>
          </a>
          <ul className="flex gap-8 text-[13px] text-[#1a1a1a]">
            {["Work", "Play", "About", "Resume"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:opacity-50 transition-opacity duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <hr className="border-[#e0e0e0]" />

      {/* Constrained content */}
      <div className="max-w-[860px] mx-auto px-10">

        {/* Hero */}
        <section className="pt-20 pb-6">
          <h1
            className="text-[80px] leading-none text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
          >
            olivia
          </h1>
          <p className="text-[16px] text-[#4a4a4a] leading-relaxed">
            is a sponge that absorbs any and all knowledge. Currently at Trimble.
          </p>
        </section>

        {/* Sparkle divider */}
        <div
          className="py-5 text-[#aaaaaa] text-[20px] tracking-[0.15em] overflow-hidden whitespace-nowrap select-none"
          aria-hidden="true"
        >
          {(SPARKLE + " ").repeat(8)}
        </div>

        {/* Projects */}
        <section id="work" className="py-12 flex flex-col gap-14">
          {projects.map((project, i) => (
            <a key={i} href={project.href} className="group block hover:opacity-80 transition-opacity duration-200">
              {/* Image placeholder */}
              <div
                className="w-full bg-[#e8e8e8] rounded-xl mb-4 overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              />

              {/* Project info */}
              <h2 className="text-[16px] font-semibold text-[#1a1a1a] mb-1 leading-snug">
                {project.title}
              </h2>
              <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </section>

      </div>
    </main>
  );
}
