const SPARKLE = "· ✦ ·° · +✦ · ✧ ·· ✦ +° ·✧ · ✦ · °· +✦ ·✧ ·· ✦ ·° · +✦ · ";

const skills = ["UX Research", "UX Design", "Wireframing", "Design Systems", "User Testing"];
const tools = ["Figma", "Miro"];
const timeline = "December 2023 – Present";

const opportunityAreas = [
  {
    title: "Personalized Practice",
    description:
      "Create custom \u2018flashcards\u2019, choose preferred voice accents for text to speech, and revisit lessons anytime for flexible, user controlled practice.",
  },
  {
    title: "Adaptive Learning",
    description:
      "Offer difficulty levels and progressive lesson paths that adjust to each user's pace, helping beginners and advanced users stay challenged without feeling overwhelmed.",
  },
  {
    title: "Real World Listening Support",
    description:
      "Enable background noise simulation to help users build confidence in everyday environments like cafes, classrooms, or workplaces.",
  },
  {
    title: "Gamified Motivation",
    description:
      "Introduce daily streaks, progress milestones, and small rewards to encourage consistent practice and help users stay committed through long term rehabilitation.",
  },
];

const strengths = [
  "Provide structured listening exercises",
  "Offer at-home practice",
  "Include basic progress tracking",
  "Generally accessible or low-cost",
];

const weaknesses = [
  "Outdated, unintuitive interfaces",
  "Low engagement and motivation",
  "Repetitive exercises with little adaptation",
  "Limited personalization",
  "Exclusive features locked behind paywalls",
];

const researchBody = `Cochlear implants are life changing devices for people who no longer benefit from traditional hearing aids. More than one million people worldwide rely on them. But surgery is only the first step. To fully adapt to their implant, users must complete consistent auditory rehabilitation to retrain the brain to interpret new sounds, especially speech.

This process is long, repetitive, and mentally demanding. Most users need accessible tools to guide practice, track progress, and build confidence. However, many existing apps are paywalled, outdated, or lack intuitive design, leaving gaps in both usability and engagement. These gaps shaped my direction for HearBat.`;

