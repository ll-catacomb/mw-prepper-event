"use client";

import { useState } from "react";
import Link from "next/link";

export default function RSVPPage() {
  const [form, setForm] = useState({ name: "", email: "", house: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", house: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit");
    }
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* ── Dual looping MP4 background, side by side ── */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
          >
            <source src="/baby-track-processed.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-x-[-1]"
          >
            <source src="/baby-track-processed.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Subtle edge vignette only — no full darkening */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.4)_100%)]" />

      {/* ── SVG dashed connector lines ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drift-slow"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M 100 200 Q 300 350, 500 500 T 900 800"
          className="dashed-line"
        />
        <path
          d="M 800 100 Q 600 300, 500 500 T 200 900"
          className="dashed-line-red"
          style={{ opacity: 0.1 }}
        />
      </svg>

      {/* ── Geometric shapes ── */}
      <div
        className="geo-rect drift w-[140px] h-[160px] sm:w-[180px] sm:h-[200px] fade-in fade-in-delay-1"
        style={{ top: "8%", right: "12%" }}
      />
      <div
        className="geo-rect-red drift w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] fade-in fade-in-delay-3"
        style={{ top: "22%", right: "8%" }}
      />
      <div
        className="geo-circle-filled drift-slow w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] pulse-opacity fade-in fade-in-delay-4"
        style={{ top: "15%", left: "8%" }}
      />
      <div
        className="geo-circle-red drift w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] fade-in fade-in-delay-5"
        style={{ bottom: "15%", right: "10%" }}
      />
      <div
        className="geo-circle-filled drift w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] fade-in fade-in-delay-6"
        style={{ bottom: "25%", left: "6%" }}
      />
      <div
        className="geo-rect-red drift-slow w-[100px] h-[120px] fade-in fade-in-delay-7"
        style={{ bottom: "5%", left: "15%" }}
      />

      {/* ── Scattered typography accents ── */}
      <span
        className="scattered-word pixel-text text-[clamp(0.7rem,1.5vw,1rem)] text-white/15 fade-in fade-in-delay-2"
        style={{ top: "6%", left: "5%" }}
      >
        secure channel
      </span>
      <span
        className="scattered-word pixel-text text-[clamp(0.7rem,1.5vw,1rem)] text-white/10 fade-in fade-in-delay-4"
        style={{ bottom: "8%", right: "5%" }}
      >
        03.01
      </span>
      <span
        className="scattered-word pixel-text text-[clamp(0.7rem,1.5vw,1rem)] text-red-500/20 fade-in fade-in-delay-5"
        style={{ top: "50%", right: "4%" }}
      >
        ?
      </span>

      {/* ── Form card — centered glass overlay ── */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16">
        <div className="w-full max-w-md">
          {/* Back link */}
          <Link
            href="/"
            className="inline-block mb-10 pixel-text text-[11px] text-white/25 tracking-[0.2em] hover:text-white/60 transition-colors fade-in"
          >
            ← back
          </Link>

          <div className="glass-card p-8 sm:p-10 fade-in fade-in-delay-1">
            {/* Title area */}
            <p className="pixel-text text-[10px] text-red-500/30 tracking-[0.3em] mb-6 flicker">
              // register
            </p>

            <h1 className="pixel-text text-2xl sm:text-3xl text-white/90 mb-1 fade-in fade-in-delay-2">
              are you ready
            </h1>
            <p className="pixel-text text-sm text-white/30 mb-10 fade-in fade-in-delay-3">
              limited survival bags available
            </p>

            {status === "success" ? (
              <div className="text-center py-12 fade-in">
                <div className="geo-circle-filled w-[60px] h-[60px] mx-auto mb-6 pulse-opacity" style={{ position: "relative" }} />
                <p className="pixel-text text-xl text-white/90 mb-2">
                  signal received.
                </p>
                <p className="pixel-text text-xs text-white/30 mb-8">
                  you&apos;re locked in for march 1st.
                </p>
                <Link
                  href="/"
                  className="pixel-text text-[11px] text-white/25 tracking-[0.2em] hover:text-white/60 transition-colors"
                >
                  ← return
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="fade-in fade-in-delay-3">
                  <label className="block pixel-text text-[10px] tracking-[0.25em] text-white/25 mb-2">
                    name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mono-input w-full bg-transparent border-b border-white/15 px-0 py-3 text-white text-sm placeholder-white/15"
                    placeholder="your name"
                  />
                </div>

                <div className="fade-in fade-in-delay-4">
                  <label className="block pixel-text text-[10px] tracking-[0.25em] text-white/25 mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mono-input w-full bg-transparent border-b border-white/15 px-0 py-3 text-white text-sm placeholder-white/15"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="fade-in fade-in-delay-5">
                  <label className="block pixel-text text-[10px] tracking-[0.25em] text-white/25 mb-2">
                    house / group
                  </label>
                  <input
                    type="text"
                    value={form.house}
                    onChange={(e) => setForm({ ...form, house: e.target.value })}
                    className="mono-input w-full bg-transparent border-b border-white/15 px-0 py-3 text-white text-sm placeholder-white/15"
                    placeholder="optional"
                  />
                </div>

                {status === "error" && (
                  <p className="pixel-text text-xs text-red-400/70">{errorMsg}</p>
                )}

                <div className="pt-4 fade-in fade-in-delay-6">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mono-btn w-full py-4 border border-white/15 text-white/60 text-xs tracking-[0.2em] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "transmitting..." : "secure my spot →"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="pixel-text text-center text-[10px] text-white/10 tracking-[0.15em] mt-8 fade-in fade-in-delay-7">
            sunday, march 1st · 4:00–5:00 pm · 12 survival bags
          </p>
        </div>
      </div>
    </main>
  );
}
