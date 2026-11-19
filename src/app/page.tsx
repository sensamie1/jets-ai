import Image from "next/image";

// ─── Nav ────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Image
          src="/jets-ai-logo-full.png"
          alt="jets.ai logo"
          width={120}
          height={52}
          priority
          className="h-9 w-auto"
        />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-[#1b6b3a] transition-colors">Features</a>
          <a href="#subjects" className="hover:text-[#1b6b3a] transition-colors">Subjects</a>
          <a href="#how-it-works" className="hover:text-[#1b6b3a] transition-colors">How it works</a>
        </nav>
        <a
          href="#get-started"
          className="ml-4 inline-flex items-center justify-center rounded-full bg-[#1b6b3a] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#145229] transition-colors"
        >
          Get started free
        </a>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-10"
        style={{ background: "#1b6b3a" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full opacity-10"
        style={{ background: "#f5a800" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wide uppercase bg-[#e8f5ed] text-[#1b6b3a] mb-5 animate-fade-in-up">
            Free for Nigerian Students
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 animate-fade-in-up delay-100">
            Study smarter with{" "}
            <span className="text-[#1b6b3a]">jets</span>
            <span className="text-[#f5a800]">.ai</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-500 max-w-lg mx-auto md:mx-0 animate-fade-in-up delay-200">
            Your personal AI tutor, built for secondary school students in Nigeria.
            Get instant help with Maths, Physics, Chemistry, Biology and more — anytime, anywhere.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
            <a
              id="get-started"
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#1b6b3a] px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#145229] transition-colors"
            >
              Start learning free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#1b6b3a] px-8 py-3.5 text-base font-bold text-[#1b6b3a] hover:bg-[#e8f5ed] transition-colors"
            >
              See how it works
            </a>
          </div>
          <p className="mt-5 text-sm text-gray-400 animate-fade-in-up delay-400">
            No credit card required · 100% free
          </p>
        </div>

        {/* Logo icon */}
        <div className="flex-shrink-0 animate-float animate-fade-in-up delay-200">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <div
              className="absolute inset-0 rounded-full opacity-20 blur-2xl"
              style={{ background: "#f5a800" }}
            />
            <Image
              src="/jets-ai-logo.png"
              alt="jets.ai icon"
              fill
              className="object-contain drop-shadow-2xl relative"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-gray-100 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "100%", label: "Free to use" },
            { value: "10+", label: "Subjects covered" },
            { value: "24/7", label: "Always available" },
            { value: "🇳🇬", label: "Made for Nigeria" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1b6b3a]">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ────────────────────────────────────────────────────────────────
const features = [
  {
    icon: "💬",
    title: "Ask anything, instantly",
    desc: "Type your question just like you would to a teacher and get a clear, step-by-step explanation in seconds.",
  },
  {
    icon: "📚",
    title: "Curriculum-aligned",
    desc: "Content is mapped to the Nigerian secondary school curriculum so every answer is relevant to what you're studying.",
  },
  {
    icon: "🧠",
    title: "Learn, don't just copy",
    desc: "jets.ai guides you to understand concepts, not just hand you answers. Build real knowledge that lasts.",
  },
  {
    icon: "📱",
    title: "Works on any device",
    desc: "Whether you're on a phone, tablet, or laptop — jets.ai works smoothly wherever you are.",
  },
  {
    icon: "🌐",
    title: "No data, no problem",
    desc: "Lightweight and optimised for low-bandwidth connections common across Nigeria.",
  },
  {
    icon: "🏆",
    title: "Exam prep ready",
    desc: "Prepare confidently for WAEC, NECO, and JAMB with targeted practice and explanations.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide bg-[#fff8e6] text-[#f5a800] mb-3">
            Why jets.ai
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything you need to <span className="text-[#1b6b3a]">excel</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Designed from the ground up for the Nigerian student experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md hover:border-[#1b6b3a]/30 transition-all"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8f5ed] text-2xl group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Subjects ────────────────────────────────────────────────────────────────
const subjects = [
  { name: "Mathematics", icon: "➗", color: "bg-blue-50 text-blue-600" },
  { name: "Physics", icon: "⚡", color: "bg-purple-50 text-purple-600" },
  { name: "Chemistry", icon: "🧪", color: "bg-green-50 text-green-700" },
  { name: "Biology", icon: "🧬", color: "bg-teal-50 text-teal-600" },
  { name: "English", icon: "✍️", color: "bg-orange-50 text-orange-600" },
  { name: "Economics", icon: "📈", color: "bg-yellow-50 text-yellow-700" },
  { name: "Geography", icon: "🌍", color: "bg-emerald-50 text-emerald-700" },
  { name: "Government", icon: "🏛️", color: "bg-red-50 text-red-600" },
  { name: "Literature", icon: "📖", color: "bg-pink-50 text-pink-600" },
  { name: "Further Maths", icon: "∞", color: "bg-indigo-50 text-indigo-600" },
];

function Subjects() {
  return (
    <section id="subjects" className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide bg-[#e8f5ed] text-[#1b6b3a] mb-3">
            Subjects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            All your <span className="text-[#f5a800]">subjects</span> in one place
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            From SS1 to SS3, jets.ai covers every core subject in the Nigerian curriculum.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {subjects.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default"
            >
              <span className={`flex items-center justify-center w-11 h-11 rounded-xl text-xl font-bold ${s.color}`}>
                {s.icon}
              </span>
              <span className="text-sm font-semibold text-gray-700 text-center">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How it works ────────────────────────────────────────────────────────────
const steps = [
  {
    step: "01",
    title: "Open jets.ai",
    desc: "Visit jets.ai on any device — no installation, no account needed to start.",
  },
  {
    step: "02",
    title: "Ask your question",
    desc: "Type any question from your textbook or class — in plain English or even Pidgin.",
  },
  {
    step: "03",
    title: "Get a clear answer",
    desc: "Receive a step-by-step explanation tailored to your level and curriculum.",
  },
  {
    step: "04",
    title: "Keep practising",
    desc: "Ask follow-up questions, request examples, or try practice problems until you've got it.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide bg-[#fff8e6] text-[#f5a800] mb-3">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Up and learning in <span className="text-[#1b6b3a]">60 seconds</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-start gap-4">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-7 left-[3.25rem] w-[calc(100%-3.5rem)] h-0.5 bg-gradient-to-r from-[#1b6b3a]/30 to-[#f5a800]/30"
                />
              )}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1b6b3a] text-white text-lg font-extrabold shadow-md">
                {s.step}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-20 bg-[#1b6b3a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/jets-ai-logo.png"
            alt="jets.ai"
            width={80}
            height={80}
            className="opacity-90 drop-shadow-lg"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to study smarter?
        </h2>
        <p className="text-[#b8dfc8] text-lg max-w-xl mx-auto mb-8">
          Join thousands of Nigerian students who are already using jets.ai to understand their subjects better and pass their exams.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-[#f5a800] px-10 py-4 text-base font-bold text-[#1b6b3a] shadow-xl hover:bg-[#d4900a] hover:text-white transition-colors"
        >
          Start for free — no sign-up needed
        </a>
        <p className="mt-4 text-[#b8dfc8] text-sm">Powered by JETS Club</p>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Image
          src="/jets-ai-logo-full.png"
          alt="jets.ai"
          width={110}
          height={48}
          className="h-8 w-auto brightness-0 invert opacity-70"
        />
        <p className="text-sm text-center sm:text-right">
          © 2026 jets.ai by JETS Club. Free AI tutoring for Nigerian students.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Subjects />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