export default function HearBat() {
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

      <hr className="border-[#e0e0e0]" />

      <div className="max-w-[860px] mx-auto px-10">

        {/* Title */}
        <h1
          className="text-[80px] leading-none text-[#1a1a1a] mt-14 mb-10"
          style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
        >
          HearBat
        </h1>

        {/* Hero image */}
        <div
          className="w-full bg-[#e8e8e8] rounded-xl mb-10"
          style={{ aspectRatio: "16/9" }}
        />

        {/* Skills / Tools / Timeline */}
        <section className="mb-16">
          <div className="flex flex-col divide-y divide-[#e0e0e0]">
            {/* Skills row */}
            <div className="flex items-start gap-10 py-5">
              <span className="text-[11px] uppercase tracking-widest text-[#aaaaaa] w-20 shrink-0 pt-1">
                Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-[#f0f0f0] text-[#1a1a1a] text-[12px] px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {/* Tools row */}
            <div className="flex items-start gap-10 py-5">
              <span className="text-[11px] uppercase tracking-widest text-[#aaaaaa] w-20 shrink-0 pt-1">
                Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#f0f0f0] text-[#1a1a1a] text-[12px] px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Timeline row */}
            <div className="flex items-start gap-10 py-5">
              <span className="text-[11px] uppercase tracking-widest text-[#aaaaaa] w-20 shrink-0 pt-1">
                Timeline
              </span>
              <span className="rounded-full bg-[#f0f0f0] text-[#1a1a1a] text-[12px] px-3 py-1">
                {timeline}
              </span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">Overview</p>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed">
            HearBat is an award-winning auditory training app developed for the 2024 GCSC
            Solutions Challenge to help cochlear implant recipients rebuild confidence in their
            hearing. Through gamified tasks and personalized feedback, the app brings
            rehabilitation into an accessible, supportive mobile experience. The project is
            currently being expanded by a capstone team, and I continue to lead the design
            direction.
          </p>
        </section>

        {/* Problem */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">Problem</p>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed">
            Many auditory training apps for cochlear implant users are paywalled, outdated, or lack
            accessible and intuitive interaction patterns. For new implant recipients,
            distinguishing everyday sounds, especially speech, can be extremely challenging, and
            existing tools often fail to provide engaging or adaptive support during this critical
            rehabilitation period.
          </p>

          {/* Challenge callout */}
          <div className="mt-8 border border-[#e0e0e0] rounded-xl px-8 py-6 bg-[#fafafa]">
            <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-3 text-center">
              ✦ Challenge ✦
            </p>
            <p className="text-[14px] text-[#1a1a1a] leading-relaxed text-center font-medium">
              How can I bridge the gap between engagement and effective auditory education, creating
              a tool that is motivating enough for daily use, yet structured and adaptive enough to
              meaningfully support cochlear implant rehabilitation?
            </p>
          </div>
        </section>

        {/* Competitor Analysis */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">
            Competitor Analysis
          </p>
          <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4 leading-snug">
            Clarified the usability gaps that still need solving.
          </h2>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-8">
            I analyzed three popular auditory training apps used by cochlear implant recipients,
            focusing on their strengths, weaknesses, and unique features. While each app provides
            valuable exercises, all showed gaps in usability, motivation, and accessibility. This
            revealed a clear opportunity to design a tool that not only supports rehabilitation but
            also delivers it through a modern, engaging, and user-friendly experience.
          </p>

          {/* Competitors card + strengths/weaknesses */}
          <div className="flex gap-6 items-start">
            {/* Left: competitors card */}
            <div className="border border-[#e0e0e0] rounded-xl bg-[#f7f8fc] px-6 py-5 shrink-0 w-[220px]">
              <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5 text-center">
                ✦ Competitors ✦
              </p>
              <div className="flex flex-col gap-5 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/hearoes.png" alt="Hearoes" className="h-20 object-contain" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/WS.png" alt="WordSuccess" className="h-6 object-contain" />
              </div>
            </div>

            {/* Right: strengths + weaknesses */}
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
        </section>

        {/* User Research */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">
            User Research
          </p>
          <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4 leading-snug">
            Users must relearn how to hear, yet most lack the support to do it.
          </h2>
          <div className="flex flex-col gap-4 mb-10">
            {researchBody.split("\n\n").map((para, i) => (
              <p key={i} className="text-[15px] text-[#4a4a4a] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div
            className="w-full bg-[#e8e8e8] rounded-xl mb-10"
            style={{ aspectRatio: "16/9" }}
          />

          <h3 className="text-[18px] font-semibold text-[#1a1a1a] mb-3 leading-snug">
            Turning key user pain points into targeted opportunity areas
          </h3>
          <p className="text-[15px] text-[#4a4a4a] leading-relaxed mb-8">
            Guided by user research, I translated the core challenges of low engagement, lack of
            personalization, and limited motivational support into 4 opportunity areas that informed
            the app's feature direction.
          </p>

          {/* Opportunity cards 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {opportunityAreas.map((area) => (
              <div
                key={area.title}
                className="border border-[#e0e0e0] rounded-xl px-5 py-5 bg-[#fafafa]"
              >
                <h4 className="text-[14px] font-semibold text-[#1a1a1a] mb-2">{area.title}</h4>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ideation */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">Ideation</p>
          <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4 leading-snug">
            Users must relearn how to hear, yet most lack the support to do it.
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            {researchBody.split("\n\n").map((para, i) => (
              <p key={i} className="text-[15px] text-[#4a4a4a] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div
            className="w-full bg-[#e8e8e8] rounded-xl"
            style={{ aspectRatio: "16/9" }}
          />
        </section>

        {/* Iteration */}
        <section className="mb-20">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">Iteration</p>
          <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4 leading-snug">
            Users must relearn how to hear, yet most lack the support to do it.
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            {researchBody.split("\n\n").map((para, i) => (
              <p key={i} className="text-[15px] text-[#4a4a4a] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div
            className="w-full bg-[#e8e8e8] rounded-xl"
            style={{ aspectRatio: "16/9" }}
          />
        </section>

      </div>
    </main>
  );
}
