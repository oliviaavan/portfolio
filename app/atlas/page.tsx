const skills = ["UX Research", "UX Design", "Wireframing", "Prototyping"];
const tools = ["Figma", "FigJam"];
const timeline = "March 2025 – May 2025";

const strengths = [
  "Large databases of popular places",
  "Smooth reservation + search experiences",
  "Useful reviews and basic credibility signals",
  "Helpful reminders and notifications",
];

const weaknesses = [
  "Paid placements affect rankings",
  "Algorithms favor trends, not uniqueness",
  "Small or rural spots get buried",
  "Discovery feels repetitive and commercial",
  "Community stories are missing",
];

const insights = [
  {
    title: "Algorithms reinforce sameness.",
    description:
      "Users repeatedly encounter the same trending restaurants or locations, creating a narrow view of what Oregon has to offer.",
  },
  {
    title: "People trust people, not algorithms.",
    description:
      "Users want honest, community-driven recommendations—not generic lists or sponsored placements.",
  },
  {
    title: "Discovery should feel like exploration, not a transaction.",
    description:
      "People want context, storytelling, and emotional connection—not just a map of pins and ratings.",
  },
  {
    title: "Community knowledge is fragile.",
    description:
      "Local tips, memories, and hidden gems often live in conversations, not online; once forgotten, they disappear.",
  },
];

const opportunityAreas = [
  {
    title: "Make discovery feel personal.",
    description: "Allow users to share photos, stories, and emotional context, not just ratings.",
  },
  {
    title: "Spotlight under the radar spots.",
    description:
      "Create a feature that highlights spots that have potential but remain unseen due to low volume of reviews or lack of visibility.",
  },
  {
    title: "Offer exploration that feels diverse, not repetitive.",
    description:
      "Discover discovery paths like map view, categories, curated lists, proximity, and mood based lists that expand what exploring can look like.",
  },
  {
    title: "Preserve community memory.",
    description:
      "Build a Lost & Found section that highlights places that hold cultural or personal significance, forgotten gems with few or old reviews, and closed or inactive spots.",
  },
];

