import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
  Bot,
  Lock,
  Gauge,
  Terminal,
  Wand2,
  Bug,
  TestTube,
  FileText,
  Zap,
  GitMerge,
  Target,
  Cpu,
  Search,
  RefreshCw,
  Eye,
  Play,
  Layers,
  Settings,
  Check,
} from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const NavPill = () => (
  <div className="mx-auto mt-6 w-[min(1020px,92vw)]">
    <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
      <button
        className="flex items-center gap-3 text-left"
        onClick={() => scrollToId("top")}
        aria-label="MonaCoder"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
          <Code2 className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-wide">MonaCoder</div>
          <div className="text-xs text-white/55">Local AI Coding Assistant</div>
        </div>
      </button>

      <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {[
          { t: "Features", id: "features" },
          { t: "Skills", id: "skills" },
          { t: "How it works", id: "how" },
          { t: "FAQ", id: "faq" },
        ].map((r) => (
          <button
            key={r.id}
            className="transition hover:text-white"
            onClick={() => scrollToId(r.id)}
          >
            {r.t}
          </button>
        ))}
      </div>

      <button
        className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
        onClick={() => scrollToId("cta")}
      >
        Get started
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const Badge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 backdrop-blur-xl">
    <span className="text-white/60">{icon}</span>
    {text}
  </div>
);

const Chip = ({ text }: { text: string }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl">
    {text}
  </span>
);

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/[0.07]">
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
      {icon}
    </div>
    <div className="mt-4 text-base font-semibold">{title}</div>
    <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
  </div>
);

const SkillPill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/85 backdrop-blur-xl">
    <span className="text-white/70">{icon}</span>
    {label}
  </div>
);

const StepCard = ({
  step,
  title,
  desc,
}: {
  step: number;
  title: string;
  desc: string;
}) => (
  <div className="flex gap-4">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
      {step}
    </div>
    <div>
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-white/65">{desc}</p>
    </div>
  </div>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
    <span className="text-sm text-white/75">{text}</span>
  </div>
);

