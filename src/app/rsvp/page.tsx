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

      {/* ── Form card — centered glass overlay ── */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16">
        <div className="w-full max-w-md">
          {/* Back link */}
          <Link
            href="/"
            className="inline-block mb-10 font-mono text-[11px] text-white/20 tracking-widest hover:text-white/50 transition-colors fade-in"
          >
            <span className="text-[#e16720]/30">$</span> cd ..
          </Link>

          <div className="glass-card p-8 sm:p-10 fade-in fade-in-delay-1">
            <p className="font-mono text-[10px] text-[#e16720]/30 tracking-widest mb-6">
              // register
            </p>

            <h1 className="font-mono text-2xl sm:text-3xl text-white/90 font-bold mb-1 fade-in fade-in-delay-2">
              secure your spot
            </h1>
            <p className="font-mono text-sm text-white/25 mb-10 fade-in fade-in-delay-3">
              limited survival bags available
            </p>

            {status === "success" ? (
              <div className="text-center py-12 fade-in">
                <p className="font-mono text-[11px] text-[#e16720]/40 tracking-widest mb-4">
                  <span className="text-white/20">$</span> status: confirmed
                </p>
                <p className="font-mono text-xl text-white/90 mb-2">
                  signal received.
                </p>
                <p className="font-mono text-xs text-white/30 mb-8">
                  you&apos;re locked in for march 1st.
                </p>
                <Link
                  href="/"
                  className="font-mono text-[11px] text-white/20 tracking-widest hover:text-white/50 transition-colors"
                >
                  <span className="text-[#e16720]/30">$</span> cd ..
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="fade-in fade-in-delay-3">
                  <label className="block font-mono text-[10px] tracking-widest text-white/20 mb-2">
                    name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mono-input w-full bg-transparent border-b border-white/10 px-0 py-3 text-white font-mono text-sm placeholder-white/15"
                    placeholder="your name"
                  />
                </div>

                <div className="fade-in fade-in-delay-4">
                  <label className="block font-mono text-[10px] tracking-widest text-white/20 mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mono-input w-full bg-transparent border-b border-white/10 px-0 py-3 text-white font-mono text-sm placeholder-white/15"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="fade-in fade-in-delay-5">
                  <label className="block font-mono text-[10px] tracking-widest text-white/20 mb-2">
                    house / group
                  </label>
                  <input
                    type="text"
                    value={form.house}
                    onChange={(e) => setForm({ ...form, house: e.target.value })}
                    className="mono-input w-full bg-transparent border-b border-white/10 px-0 py-3 text-white font-mono text-sm placeholder-white/15"
                    placeholder="optional"
                  />
                </div>

                {status === "error" && (
                  <p className="font-mono text-xs text-[#e16720]/70">{errorMsg}</p>
                )}

                <div className="pt-4 fade-in fade-in-delay-6">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mono-btn w-full py-4 border border-white/10 text-white/50 text-xs tracking-[0.2em] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "transmitting..." : "secure my spot →"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="font-mono text-center text-[10px] text-white/10 tracking-widest mt-8 fade-in fade-in-delay-7">
            sunday, march 1st · 4:00–5:00 pm · @ Quincy SCR
          </p>
        </div>
      </div>
    </main>
  );
}