export default function Atlas() {
  return (
    <main
      className="bg-white min-h-screen"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* Navigation */}
      <nav className="py-5">
        <div className="max-w-[860px] mx-auto flex items-center justify-between px-[18px]">
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
            {["Work", "About", "Resume"].map((item) => (
              <li key={item}>
                <a
                  href={`/#${item.toLowerCase()}`}
                  className="hover:opacity-50 transition-opacity duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>


      <div className="max-w-[860px] mx-auto px-10">

        {/* Title */}
        <h1
          className="text-[48px] font-semibold leading-none text-[#1a1a1a] mt-14 mb-10"
        >
          Atlas
        </h1>

        {/* Hero image */}
        <div
          className="w-full bg-[#e8e8e8] rounded-xl mb-10"
          style={{ aspectRatio: "16/9" }}
        />

        {/* Skills / Tools / Timeline */}
        <section className="mb-16">
          <div className="flex flex-col divide-y divide-[#e0e0e0]">
            <div className="flex items-start gap-10 py-5">
              <span className="text-[11px] uppercase tracking-widest text-[#aaaaaa] w-20 shrink-0 pt-1">Skills</span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full bg-[#f0f0f0] text-[#1a1a1a] text-[12px] px-3 py-1">{s}</span>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-10 py-5">
              <span className="text-[11px] uppercase tracking-widest text-[#aaaaaa] w-20 shrink-0 pt-1">Tools</span>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="rounded-full bg-[#f0f0f0] text-[#1a1a1a] text-[12px] px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-10 py-5">
              <span className="text-[11px] uppercase tracking-widest text-[#aaaaaa] w-20 shrink-0 pt-1">Timeline</span>
              <span className="rounded-full bg-[#f0f0f0] text-[#1a1a1a] text-[12px] px-3 py-1">{timeline}</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">Overview</p>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed">
            Atlas is a community powered discovery app designed to counter algorithm driven platforms.
            Instead of promoting restaurants and locations based on popularity, paid placement, or
            engagement metrics, Atlas elevates places that matter to real people. By crowdsourcing
            local knowledge, stories, and hidden gems across Oregon, Atlas creates a map shaped by
            everyday experiences, not algorithms or trends.
          </p>
        </section>

        {/* Problem */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">Problem</p>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed">
            Discovery apps prioritize popularity, paid placements, and engagement metrics, causing
            Oregon's hidden gems, small businesses, and culturally meaningful spots to be buried
            under algorithm driven results.
          </p>

          {/* Challenge callout */}
          <div className="mt-8 border border-[#e0e0e0] rounded-xl px-8 py-6 bg-[#fafafa]">
            <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-3 text-center">
              ✦ Challenge ✦
            </p>
            <p className="text-[14px] text-[#1a1a1a] leading-relaxed text-center font-medium">
              Make a map worth following—one built from shared memories, inside tips, and community pride.
            </p>
          </div>
        </section>

        {/* Competitive & Algorithm Analysis */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">
            Competitive and Algorithm Analysis
          </p>
          <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4 leading-snug">
            Understood how algorithms shape visibility and create discovery gaps.
          </h2>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-8">
            I found consistent patterns such as, algorithms reward popularity, paid placements
            influence ranking, and high traffic urban areas dominate results. This competitive and
            algorithmic analysis helped reveal exactly where the current ecosystem falls short, and
            where an opportunity for Atlas could emerge.
          </p>

          {/* Competitors card + strengths/weaknesses */}
          <div className="flex gap-6 items-start mb-10">
            <div className="border border-[#e0e0e0] rounded-xl bg-[#f7f8fc] px-6 py-5 shrink-0 w-[220px]">
              <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5 text-center">
                ✦ Competitors ✦
              </p>
              <div className="flex flex-col gap-4 items-center justify-center">
                {["Yelp", "Google Maps", "TripAdvisor"].map((c) => (
                  <span key={c} className="text-[13px] font-medium text-[#1a1a1a]">{c}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-8 flex-1">
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[#1a1a1a] mb-4">Strengths</p>
                <ul className="flex flex-col gap-2.5">
                  {strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-[13px] text-[#4a4a4a]">
                      <span className="text-[#6aaa82] mt-0.5 shrink-0">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[#1a1a1a] mb-4">Weaknesses</p>
                <ul className="flex flex-col gap-2.5">
                  {weaknesses.map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-[13px] text-[#4a4a4a]">
                      <span className="text-[#d47070] mt-0.5 shrink-0">✕</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Insight heading */}
          <h3 className="text-[18px] font-semibold text-[#1a1a1a] mb-3 leading-snug">
            Across platforms, user behavior and business data revealed recurring gaps in authenticity, representation, and visibility.
          </h3>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-6">
            By mapping the personas goals, frustrations, and daily contexts, I ensured the product
            aligned with real behaviors, making the experience intuitive, supportive, and motivational
            for users at every stage of their discovery journey.
          </p>

          {/* Insight cards */}
          <div className="flex flex-col gap-3">
            {insights.map((insight) => (
              <div key={insight.title} className="border border-[#e0e0e0] rounded-xl px-5 py-4 bg-[#fafafa]">
                <h4 className="text-[13px] font-semibold text-[#1a1a1a] mb-1">{insight.title}</h4>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* User Mindset and Observation */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">
            User Mindset and Observation
          </p>
          <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4 leading-snug">
            Users value authenticity over popularity.
          </h2>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-8">
            A spot with character, history, or a personal story often feels more meaningful than a
            highly rated one. People want places that feel "real," not filtered through engagement
            metrics or paid placements. This mindset supports Atlas' emphasis on community
            narratives, not commercial ranking.
          </p>

          <div className="w-full bg-[#e8e8e8] rounded-xl mb-10" style={{ aspectRatio: "16/9" }} />

          <h3 className="text-[18px] font-semibold text-[#1a1a1a] mb-2 leading-snug">
            Contribution feels meaningful when it's personal.
          </h3>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-2">
            People don't enjoy writing long, Yelp-style reviews. But they love sharing a story, a
            recommendation, or a small moment:
          </p>
          <ul className="flex flex-col gap-1 mb-8 pl-1">
            {[
              '"My dad always brought me here."',
              '"This coffee shop saved me during finals."',
              '"I stumbled on this trail and it changed my day."',
            ].map((q) => (
              <li key={q} className="text-[15px] text-[#4a4a4a] leading-relaxed flex gap-2">
                <span className="text-[#aaaaaa]">·</span>
                {q}
              </li>
            ))}
          </ul>

          <h3 className="text-[18px] font-semibold text-[#1a1a1a] mb-3 leading-snug">
            Emotional context is missing from current platforms.
          </h3>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-10">
            Users don't just want to know where something is, they want to know why it matters.
            They care about memories, feelings, and experiences that shaped a place.
          </p>

          <h3 className="text-[18px] font-semibold text-[#1a1a1a] mb-3 leading-snug">
            Turning key user pain points into targeted opportunity areas
          </h3>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-8">
            By understanding where mainstream platforms fall short, 4 opportunities emerged.
            Opportunities that center community knowledge, local voices, and the hidden places
            algorithms overlook.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {opportunityAreas.map((area) => (
              <div key={area.title} className="border border-[#e0e0e0] rounded-xl px-5 py-5 bg-[#fafafa]">
                <h4 className="text-[14px] font-semibold text-[#1a1a1a] mb-2">{area.title}</h4>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
