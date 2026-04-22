import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { AiIllustration, MlIllustration, CloudIllustration, DataIllustration } from "@/components/TileIllustrations";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceTile from "@/components/ServiceTile";
import LogoMarquee from "@/components/LogoMarquee";
import {
  EXPERTISE_TILES,
  HOME_SERVICES,
  INDUSTRIES,
  TESTIMONIALS,
  LIFE_IMAGES,
  SERVICES_LIST,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Qbitum Solutions — AI Engineering for Ambitious Companies",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <Banner
        variant="hero"
        imageSrc="/images/banner-home.jpg"
        imageAlt="Qbitum — AI Engineering"
        labelText="Qbitum Solutions"
        headline="We Build AI & Engineer the Future."
        subtext="We help enterprises adopt, build, and scale AI solutions — delivering production systems and empowering the teams that run them."
        ctaHref="/contact"
        ctaLabel="Start Your Transformation"
      />

      {/* ── LOGO MARQUEE ─────────────────────────────────────────────── */}
      <LogoMarquee />

      {/* ── ABOUT / STATS ────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-8">About Qbitum</p>
          <p
            className="font-normal mb-20"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
              color: "#f0f2f8",
              lineHeight: 1.5,
              maxWidth: "900px",
              letterSpacing: "-0.01em",
            }}
          >
            We deliver tailored AI solutions that empower your business to lead and
            grow. By understanding your unique challenges, our team provides the
            strategic insights and engineering depth needed to ensure your success.
          </p>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {[
              { value: "10+", label: "Years of engineering" },
              { value: "50+", label: "Products shipped" },
              { value: "3×", label: "Faster time to market" },
              { value: "24/7", label: "Dedicated support" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-10 px-8 flex flex-col gap-3"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <p
                  className="stat-value"
                  style={{
                    fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                    color: "#f0f2f8",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mono text-xs uppercase tracking-widest"
                  style={{ color: "#4a5568" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD — Photo Cards ──────────────────────────────── */}
      <section style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8 pb-10">
          <p className="section-label mb-4">What we build</p>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-sans)",
              color: "#f0f2f8",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            AI Services &amp; Expertise
          </h2>
          <p
            className="text-base mb-10"
            style={{ color: "#8892a4", maxWidth: "520px", lineHeight: 1.7 }}
          >
            Accelerate your business by harnessing the power of innovative cloud
            engineering and AI solutions built for scale.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ height: "clamp(420px, 55vw, 680px)" }}
        >
          {(() => {
            const TILE_ILLUSTRATIONS = [AiIllustration, MlIllustration, CloudIllustration, DataIllustration];
            return EXPERTISE_TILES.map((tile, i) => {
              const Illustration = TILE_ILLUSTRATIONS[i];
              return (
            <div
              key={tile.title}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                borderRight: i < EXPERTISE_TILES.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Illustration />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,8,15,0.96) 0%, rgba(7,8,15,0.5) 55%, rgba(7,8,15,0.15) 100%)" }}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="mono text-xs" style={{ color: "rgba(212,168,83,0.7)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tile.tags.map((tag) => (
                      <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-sans)" }}>
                    {tile.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "#8892a4" }}
                  >
                    {tile.description}
                  </p>
                </div>
              </div>
            </div>
              );
            });
          })()}
        </div>
      </section>

      {/* ── HOW WE DELIVER — Clean 3-col Cards (replaces awkward 4-col table) */}
      <section className="py-28" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">How we deliver</p>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Services &amp; Expertise
          </h2>
          <p
            className="mb-16"
            style={{ color: "#8892a4", maxWidth: "520px", lineHeight: 1.7, fontSize: "1rem" }}
          >
            We deliver across the full technology stack — from product ideation to AI deployment and scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HOME_SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-5"
              >
                <span className="mono text-xs" style={{ color: "#4a5568" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", lineHeight: 1.2 }}
                >
                  {service.title}
                </h3>
                <p
                  className="leading-relaxed flex-1"
                  style={{ color: "#8892a4", fontSize: "0.95rem" }}
                >
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-semibold mt-2"
                  style={{ color: "#a094e8", fontFamily: "var(--font-sans)" }}
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-8"><div className="divider-gradient" /></div>

      {/* ── ALL SERVICES GRID ────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-4">Full stack</p>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
              >
                All Services
              </h2>
            </div>
            <Link href="/services" className="btn-outline-glow px-6 py-3 self-start">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES_LIST.map((s, i) => (
              <ServiceTile key={s.slug} slug={s.slug} title={s.title} shortDesc={s.shortDesc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Across sectors</p>
          <h2
            className="text-4xl font-bold mb-14"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Industries We Serve
          </h2>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="relative flex-shrink-0 w-[280px] lg:w-[340px] h-[460px] overflow-hidden snap-start group cursor-pointer"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "4px",
                }}
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ opacity: 0.8 }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(7,8,15,0.96) 0%, rgba(7,8,15,0.2) 55%, transparent 100%)" }}
                />
                {/* Corner accent */}
                <div className="absolute top-5 left-5 w-4 h-4" style={{ borderTop: "1px solid rgba(15,184,160,0.5)", borderLeft: "1px solid rgba(15,184,160,0.5)" }} />
                <div className="absolute bottom-8 left-7 right-7">
                  <p
                    className="mono text-xs mb-2"
                    style={{ color: "rgba(212,168,83,0.6)" }}
                  >
                    {String(INDUSTRIES.indexOf(industry) + 1).padStart(2, "0")}
                  </p>
                  <p
                    className="text-white font-bold text-2xl"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {industry.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Social proof</p>
          <h2
            className="text-4xl font-bold mb-14"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            What People Say
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE AT QBITUM ───────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">People &amp; culture</p>
          <h2
            className="text-4xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Life at Qbitum
          </h2>
          <p
            className="leading-relaxed mb-12"
            style={{ color: "#8892a4", maxWidth: "520px", fontSize: "1rem" }}
          >
            We are a team of passionate, diverse, and innovative individuals who thrive
            in a collaborative environment. Growth, inclusivity, and continuous learning
            are at our core.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {LIFE_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden group"
                style={{
                  height: "clamp(200px, 30vw, 400px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "4px",
                }}
              >
                <Image
                  src={img}
                  alt={`Life at Qbitum ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ opacity: 0.82 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-40"
        style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Ambient glows */}
        <div
          className="glow-orb"
          style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(124,111,208,0.12) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <div className="absolute inset-0 neural-grid opacity-20" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <p className="section-label mb-6">Ready to build?</p>
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              color: "#f0f2f8",
              letterSpacing: "-0.03em",
            }}
          >
            Let&apos;s work together
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ color: "#8892a4", maxWidth: "480px", lineHeight: 1.7 }}
          >
            Whether you&apos;re launching a startup or scaling an enterprise, Qbitum&apos;s
            team is ready to turn your vision into reality.
          </p>
          <Link href="/contact" className="btn-glow px-10 py-4 text-sm inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
