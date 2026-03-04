"use client";

import { useState } from "react";

const skills = ["UX Research", "Prototyping", "Usability Testing", "Interaction Design"];
const tools = ["Figma", "FigmaMake", "Miro", "Dovetail", "Cursor"];
const timeline = "June 2025 – Present";
const role = "UX Design Intern";

const PASSWORD = "trimble2025"; // ← swap this out whenever you're ready

const projects = [
  {
    number: "01",
    title: "New Product Launch",
    tags: ["UX Research", "Prototyping", "Usability Testing"],
    description:
      "Led end-to-end UX research and validation for an unreleased Trimble product — from early-stage prototyping through multiple rounds of moderated usability testing with target users. The work helped shape core workflows before the product reached market.",
    status: "Completed",
  },
  {
    number: "02",
    title: "Unified Platform Redesign",
    tags: ["UX Research", "Systems Thinking", "AI Integration"],
    description:
      "Currently contributing to the revamp of a legacy Trimble platform being reimagined as a single hub for all Trimble products. The redesign integrates agentic AI and connects external ERPs and accounting/financial tools into one cohesive experience.",
    status: "Ongoing",
  },
];

export default function Trimble() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function handleUnlock() {
    if (input === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  }

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
          className="text-[48px] font-semibold leading-none text-[#1a1a1a] mt-14 mb-2"
        >
          Trimble
        </h1>

        {/* Hero image */}
        <div
          className="w-full bg-[#e8e8e8] rounded-xl mb-10"
          style={{ aspectRatio: "16/9" }}
        />

        {/* Role / Skills / Tools / Timeline */}
        <section className="mb-16">
          <div className="flex flex-col divide-y divide-[#e0e0e0]">
            <div className="flex items-start gap-10 py-5">
              <span className="text-[11px] uppercase tracking-widest text-[#aaaaaa] w-20 shrink-0 pt-1">Role</span>
              <span className="rounded-full bg-[#f0f0f0] text-[#1a1a1a] text-[12px] px-3 py-1">{role}</span>
            </div>
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
            Trimble is a technology company bridging the physical and digital worlds across
            construction, geospatial, and agriculture. As a UX Design Intern, I joined a product
            team focused on construction software — working across two distinct projects that
            ranged from validating a brand-new product to rethinking what a unified platform experience
            could look like for the future of the industry.
          </p>
        </section>

        {/* Projects preview */}
        <section className="mb-16">
          <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] mb-5">Projects</p>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <div
                key={project.number}
                className="border border-[#e0e0e0] rounded-xl px-6 py-6 bg-[#fafafa]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-[#aaaaaa]">{project.number}</span>
                    <h3 className="text-[15px] font-semibold text-[#1a1a1a]">{project.title}</h3>
                  </div>
                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-full ${
                      project.status === "Ongoing"
                        ? "bg-[#eaf3ec] text-[#4a8a5a]"
                        : "bg-[#f0f0f0] text-[#aaaaaa]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-[#aaaaaa] border border-[#e0e0e0] rounded-full px-2.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Password gate */}
        {!unlocked ? (
          <section className="mb-20">
            <div className="border border-[#e0e0e0] rounded-xl px-8 py-10 bg-[#fafafa] flex flex-col items-center text-center">
              <span className="text-[22px] mb-4">🔒</span>
              <p className="text-[14px] font-semibold text-[#1a1a1a] mb-1">
                This work is under NDA
              </p>
              <p className="text-[13px] text-[#aaaaaa] mb-6 max-w-[320px] leading-relaxed">
                The full case study contains confidential product details. Curious? Feel free to email me!.
              </p>
              <div className="flex gap-2 w-full max-w-[320px]">
                <input
                  type="password"
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setError(false); }}
                  onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                  placeholder="Password"
                  className={`flex-1 border rounded-lg px-4 py-2.5 text-[13px] outline-none transition-colors duration-150 bg-white text-[#1a1a1a] placeholder-[#cccccc] ${
                    error ? "border-[#d47070]" : "border-[#e0e0e0] focus:border-[#aaaaaa]"
                  }`}
                />
                <button
                  onClick={handleUnlock}
                  className="bg-[#1a1a1a] text-white text-[13px] px-5 py-2.5 rounded-lg hover:opacity-70 transition-opacity duration-200"
                >
                  Unlock
                </button>
              </div>
              {error && (
                <p className="text-[12px] text-[#d47070] mt-2">Incorrect password. Try again.</p>
              )}
            </div>
          </section>
        ) : (
          <section className="mb-20">
            <div className="border border-[#e0e0e0] rounded-xl px-8 py-8 bg-[#fafafa] text-center">
              <p className="text-[14px] text-[#4a8a5a] font-medium">Full case study coming soon.</p>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
