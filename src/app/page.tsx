"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Desktop: side-by-side layout ── */}
      <main className="hidden lg:flex relative w-full h-screen overflow-hidden bg-black select-none">
        <div className="w-1/2 h-full relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/catacomb_a_slowmotion_rotating_camera_view_of_a_3D-scanned_su_58813c99-8e7e-4d9e-b389-91dede7281c9_2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
        </div>

        <div className="w-1/2 h-full relative flex flex-col justify-center px-20">
          <div className="relative z-10 max-w-lg fade-in fade-in-delay-1">
            <h1 className="font-mono text-[clamp(2.2rem,5.5vw,3.6rem)] text-white/90 font-bold leading-tight mb-3 fade-in fade-in-delay-2">
              sunday, march 1st
            </h1>
            <p className="font-mono text-[clamp(1.4rem,3.5vw,2rem)] text-white/40 mb-4 fade-in fade-in-delay-3">
              4:00 – 5:00 pm
            </p>
            <p className="font-mono text-[clamp(1rem,2.5vw,1.4rem)] text-[#e16720]/50 mb-14 fade-in fade-in-delay-3">
              @ Quincy SCR
            </p>

            <div className="font-mono text-base text-white/30 space-y-3 mb-16 fade-in fade-in-delay-4">
              <p><span className="text-white/15">→</span> food provided</p>
              <p><span className="text-white/15">→</span> <span className="text-[#e16720]/60">12 survival bags</span> <span className="text-white/15">($40 value)</span></p>
            </div>

            <Link
              href="/rsvp"
              className="mono-btn inline-block px-10 py-4 border border-white/15 text-white/60 text-sm tracking-[0.25em] fade-in fade-in-delay-5"
            >
              rsvp →
            </Link>
          </div>

          <p className="absolute bottom-8 left-20 font-mono text-[10px] text-white/10 tracking-widest fade-in fade-in-delay-7">
            <span className="text-[#e16720]/25">▌</span> signal ends soon
          </p>
        </div>
      </main>

      {/* ── Mobile: vertical scroll — video first, then content ── */}
      <main className="lg:hidden bg-black select-none">
        {/* Full-screen video section */}
        <div className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/catacomb_a_slowmotion_rotating_camera_view_of_a_3D-scanned_su_58813c99-8e7e-4d9e-b389-91dede7281c9_2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

          {/* Scroll indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce fade-in fade-in-delay-3">
            <p className="font-mono text-sm text-white/40 tracking-widest">scroll</p>
            <span className="block w-px h-10 bg-white/30" />
          </div>
        </div>

        {/* Content section */}
        <div className="relative w-full min-h-screen flex flex-col justify-center px-8 sm:px-12 py-20">
          <div className="max-w-lg fade-in fade-in-delay-1">
            <h1 className="font-mono text-[clamp(2rem,8vw,3rem)] text-white/90 font-bold leading-tight mb-3">
              sunday, march 1st
            </h1>
            <p className="font-mono text-[clamp(1.2rem,4vw,1.6rem)] text-white/40 mb-4">
              4:00 – 5:00 pm
            </p>
            <p className="font-mono text-[clamp(1rem,3vw,1.2rem)] text-[#e16720]/50 mb-12">
              @ Quincy SCR
            </p>

            <div className="font-mono text-base text-white/30 space-y-3 mb-14">
              <p><span className="text-white/15">→</span> food provided</p>
              <p><span className="text-white/15">→</span> <span className="text-[#e16720]/60">12 survival bags</span> <span className="text-white/15">($40 value)</span></p>
            </div>

            <Link
              href="/rsvp"
              className="mono-btn inline-block px-10 py-4 border border-white/15 text-white/60 text-sm tracking-[0.25em]"
            >
              rsvp →
            </Link>
          </div>

          <p className="font-mono text-[10px] text-white/10 tracking-widest mt-16">
            <span className="text-[#e16720]/25">▌</span> signal ends soon
          </p>
        </div>
      </main>
    </>
  );
}