export default function MonaCoderLandingPageSimple() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#050709] text-white antialiased"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl" />
      </div>

      <NavPill />

      <main className="relative mx-auto max-w-5xl px-5 pb-20 pt-10">
        {/* HERO */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            <Badge icon={<Lock className="h-4 w-4" />} text="Local-first" />
            <Badge icon={<Shield className="h-4 w-4" />} text="Safe & Secure" />
            <Badge icon={<Zap className="h-4 w-4" />} text="Fast" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
          >
            AI coding assistant built{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              local-first for your workflow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/65"
          >
            Generate code, review changes, and apply patches safely. Run fully local with Ollama by default,
            or enable Claude CLI / Codex CLI bridge for selected roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              onClick={() => scrollToId("cta")}
            >
              Install extension
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-xl transition hover:bg-white/10"
              onClick={() => scrollToId("how")}
            >
              See how it works
            </button>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-24">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Features</div>
            <h2 className="mt-3 text-3xl font-semibold">Everything you need for AI-assisted coding</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<Lock className="h-5 w-5" />}
              title="Local-first privacy"
              desc="Ollama local mode is the default. Optional provider bridge (Claude CLI / Codex CLI) is available when you need extra capacity."
            />
            <FeatureCard
              icon={<Wand2 className="h-5 w-5" />}
              title="Smart Code Generation"
              desc="Generate code patches with intelligent extraction. Handles partial responses and formatting issues gracefully."
            />
            <FeatureCard
              icon={<Eye className="h-5 w-5" />}
              title="AI Code Review"
              desc="Every change is reviewed by AI before applying. Catch issues early with automatic quality gates."
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<Shield className="h-5 w-5" />}
              title="Security Guards"
              desc="Built-in protection against dangerous code patterns. Blocks secrets, unsafe operations, and sensitive file access."
            />
            <FeatureCard
              icon={<Search className="h-5 w-5" />}
              title="Context-Aware"
              desc="Understands your codebase with semantic search. Finds relevant code automatically to improve suggestions."
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Fast & Parallel"
              desc="Optimized for speed with parallel processing. Multiple reviews run concurrently for faster feedback."
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<RefreshCw className="h-5 w-5" />}
              title="Test Integration"
              desc="Automatically runs your tests after applying changes. Failed tests inform the next iteration."
            />
            <FeatureCard
              icon={<Cpu className="h-5 w-5" />}
              title="Multi-Model"
              desc="Use different models for different tasks. Configure chat, code, review, and architect models separately."
            />
            <FeatureCard
              icon={<Layers className="h-5 w-5" />}
              title="Multi-Step Plans"
              desc="Complex tasks are broken into steps. Review and approve each step before it runs."
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-24">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-white/50">Quick Skills</div>
                <h2 className="mt-2 text-2xl font-semibold">17 one-click templates</h2>
                <p className="mt-2 max-w-xl text-sm text-white/65">
                  Pre-built workflows for common tasks. Each skill guides you through a focused form to get the best results.
                </p>
              </div>
              <Chip text="Guided forms" />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <SkillPill icon={<Bug className="h-3.5 w-3.5" />} label="Debug" />
              <SkillPill icon={<Wand2 className="h-3.5 w-3.5" />} label="Refactor" />
              <SkillPill icon={<CheckCircle2 className="h-3.5 w-3.5" />} label="Checklist" />
              <SkillPill icon={<FileText className="h-3.5 w-3.5" />} label="Index" />
              <SkillPill icon={<Target className="h-3.5 w-3.5" />} label="A-Z" />
              <SkillPill icon={<GitMerge className="h-3.5 w-3.5" />} label="Git Push" />
              <SkillPill icon={<Code2 className="h-3.5 w-3.5" />} label="Clone" />
              <SkillPill icon={<Shield className="h-3.5 w-3.5" />} label="Security" />
              <SkillPill icon={<Gauge className="h-3.5 w-3.5" />} label="Benchmark" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <SkillPill icon={<Terminal className="h-3.5 w-3.5" />} label="Fix CI" />
              <SkillPill icon={<TestTube className="h-3.5 w-3.5" />} label="Add Tests" />
              <SkillPill icon={<FileText className="h-3.5 w-3.5" />} label="Docs/ADR" />
              <SkillPill icon={<Layers className="h-3.5 w-3.5" />} label="Deps Audit" />
              <SkillPill icon={<Zap className="h-3.5 w-3.5" />} label="Perf" />
              <SkillPill icon={<FileText className="h-3.5 w-3.5" />} label="PR Pack" />
              <SkillPill icon={<Target className="h-3.5 w-3.5" />} label="Impact Map" />
              <SkillPill icon={<Sparkles className="h-3.5 w-3.5" />} label="Prompt Doctor" />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-24">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">How it works</div>
            <h2 className="mt-3 text-3xl font-semibold">Simple, safe, and fast</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-lg font-semibold">Generate & Review</h3>
              <div className="mt-6 space-y-6">
                <StepCard
                  step={1}
                  title="Describe what you need"
                  desc="Type your request or use a Quick Skill template for guided input."
                />
                <StepCard
                  step={2}
                  title="AI generates code"
                  desc="Local models create patches with smart extraction for reliable results."
                />
                <StepCard
                  step={3}
                  title="Automatic review"
                  desc="AI reviews the generated code and flags any issues before you see it."
                />
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-lg font-semibold">Validate & Apply</h3>
              <div className="mt-6 space-y-6">
                <StepCard
                  step={4}
                  title="Security validation"
                  desc="Guards check for dangerous patterns, secrets, and unsafe operations."
                />
                <StepCard
                  step={5}
                  title="Preview changes"
                  desc="See exactly what will change with diff view. Accept, reject, or edit."
                />
                <StepCard
                  step={6}
                  title="Apply safely"
                  desc="Changes are applied with limits. Auto-runs tests to verify everything works."
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY LOCAL */}
        <section className="mt-24">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-8 backdrop-blur-xl md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold">Why run AI locally?</h2>
                <p className="mt-3 text-white/65">
                  Cloud AI services see your code. Local AI keeps everything on your machine —
                  perfect for proprietary code, sensitive projects, or just peace of mind.
                </p>
              </div>
              <div className="space-y-3">
                <CheckItem text="Your code never leaves your machine" />
                <CheckItem text="No API key needed for local mode" />
                <CheckItem text="Works offline, anywhere" />
                <CheckItem text="No usage limits or rate throttling" />
                <CheckItem text="Full control over which models to use" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section id="faq" className="mt-24 grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">FAQ</div>
            <h2 className="mt-2 text-2xl font-semibold">Common questions</h2>

            <div className="mt-6 space-y-4">
              {[
                {
                  q: "Does my code leave my machine?",
                  a: "By default no, because MonaCoder runs local-first via Ollama. You can optionally enable Claude CLI / Codex CLI bridge per role.",
                },
                {
                  q: "What models can I use?",
                  a: "Any Ollama-compatible model, plus optional Claude CLI / Codex CLI providers for chat/code/review/architect roles.",
                },
                {
                  q: "Is it safe to auto-apply changes?",
                  a: "Yes. Built-in guards block dangerous patterns, and you can preview all changes before applying.",
                },
                {
                  q: "Does it work with my language?",
                  a: "Works with any language the AI model understands — TypeScript, Python, Go, Rust, and more.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border border-white/10 bg-white/5">
                  <summary className="cursor-pointer px-4 py-3 text-sm font-medium">{q}</summary>
                  <div className="px-4 pb-3 text-sm text-white/65">{a}</div>
                </details>
              ))}
            </div>
          </div>

          <div
            id="cta"
            className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-8 backdrop-blur-xl"
          >
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-white/50">Get started</div>
              <h2 className="mt-2 text-2xl font-semibold">Ready to try?</h2>
              <p className="mt-3 text-sm text-white/65">
                Install Ollama for local mode, then optionally enable CLI bridge providers in settings.
                You'll be up and running in minutes.
                You'll be up and running in minutes.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-[#070A12]/40 p-4">
                <div className="text-xs text-white/55">1. Install Ollama (local runtime)</div>
                <div className="mt-1 font-mono text-sm text-white/80">brew install ollama</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#070A12]/40 p-4">
                <div className="text-xs text-white/55">2. Pull models</div>
                <div className="mt-1 font-mono text-sm text-white/80">ollama pull &lt;your-model&gt;</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#070A12]/40 p-4">
                <div className="text-xs text-white/55">3. Install extension</div>
                <div className="mt-1 text-xs text-white/55">Search "MonaCoder" in VS Code Marketplace</div>
              </div>
            </div>

            <button
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              onClick={() => window.open("https://marketplace.visualstudio.com", "_blank")}
            >
              Install from Marketplace
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16">
          <div className="flex flex-col items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Code2 className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">MonaCoder</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/55">
              <span>MIT License</span>
              <span>•</span>
              <span>GitHub</span>
              <span>•</span>
              <span>Docs</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
