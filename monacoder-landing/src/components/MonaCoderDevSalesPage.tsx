import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Code2,
  Lock,
  Zap,
  Shield,
  Cpu,
  Terminal,
  Clock,
  DollarSign,
  Eye,
  GitBranch,
  Sparkles,
  Play,
  Star,
  Quote,
  ChevronRight,
  Download,
  ExternalLink,
  Heart,
  Coffee,
  Wifi,
  WifiOff,
  Server,
  Cloud,
  CloudOff,
} from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const NavPill = () => (
  <div className="mx-auto mt-6 w-[min(1100px,92vw)]">
    <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
          <Code2 className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">MonaCoder</div>
          <div className="text-xs text-white/55">For Developers</div>
        </div>
      </div>

      <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {[
          { t: "Why local?", id: "why" },
          { t: "Features", id: "features" },
          { t: "Compare", id: "compare" },
          { t: "Pricing", id: "pricing" },
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
        onClick={() => scrollToId("install")}
      >
        Install free
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const PainPoint = ({
  icon,
  pain,
  solution,
}: {
  icon: React.ReactNode;
  pain: string;
  solution: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-red-500/10 p-2 text-red-400">{icon}</div>
      <div>
        <div className="text-sm font-medium text-red-300 line-through">{pain}</div>
        <div className="mt-1 text-sm text-green-400">{solution}</div>
      </div>
    </div>
  </div>
);

const FeatureBlock = ({
  icon,
  title,
  desc,
  code,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  code?: string;
}) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
      {icon}
    </div>
    <div className="mt-4 text-lg font-semibold">{title}</div>
    <p className="mt-2 text-sm text-white/65">{desc}</p>
    {code && (
      <div className="mt-4 rounded-xl bg-black/40 p-3 font-mono text-xs text-white/70">
        {code}
      </div>
    )}
  </div>
);

const CompareRow = ({
  feature,
  mona,
  copilot,
  cursor,
}: {
  feature: string;
  mona: boolean | string;
  copilot: boolean | string;
  cursor: boolean | string;
}) => (
  <tr className="border-b border-white/10">
    <td className="py-3 text-sm">{feature}</td>
    <td className="py-3 text-center">
      {typeof mona === "boolean" ? (
        mona ? (
          <Check className="mx-auto h-5 w-5 text-green-400" />
        ) : (
          <X className="mx-auto h-5 w-5 text-white/30" />
        )
      ) : (
        <span className="text-xs text-green-400">{mona}</span>
      )}
    </td>
    <td className="py-3 text-center">
      {typeof copilot === "boolean" ? (
        copilot ? (
          <Check className="mx-auto h-5 w-5 text-green-400" />
        ) : (
          <X className="mx-auto h-5 w-5 text-white/30" />
        )
      ) : (
        <span className="text-xs text-white/50">{copilot}</span>
      )}
    </td>
    <td className="py-3 text-center">
      {typeof cursor === "boolean" ? (
        cursor ? (
          <Check className="mx-auto h-5 w-5 text-green-400" />
        ) : (
          <X className="mx-auto h-5 w-5 text-white/30" />
        )
      ) : (
        <span className="text-xs text-white/50">{cursor}</span>
      )}
    </td>
  </tr>
);

const Testimonial = ({
  quote,
  author,
  role,
  avatar,
}: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
    <Quote className="h-8 w-8 text-white/20" />
    <p className="mt-4 text-sm italic text-white/75">"{quote}"</p>
    <div className="mt-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold">
        {avatar}
      </div>
      <div>
        <div className="text-sm font-medium">{author}</div>
        <div className="text-xs text-white/50">{role}</div>
      </div>
    </div>
  </div>
);

const Step = ({
  num,
  title,
  desc,
  cmd,
}: {
  num: number;
  title: string;
  desc: string;
  cmd?: string;
}) => (
  <div className="flex gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold">
      {num}
    </div>
    <div className="flex-1">
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-white/65">{desc}</p>
      {cmd && (
        <div className="mt-2 inline-block rounded-lg bg-black/40 px-3 py-1.5 font-mono text-xs text-white/70">
          {cmd}
        </div>
      )}
    </div>
  </div>
);

export default function MonaCoderDevSalesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050709] text-white antialiased">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl" />
      </div>

      <NavPill />

      <main className="relative mx-auto max-w-5xl px-5 pb-20 pt-10">
        {/* HERO */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400"
          >
            <Heart className="h-4 w-4" />
            <span>Free & Open Source</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
          >
            AI coding that{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              respects your privacy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/65"
          >
            Keep coding local by default. MonaCoder runs on your machine with Ollama first,
            and can optionally bridge Claude CLI / Codex CLI for selected roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              onClick={() => scrollToId("install")}
            >
              <Download className="mr-2 h-5 w-5" />
              Install free
            </button>
            <button
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
              onClick={() => scrollToId("demo")}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch demo
            </button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
          >
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-400" />
              <span>Local-first</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-400" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <WifiOff className="h-4 w-4 text-green-400" />
              <span>Works offline</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-green-400" />
              <span>Your model choice</span>
            </div>
          </motion.div>
        </section>

        {/* PAIN POINTS */}
        <section id="why" className="mt-24">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">The problem</div>
            <h2 className="mt-3 text-3xl font-bold">Tired of these?</h2>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            <PainPoint
              icon={<Cloud className="h-5 w-5" />}
              pain="Your code goes to someone else's server"
              solution="→ MonaCoder: local-first mode keeps code on your machine by default"
            />
            <PainPoint
              icon={<DollarSign className="h-5 w-5" />}
              pain="$20/month subscription that adds up"
              solution="→ MonaCoder: Free, open source, forever"
            />
            <PainPoint
              icon={<Wifi className="h-5 w-5" />}
              pain="Need internet to code? Really?"
              solution="→ MonaCoder: Works completely offline"
            />
            <PainPoint
              icon={<Clock className="h-5 w-5" />}
              pain="API rate limits slowing you down"
              solution="→ MonaCoder: No limits, your hardware, your speed"
            />
            <PainPoint
              icon={<Eye className="h-5 w-5" />}
              pain="No idea what happens to your code"
              solution="→ MonaCoder: Open source, audit the code yourself"
            />
            <PainPoint
              icon={<Server className="h-5 w-5" />}
              pain="Locked into one AI provider"
              solution="→ MonaCoder: Use Ollama locally or bridge Claude CLI / Codex CLI when needed"
            />
          </div>
        </section>

        {/* DEMO */}
        <section id="demo" className="mt-24">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-1 backdrop-blur-xl">
            <div className="aspect-video rounded-[28px] bg-black/60 flex items-center justify-center">
              <div className="text-center">
                <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 cursor-pointer">
                  <Play className="h-8 w-8 ml-1" />
                </div>
                <p className="mt-4 text-sm text-white/50">Watch 2-minute demo</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-24">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Features</div>
            <h2 className="mt-3 text-3xl font-bold">Built for real developers</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <FeatureBlock
              icon={<Zap className="h-6 w-6 text-yellow-400" />}
              title="17 Quick Skills"
              desc="Pre-built workflows for debugging, refactoring, testing, security audits, and more. One click to start."
              code="/debug → find and fix bugs"
            />
            <FeatureBlock
              icon={<Shield className="h-6 w-6 text-green-400" />}
              title="Security guards"
              desc="Built-in protection blocks secrets, dangerous patterns, and sensitive files before code is applied."
              code="⛔ Blocked: API key detected"
            />
            <FeatureBlock
              icon={<Eye className="h-6 w-6 text-blue-400" />}
              title="AI code review"
              desc="Every generated patch is reviewed by AI before you see it. Catch issues before they happen."
              code="✓ PASS | ⚠ WARN | ✗ FAIL"
            />
            <FeatureBlock
              icon={<GitBranch className="h-6 w-6 text-purple-400" />}
              title="Safe auto-apply"
              desc="Preview diffs, set file limits, auto-rollback on test failure. You're always in control."
              code="default 5/400 • configurable up to 20/2000"
            />
            <FeatureBlock
              icon={<Cpu className="h-6 w-6 text-cyan-400" />}
              title="Multi-model"
              desc="Use different models for chat, code gen, review. Swap models without touching code."
              code="chat: fast | code: smart | review: thorough"
            />
            <FeatureBlock
              icon={<Terminal className="h-6 w-6 text-orange-400" />}
              title="Test integration"
              desc="Auto-runs your tests after applying changes. Failed tests boost the next attempt's context."
              code="vitest • jest • mocha"
            />
          </div>
        </section>

        {/* COMPARE */}
        <section id="compare" className="mt-24">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-white/50">Comparison</div>
              <h2 className="mt-3 text-2xl font-bold">How we stack up</h2>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="pb-3 text-left font-semibold">Feature</th>
                    <th className="pb-3 text-center">
                      <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-xs font-bold">
                        MonaCoder
                      </span>
                    </th>
                    <th className="pb-3 text-center font-medium text-white/70">Copilot</th>
                    <th className="pb-3 text-center font-medium text-white/70">Cursor</th>
                  </tr>
                </thead>
                <tbody>
                  <CompareRow feature="Local-first processing" mona={true} copilot={false} cursor={false} />
                  <CompareRow feature="Works offline" mona={true} copilot={false} cursor={false} />
                  <CompareRow feature="Price" mona="Free" copilot="$19/mo" cursor="$20/mo" />
                  <CompareRow feature="Open source" mona={true} copilot={false} cursor={false} />
                  <CompareRow feature="Choose your own model" mona={true} copilot={false} cursor={false} />
                  <CompareRow feature="Built-in code review" mona={true} copilot={false} cursor={true} />
                  <CompareRow feature="Security guards" mona={true} copilot={false} cursor={false} />
                  <CompareRow feature="Test integration" mona={true} copilot={false} cursor={false} />
                  <CompareRow feature="Multi-step plans" mona={true} copilot={false} cursor={true} />
                  <CompareRow feature="No rate limits" mona={true} copilot={false} cursor={false} />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-24">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">What devs say</div>
            <h2 className="mt-3 text-2xl font-bold">Loved by developers</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Testimonial
              quote="Finally, AI coding that doesn't make me worry about my client's NDA. Game changer for consulting work."
              author="Alex Chen"
              role="Freelance Developer"
              avatar="AC"
            />
            <Testimonial
              quote="The security guards caught two hardcoded API keys I was about to commit. Paid for itself day one."
              author="Sarah Kim"
              role="Backend Engineer"
              avatar="SK"
            />
            <Testimonial
              quote="Works on the plane, works in the coffee shop with bad wifi. Works everywhere. Love it."
              author="Marcus Johnson"
              role="Digital Nomad Dev"
              avatar="MJ"
            />
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-24">
          <div className="rounded-[32px] border border-green-500/30 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-8 backdrop-blur-xl md:p-10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  <Heart className="h-4 w-4" />
                  Open Source
                </div>
                <h2 className="mt-4 text-4xl font-bold">Free forever</h2>
                <p className="mt-2 max-w-md text-white/65">
                  MonaCoder is free and open source. No subscriptions required for local mode,
                  no surprise bills. Just install and code.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold">$0</div>
                <div className="mt-1 text-white/50">per month, forever</div>
                <button
                  className="mt-4 inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
                  onClick={() => scrollToId("install")}
                >
                  Install now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-4">
              {[
                "Unlimited usage",
                "All 17 skills",
                "Multi-model support",
                "Security guards",
                "Code review",
                "Test integration",
                "Context search",
                "Works offline",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTALL */}
        <section id="install" className="mt-24">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-white/50">Get started</div>
              <h2 className="mt-3 text-3xl font-bold">Up and running in 5 minutes</h2>
            </div>

            <div className="mx-auto mt-10 max-w-xl space-y-6">
              <Step
                num={1}
                title="Install Ollama"
                desc="The local AI runtime that powers MonaCoder."
                cmd="brew install ollama"
              />
              <Step
                num={2}
                title="Pull a model"
                desc="Choose any model you like. Start small, upgrade later."
                cmd="ollama pull codellama:7b"
              />
              <Step
                num={3}
                title="Install extension"
                desc="Search 'MonaCoder' in VS Code Marketplace and click install."
              />
              <Step
                num={4}
                title="Start coding"
                desc="Open the MonaCoder panel and ask your first question. That's it!"
              />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                <Download className="mr-2 h-5 w-5" />
                VS Code Marketplace
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold">Ready to code with privacy?</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/65">
            Join thousands of developers using local-first AI coding.
            No signup, no credit card, no BS.
          </p>
          <button
            className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-semibold transition hover:opacity-90"
            onClick={() => scrollToId("install")}
          >
            <Coffee className="mr-2 h-5 w-5" />
            Get MonaCoder free
          </button>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 flex flex-col items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/50 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            <span>MonaCoder</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Discord</a>
            <span>MIT License</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
