import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  DollarSign,
  Target,
  CheckCircle2,
  Code2,
  Lock,
  Cpu,
  BarChart3,
  Rocket,
  Award,
  Building2,
  Briefcase,
  Mail,
  ChevronRight,
  Star,
  GitBranch,
  Layers,
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
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
          <Code2 className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">MonaCoder</div>
          <div className="text-xs text-white/55">Investment Opportunity</div>
        </div>
      </div>

      <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {[
          { t: "Problem", id: "problem" },
          { t: "Solution", id: "solution" },
          { t: "Market", id: "market" },
          { t: "Traction", id: "traction" },
          { t: "Contact", id: "contact" },
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
        className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold transition hover:opacity-90"
        onClick={() => scrollToId("contact")}
      >
        Contact us
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const StatCard = ({
  value,
  label,
  icon,
  highlight = false,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) => (
  <div
    className={`rounded-3xl border p-6 backdrop-blur-xl ${
      highlight
        ? "border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-purple-500/5"
        : "border-white/10 bg-white/5"
    }`}
  >
    <div className="flex items-center gap-3">
      <div className={`${highlight ? "text-indigo-400" : "text-white/60"}`}>{icon}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
    <div className="mt-2 text-sm text-white/65">{label}</div>
  </div>
);

const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10">
      {icon}
    </div>
    <div>
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-white/65">{desc}</p>
    </div>
  </div>
);

const CompetitorRow = ({
  name,
  privacy,
  cost,
  local,
  customizable,
}: {
  name: string;
  privacy: boolean;
  cost: string;
  local: boolean;
  customizable: boolean;
}) => (
  <tr className="border-b border-white/10">
    <td className="py-3 font-medium">{name}</td>
    <td className="py-3 text-center">
      {privacy ? (
        <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
      ) : (
        <span className="text-white/40">✗</span>
      )}
    </td>
    <td className="py-3 text-center text-sm text-white/70">{cost}</td>
    <td className="py-3 text-center">
      {local ? (
        <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
      ) : (
        <span className="text-white/40">✗</span>
      )}
    </td>
    <td className="py-3 text-center">
      {customizable ? (
        <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
      ) : (
        <span className="text-white/40">✗</span>
      )}
    </td>
  </tr>
);

const TimelineItem = ({
  quarter,
  title,
  items,
  active = false,
}: {
  quarter: string;
  title: string;
  items: string[];
  active?: boolean;
}) => (
  <div className="relative pl-8">
    <div
      className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${
        active ? "border-indigo-500 bg-indigo-500" : "border-white/30 bg-transparent"
      }`}
    />
    <div className="text-xs font-medium uppercase tracking-wider text-indigo-400">{quarter}</div>
    <div className="mt-1 font-semibold">{title}</div>
    <ul className="mt-2 space-y-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-white/65">
          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function MonaCoderInvestorPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050709] text-white antialiased">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl" />
      </div>

      <NavPill />

      <main className="relative mx-auto max-w-5xl px-5 pb-20 pt-10">
        {/* HERO */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm"
          >
            <Rocket className="h-4 w-4 text-indigo-400" />
            <span>Investment Opportunity</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
          >
            The{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              privacy-first
            </span>{" "}
            AI coding assistant for enterprise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/65"
          >
            MonaCoder enables developers to use AI coding assistance without sending proprietary code
            to the cloud by default. Local-first, fully customizable, enterprise-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-10 grid gap-4 md:grid-cols-4"
          >
            <StatCard value="$50B+" label="AI coding tools market by 2030" icon={<TrendingUp className="h-5 w-5" />} />
            <StatCard
              value="Local-first"
              label="On-premise by default"
              icon={<Lock className="h-5 w-5" />}
              highlight
            />
            <StatCard value="17" label="Built-in productivity skills" icon={<Zap className="h-5 w-5" />} />
            <StatCard value="5" label="Configurable AI model slots" icon={<Cpu className="h-5 w-5" />} />
          </motion.div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="mt-24">
          <div className="rounded-[32px] border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-xl md:p-10">
            <div className="text-xs font-medium uppercase tracking-wider text-red-400">The Problem</div>
            <h2 className="mt-3 text-3xl font-bold">Enterprise can't use cloud AI for coding</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <FeatureRow
                  icon={<Shield className="h-5 w-5 text-red-400" />}
                  title="Security & compliance risks"
                  desc="Sending proprietary code to cloud AI violates security policies at most enterprises. Legal teams block adoption."
                />
                <FeatureRow
                  icon={<DollarSign className="h-5 w-5 text-red-400" />}
                  title="Unpredictable costs"
                  desc="Cloud AI pricing scales with usage. Enterprise teams face budget uncertainty and surprise bills."
                />
                <FeatureRow
                  icon={<Globe className="h-5 w-5 text-red-400" />}
                  title="Vendor lock-in"
                  desc="Cloud AI tools create dependency on specific providers. No control over model updates or availability."
                />
              </div>
              <div className="space-y-4">
                <FeatureRow
                  icon={<Users className="h-5 w-5 text-red-400" />}
                  title="Developer friction"
                  desc="Developers want AI assistance but face approval delays. Shadow IT becomes a compliance nightmare."
                />
                <FeatureRow
                  icon={<Target className="h-5 w-5 text-red-400" />}
                  title="One-size-fits-all limitations"
                  desc="Cloud tools can't be customized for specific codebases, coding standards, or domain knowledge."
                />
                <FeatureRow
                  icon={<Layers className="h-5 w-5 text-red-400" />}
                  title="Air-gapped environments"
                  desc="Defense, healthcare, and finance sectors operate in isolated networks. Cloud AI is simply not an option."
                />
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="mt-16">
          <div className="rounded-[32px] border border-green-500/20 bg-green-500/5 p-8 backdrop-blur-xl md:p-10">
            <div className="text-xs font-medium uppercase tracking-wider text-green-400">The Solution</div>
            <h2 className="mt-3 text-3xl font-bold">MonaCoder: Enterprise-grade local-first AI</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <FeatureRow
                  icon={<Lock className="h-5 w-5 text-green-400" />}
                  title="On-premise by default"
                  desc="Default execution runs locally via Ollama. Teams can keep code on device/network by policy and selectively enable bridges when approved."
                />
                <FeatureRow
                  icon={<Cpu className="h-5 w-5 text-green-400" />}
                  title="Multi-model architecture"
                  desc="5 configurable model slots for different tasks. Use Ollama models and optional Claude CLI / Codex CLI bridges without code changes."
                />
                <FeatureRow
                  icon={<Shield className="h-5 w-5 text-green-400" />}
                  title="Built-in security guards"
                  desc="Automatic validation blocks secrets, dangerous patterns, and sensitive file access before code is applied."
                />
              </div>
              <div className="space-y-4">
                <FeatureRow
                  icon={<Zap className="h-5 w-5 text-green-400" />}
                  title="17 productivity skills"
                  desc="Pre-built workflows for debugging, refactoring, testing, security audits, and more. Guided forms ensure quality output."
                />
                <FeatureRow
                  icon={<GitBranch className="h-5 w-5 text-green-400" />}
                  title="Safe auto-apply"
                  desc="AI-generated code is reviewed before applying. Configurable limits prevent runaway changes. Auto-rollback on test failure."
                />
                <FeatureRow
                  icon={<Building2 className="h-5 w-5 text-green-400" />}
                  title="Enterprise customization"
                  desc="Configure coding standards, blocked patterns, and domain-specific knowledge. Integrate with existing toolchains."
                />
              </div>
            </div>
          </div>
        </section>

        {/* COMPETITIVE LANDSCAPE */}
        <section className="mt-16">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Competitive Landscape</div>
            <h2 className="mt-3 text-2xl font-bold">How we compare</h2>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-left">
                    <th className="pb-3 font-semibold">Product</th>
                    <th className="pb-3 text-center font-semibold">Data Privacy</th>
                    <th className="pb-3 text-center font-semibold">Cost Model</th>
                    <th className="pb-3 text-center font-semibold">Runs Local</th>
                    <th className="pb-3 text-center font-semibold">Customizable</th>
                  </tr>
                </thead>
                <tbody>
                  <CompetitorRow
                    name="GitHub Copilot"
                    privacy={false}
                    cost="$19-39/user/mo"
                    local={false}
                    customizable={false}
                  />
                  <CompetitorRow
                    name="Cursor"
                    privacy={false}
                    cost="$20/user/mo"
                    local={false}
                    customizable={false}
                  />
                  <CompetitorRow
                    name="Amazon CodeWhisperer"
                    privacy={false}
                    cost="$19/user/mo"
                    local={false}
                    customizable={false}
                  />
                  <CompetitorRow
                    name="Tabnine Enterprise"
                    privacy={true}
                    cost="$39/user/mo"
                    local={true}
                    customizable={false}
                  />
                  <tr className="border-b border-indigo-500/30 bg-indigo-500/10">
                    <td className="py-3 font-bold text-indigo-300">MonaCoder</td>
                    <td className="py-3 text-center">
                      <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
                    </td>
                    <td className="py-3 text-center text-sm font-medium text-green-400">One-time license</td>
                    <td className="py-3 text-center">
                      <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
                    </td>
                    <td className="py-3 text-center">
                      <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* MARKET */}
        <section id="market" className="mt-16">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Market Opportunity</div>
            <h2 className="mt-3 text-3xl font-bold">Massive and growing TAM</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center">
              <div className="text-4xl font-bold text-indigo-400">$50B+</div>
              <div className="mt-2 text-sm text-white/65">AI coding tools market by 2030</div>
              <div className="mt-4 text-xs text-white/50">Source: Grand View Research</div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center">
              <div className="text-4xl font-bold text-purple-400">28M+</div>
              <div className="mt-2 text-sm text-white/65">Professional developers worldwide</div>
              <div className="mt-4 text-xs text-white/50">Source: Statista 2024</div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center">
              <div className="text-4xl font-bold text-green-400">67%</div>
              <div className="mt-2 text-sm text-white/65">Enterprises concerned about AI data privacy</div>
              <div className="mt-4 text-xs text-white/50">Source: Gartner 2024</div>
            </div>
          </div>

          <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">Target segments</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Building2 className="h-6 w-6 text-indigo-400" />
                <div className="mt-3 font-semibold">Enterprise</div>
                <p className="mt-1 text-sm text-white/65">
                  Fortune 500 companies with strict security requirements. Average deal size: $50K-500K/year.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Shield className="h-6 w-6 text-purple-400" />
                <div className="mt-3 font-semibold">Regulated industries</div>
                <p className="mt-1 text-sm text-white/65">
                  Healthcare, finance, defense, government. Compliance mandates local processing.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Globe className="h-6 w-6 text-green-400" />
                <div className="mt-3 font-semibold">Privacy-conscious teams</div>
                <p className="mt-1 text-sm text-white/65">
                  Startups and agencies handling sensitive client code. Growing fast in EU/APAC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRACTION */}
        <section id="traction" className="mt-16">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Traction & Roadmap</div>
            <h2 className="mt-3 text-2xl font-bold">Where we are and where we're going</h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-indigo-400">Current status</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Fully functional VS Code extension</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-sm">17 productivity skills implemented</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Multi-model architecture (5 model slots)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Security guard system active</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Context-aware code search</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 border-l border-white/10 pl-6">
                <TimelineItem
                  quarter="Q1 2025"
                  title="Enterprise features"
                  items={["Team collaboration", "Centralized config", "Usage analytics"]}
                  active
                />
                <TimelineItem
                  quarter="Q2 2025"
                  title="Platform expansion"
                  items={["JetBrains plugin", "Neovim support", "CLI tool"]}
                />
                <TimelineItem
                  quarter="Q3 2025"
                  title="Enterprise sales"
                  items={["Sales team hiring", "Channel partnerships", "SOC 2 compliance"]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS MODEL */}
        <section className="mt-16">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Business Model</div>
            <h2 className="mt-3 text-2xl font-bold">Revenue streams</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-6">
                <div className="text-2xl font-bold">Individual</div>
                <div className="mt-1 text-3xl font-bold text-indigo-400">Free</div>
                <p className="mt-3 text-sm text-white/65">Open source core for individual developers. Builds community and awareness.</p>
              </div>
              <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-6">
                <div className="text-2xl font-bold">Team</div>
                <div className="mt-1 text-3xl font-bold text-purple-400">$29<span className="text-lg">/user/mo</span></div>
                <p className="mt-3 text-sm text-white/65">Shared config, team skills, priority support. 5+ seats.</p>
              </div>
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
                <div className="text-2xl font-bold">Enterprise</div>
                <div className="mt-1 text-3xl font-bold text-green-400">Custom</div>
                <p className="mt-3 text-sm text-white/65">On-premise deployment, SSO, audit logs, dedicated support, SLA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ASK */}
        <section className="mt-16">
          <div className="rounded-[32px] border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-8 backdrop-blur-xl md:p-10">
            <div className="text-xs font-medium uppercase tracking-wider text-indigo-400">The Ask</div>
            <h2 className="mt-3 text-3xl font-bold">Seeking $2M Seed Round</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">Use of funds</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                    <span className="text-sm">Engineering (60%)</span>
                    <span className="text-sm font-semibold">$1.2M</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                    <span className="text-sm">Sales & Marketing (25%)</span>
                    <span className="text-sm font-semibold">$500K</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                    <span className="text-sm">Operations (15%)</span>
                    <span className="text-sm font-semibold">$300K</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Key milestones (18 months)</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-indigo-400" />
                    <span className="text-sm">10 enterprise customers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-indigo-400" />
                    <span className="text-sm">$1M ARR</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-indigo-400" />
                    <span className="text-sm">JetBrains + Neovim plugins launched</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-indigo-400" />
                    <span className="text-sm">SOC 2 Type II certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10 text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Get in touch</div>
            <h2 className="mt-3 text-3xl font-bold">Let's discuss the opportunity</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              We're looking for strategic investors who understand the enterprise AI market
              and can help accelerate our go-to-market.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:invest@monacoder.dev"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-semibold transition hover:opacity-90"
              >
                <Mail className="mr-2 h-5 w-5" />
                invest@monacoder.dev
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Download pitch deck
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Bootstrapped to date</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Technical founders</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Product-market fit validated</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} MonaCoder. Confidential — For qualified investors only.</p>
        </footer>
      </main>
    </div>
  );
}
