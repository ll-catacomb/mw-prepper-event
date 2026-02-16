"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black select-none flex">
      {/* ── Left half: Full-bleed GIF (are.gif has the text baked in) ── */}
      <div className="hidden lg:block lg:w-1/2 h-full relative overflow-hidden">
        <img
          src="/are.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
      </div>

      {/* ── Mobile: GIF as background ── */}
      <div className="lg:hidden absolute inset-0">
        <img
          src="/are.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ── Right half: Event info + RSVP ── */}
      <div className="w-full lg:w-1/2 h-full relative flex flex-col justify-center items-center px-8 sm:px-12 lg:px-16">
        {/* SVG dashed connector lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none drift-slow"
          viewBox="0 0 500 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M 50 200 Q 200 350, 300 500 T 450 800"
            className="dashed-line"
          />
          <path
            d="M 400 150 Q 250 350, 200 500 T 80 850"
            className="dashed-line-red"
            style={{ opacity: 0.12 }}
          />
        </svg>

        {/* Geometric shapes */}
        <div
          className="geo-rect drift w-[120px] h-[140px] fade-in fade-in-delay-1"
          style={{ top: "6%", right: "8%" }}
        />
        <div
          className="geo-rect-red drift w-[70px] h-[60px] fade-in fade-in-delay-3"
          style={{ top: "20%", right: "5%" }}
        />
        <div
          className="geo-circle-filled drift-slow w-[90px] h-[90px] pulse-opacity fade-in fade-in-delay-4"
          style={{ top: "40%", left: "8%" }}
        />
        <div
          className="geo-circle-red drift w-[45px] h-[45px] fade-in fade-in-delay-6"
          style={{ bottom: "25%", right: "12%" }}
        />
        <div
          className="geo-rect-red drift-slow w-[80px] h-[60px] fade-in fade-in-delay-7"
          style={{ bottom: "10%", left: "10%" }}
        />

        {/* Event details — centered, prominent */}
        <div className="relative z-10 text-center max-w-md fade-in fade-in-delay-2">
          <p className="pixel-text text-[10px] text-red-500/40 tracking-[0.4em] mb-8 flicker">
            // incoming transmission
          </p>

          <div className="pixel-text space-y-4 mb-12">
            <p className="text-[clamp(1.4rem,3.5vw,2.2rem)] text-white/90 font-bold">
              friday, february 27th
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.6rem)] text-white/50">
              6:00 pm
            </p>
          </div>

          <div className="pixel-text text-sm text-white/35 space-y-2 mb-14">
            <p>food provided</p>
            <p>
              <span className="text-red-500/50">12 survival bags</span>{" "}
              <span className="text-white/20">($40 value each)</span>
            </p>
          </div>

          <Link
            href="/rsvp"
            className="mono-btn inline-block px-10 py-4 border border-white/20 text-white/70 text-sm tracking-[0.25em] fade-in fade-in-delay-5"
          >
            rsvp →
          </Link>
        </div>

        <p className="absolute bottom-8 pixel-text text-[10px] text-white/15 tracking-[0.2em] fade-in fade-in-delay-7">
          signal ends soon
        </p>
      </div>
    </main>
  );
}
