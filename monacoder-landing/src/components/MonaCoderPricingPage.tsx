import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Sparkles,
  ShieldCheck,
  Cpu,
  GitBranch,
  Users,
  Wrench,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const NavPill = () => (
  <div className="mx-auto mt-6 w-[min(1000px,92vw)]">
    <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600">
          <Code2 className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">MonaCoder Pricing</div>
          <div className="text-xs text-white/55">Simple, transparent, local-first</div>
        </div>
      </div>

      <button
        className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
        onClick={() => scrollToId("plans")}
      >
        View plans
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const PlanCard = ({
  title,
  price,
  desc,
  items,
  tone = "base",
  cta,
}: {
  title: string;
  price: string;
  desc: string;
  items: string[];
  tone?: "base" | "accent";
  cta: { label: string; onClick: () => void };
}) => (
  <div
    className={`rounded-3xl border p-7 backdrop-blur-xl ${
      tone === "accent"
        ? "border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5"
        : "border-white/10 bg-white/5"
    }`}
  >
    <div className="text-sm font-medium text-white/70">{title}</div>
    <div className="mt-2 text-4xl font-bold">{price}</div>
    <p className="mt-2 text-sm text-white/65">{desc}</p>

    <div className="mt-6 space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
          <span className="text-sm text-white/80">{item}</span>
        </div>
      ))}
    </div>

    <button
      className={`mt-7 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
        tone === "accent"
          ? "bg-gradient-to-r from-emerald-500 to-cyan-600 text-black hover:opacity-90"
          : "border border-white/10 bg-white/5 text-white/85 hover:bg-white/10"
      }`}
      onClick={cta.onClick}
    >
      {cta.label}
    </button>
  </div>
);

const CompareRow = ({
  feature,
  community,
  team,
}: {
  feature: string;
  community: string;
  team: string;
}) => (
  <tr className="border-b border-white/10">
    <td className="px-5 py-4 text-sm">{feature}</td>
    <td className="px-5 py-4 text-center text-sm text-white/75">{community}</td>
    <td className="px-5 py-4 text-center text-sm text-emerald-300">{team}</td>
  </tr>
);

export default function MonaCoderPricingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d] text-white antialiased">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-600/20 via-cyan-600/10 to-transparent blur-[100px]" />
      </div>

      <NavPill />

      <main className="relative mx-auto max-w-5xl px-5 pb-20 pt-10">
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
          >
            <Sparkles className="h-4 w-4" />
            <span>Current status: MIT licensed + free to use</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
          >
            Pricing that matches
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              how MonaCoder works today
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/65"
          >
            MonaCoder is local-first and open source. You can run fully local with Ollama,
            or optionally bridge Claude CLI / Codex CLI based on your team policy.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">MCP server + client</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">17 quick skills</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Patch + review + guard flow</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">UI rollout flags</div>
          </div>
        </section>

        <section id="plans" className="mt-16 grid gap-5 md:grid-cols-2">
          <PlanCard
            title="Community"
            price="$0"
            desc="Default experience for individuals and teams running MonaCoder in local-first mode."
            items={[
              "All core extension features",
              "Ollama local execution",
              "Optional Claude CLI / Codex CLI bridge",
              "MCP integration and guardrails",
              "MIT license",
            ]}
            tone="accent"
            cta={{
              label: "Install from Marketplace",
              onClick: () => window.open("https://marketplace.visualstudio.com", "_blank"),
            }}
          />

          <PlanCard
            title="Team Enablement"
            price="Custom"
            desc="Optional services for organizations that need onboarding, policy setup, and rollout support."
            items={[
              "Onboarding and rollout playbook",
              "Policy and guard configuration workshop",
              "Provider routing strategy (local-first + bridge)",
              "Internal training for engineering teams",
              "Priority advisory support",
            ]}
            cta={{
              label: "Contact for support",
              onClick: () => window.open("mailto:team@monacoder.dev", "_self"),
            }}
          />
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-emerald-300">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Capability & Access Matrix</span>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-5 py-3 text-left text-sm font-semibold">Area</th>
                  <th className="px-5 py-3 text-center text-sm font-semibold text-white/70">Community</th>
                  <th className="px-5 py-3 text-center text-sm font-semibold text-emerald-300">Team Enablement</th>
                </tr>
              </thead>
              <tbody>
                <CompareRow feature="Extension features" community="Included" team="Included" />
                <CompareRow feature="Local runtime (Ollama)" community="Included" team="Included" />
                <CompareRow feature="CLI bridge providers" community="Included" team="Guidance + policy setup" />
                <CompareRow feature="MCP setup" community="Self-serve" team="Assisted onboarding" />
                <CompareRow feature="Security/guard policy" community="Configurable" team="Workshop + templates" />
                <CompareRow feature="Support" community="Community" team="Priority advisory" />
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <Cpu className="h-6 w-6 text-cyan-300" />
            <div className="mt-3 font-semibold">Local-first by default</div>
            <p className="mt-2 text-sm text-white/65">
              Keep execution on your machine with Ollama and choose bridge providers only when needed.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <GitBranch className="h-6 w-6 text-emerald-300" />
            <div className="mt-3 font-semibold">Policy-driven rollout</div>
            <p className="mt-2 text-sm text-white/65">
              Use role routing, guard settings, and internal rollout flags to stage adoption safely.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <Users className="h-6 w-6 text-blue-300" />
            <div className="mt-3 font-semibold">Team-ready path</div>
            <p className="mt-2 text-sm text-white/65">
              Add onboarding and advisory support when you need predictable rollout across multiple teams.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold">FAQ</h2>
          </div>

          <div className="mx-auto mt-7 max-w-3xl space-y-3">
            {[
              {
                q: "Is MonaCoder free right now?",
                a: "Yes. The current extension is MIT licensed and free to use.",
              },
              {
                q: "Do I need an API key to get started?",
                a: "Not for local mode. Start with Ollama. CLI bridge providers depend on your external CLI/account setup.",
              },
              {
                q: "What does Team Enablement include?",
                a: "It is optional service support: onboarding, policy design, and rollout guidance for internal engineering teams.",
              },
              {
                q: "Can we stay fully on-premise?",
                a: "Yes. Keep all roles on Ollama and disable bridge providers. MCP server is localhost-only by default.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border border-white/10 bg-white/5">
                <summary className="cursor-pointer px-5 py-4 font-medium">{q}</summary>
                <div className="px-5 pb-4 text-sm text-white/65">{a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 p-8 text-center backdrop-blur-xl md:p-10">
          <Wrench className="mx-auto h-11 w-11 text-emerald-300" />
          <h2 className="mt-4 text-3xl font-bold">Start with the free community build</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Install MonaCoder, configure your providers, and run your first guarded patch flow in minutes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
              onClick={() => window.open("https://marketplace.visualstudio.com", "_blank")}
            >
              Install extension
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              onClick={() => window.open("/", "_self")}
            >
              View technical overview
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
            <button
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              onClick={() => window.open("mailto:team@monacoder.dev", "_self")}
            >
              Contact team support
              <MessageSquare className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>

        <footer className="mt-14 text-center text-xs text-white/45">
          <div>© {new Date().getFullYear()} MonaCoder. Local-first AI coding assistant for VS Code.</div>
        </footer>
      </main>
    </div>
  );
}
