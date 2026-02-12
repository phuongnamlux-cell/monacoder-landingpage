import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Code2,
  GitPullRequest,
  Bot,
  Lock,
  Gauge,
  FileDiff,
  Terminal,
  Wand2,
  Bug,
  TestTube,
  FileText,
  Package,
  Zap,
  GitMerge,
  Target,
  MessageSquare,
  Cpu,
  Search,
  RefreshCw,
  Eye,
  Play,
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
          <div className="text-xs text-white/55">100% Local AI coding in VS Code</div>
        </div>
      </button>

      <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {[
          { t: "Features", id: "features" },
          { t: "Skills", id: "skills" },
          { t: "Workflow", id: "workflow" },
          { t: "Guided", id: "guided" },
          { t: "Models", id: "models" },
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

      <div className="flex items-center gap-2">
        <button
          className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 md:inline-flex"
          onClick={() => scrollToId("docs")}
        >
          <Terminal className="mr-2 h-4 w-4" />
          Docs
        </button>
        <button
          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
          onClick={() => scrollToId("cta")}
        >
          Install extension
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

const SkillPill = ({
  icon,
  label,
  hint,
  onClick,
  tone = "default",
  size = "md",
}: {
  icon: React.ReactNode;
  label: string;
  hint?: string;
  onClick?: () => void;
  tone?: "default" | "primary";
  size?: "sm" | "md";
}) => {
  const base =
    size === "sm"
      ? "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold"
      : "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold";

  const primary = "group " + base + " bg-white text-black transition hover:opacity-90";
  const secondary =
    "group " +
    base +
    " border border-white/10 bg-white/5 text-white/85 backdrop-blur-xl transition hover:bg-white/10";

  return (
    <button onClick={onClick} className={tone === "primary" ? primary : secondary}>
      <span className={tone === "primary" ? "text-black/80" : "text-white/80"}>{icon}</span>
      <span>{label}</span>
      {hint ? (
        <span
          className={
            tone === "primary"
              ? "ml-1 text-[10px] text-black/60"
              : "ml-1 text-[10px] text-white/50"
          }
        >
          {hint}
        </span>
      ) : null}
    </button>
  );
};

const SkillBar = ({
  compact = false,
  showFooter = true,
}: {
  compact?: boolean;
  showFooter?: boolean;
}) => {
  const [open, setOpen] = React.useState(false);
  const size = compact ? "sm" : "md";

  // 9 Core Skills
  const primary = [
    { id: "skill.debug.system", label: "Debug", icon: <Bug className="h-4 w-4" /> },
    { id: "skill.refactor.system", label: "Refactor", icon: <Wand2 className="h-4 w-4" /> },
    { id: "skill.checklist.from_plan_doc", label: "Checklist", icon: <CheckCircle2 className="h-4 w-4" /> },
    { id: "skill.inspect.index_codebase", label: "Index", icon: <Search className="h-4 w-4" /> },
    { id: "skill.plan.execute_checklist", label: "A–Z", icon: <Play className="h-4 w-4" /> },
    { id: "skill.git.commit_push", label: "Git Push", icon: <GitPullRequest className="h-4 w-4" /> },
  ];

  // 8 Add-on Skills in dropdown
  const more = [
    { id: "skill.git.clone_repo", label: "Clone", icon: <FileDiff className="h-4 w-4" /> },
    { id: "skill.security.scan_guard", label: "Security", icon: <Shield className="h-4 w-4" /> },
    { id: "skill.benchmark.from_repo", label: "Benchmark", icon: <Gauge className="h-4 w-4" /> },
    { id: "skill.tests.fix_ci", label: "Fix CI", icon: <Bug className="h-4 w-4" /> },
    { id: "skill.tests.add_expand", label: "Add Tests", icon: <TestTube className="h-4 w-4" /> },
    { id: "skill.docs.adr_release_notes", label: "Docs/ADR", icon: <FileText className="h-4 w-4" /> },
    { id: "skill.deps.audit_upgrade", label: "Deps Audit", icon: <Package className="h-4 w-4" /> },
    { id: "skill.perf.profile_optimize", label: "Perf", icon: <Zap className="h-4 w-4" /> },
    { id: "skill.pr.prepare", label: "PR Pack", icon: <GitMerge className="h-4 w-4" /> },
    { id: "skill.impact.map", label: "Impact", icon: <Target className="h-4 w-4" /> },
    { id: "skill.prompt.doctor", label: "Prompt Doctor", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  return (
    <div className="relative">
      <div
        className={
          compact ? "flex flex-wrap gap-2" : "flex flex-nowrap gap-2 overflow-x-auto pb-1"
        }
      >
        {primary.map((s) => (
          <SkillPill
            key={s.id}
            icon={s.icon}
            label={s.label}
            size={size}
            onClick={() => scrollToId("skills")}
          />
        ))}

        <div className="relative">
          <SkillPill
            icon={<ChevronDown className="h-4 w-4" />}
            label="+11 More"
            size={size}
            onClick={() => setOpen((v) => !v)}
          />
          {open ? (
            <div className="absolute right-0 z-20 mt-2 w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#070A12]/80 p-2 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
              {more.map((s) => (
                <button
                  key={s.id}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  onClick={() => {
                    setOpen(false);
                    scrollToId("skills");
                  }}
                >
                  <span className="text-white/75">{s.icon}</span>
                  <span className="font-semibold">{s.label}</span>
                  <span className="ml-auto text-xs text-white/45">skill</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="ml-auto hidden md:block" />
        <div className="hidden md:flex">
          <SkillPill
            tone="primary"
            icon={<Sparkles className="h-4 w-4" />}
            label="Guided Intake"
            hint="6 steps"
            size={size}
            onClick={() => scrollToId("guided")}
          />
        </div>
      </div>

      {showFooter ? (
        <div className="mt-2 text-xs text-white/45">
          17 Quick Skills — reduce prompt ambiguity with structured templates before calling local models.
        </div>
      ) : null}
    </div>
  );
};

const Badge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
    {icon}
    {text}
  </span>
);

const StatPill = ({ title, value }: { title: string; value: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
    <div className="text-xs text-white/55">{title}</div>
    <div className="mt-1 text-lg font-semibold">{value}</div>
  </div>
);

const FeatureCard = ({
  icon,
  title,
  desc,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  cta?: { label: string; id: string };
}) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        {icon}
      </div>
      <div className="text-lg font-semibold">{title}</div>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-white/65">{desc}</p>
    {cta ? (
      <button
        className="mt-4 inline-flex items-center text-sm font-semibold text-white/80 transition hover:text-white"
        onClick={() => scrollToId(cta.id)}
      >
        {cta.label} <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    ) : null}
  </div>
);

const Chip = ({ text }: { text: string }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/55">
    {text}
  </span>
);

function PatchSessionMock() {
  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-[90px] opacity-40" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[110px] opacity-20" />

      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative p-5 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Bot className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Patch Session</div>
              <div className="text-xs text-white/55">code model • review gate</div>
            </div>
          </div>
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs text-green-400">
            PASS
          </span>
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-[#070A12]/40 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/55">Proposed changes</div>
            <div className="flex gap-2">
              <Chip text="3 files" />
              <Chip text="+128 / -42" />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {[
              { f: "src/ui/ChatViewProvider.ts", s: "+54  -12" },
              { f: "src/patch-extract.ts", s: "+41  -18" },
              { f: "src/ollama.ts", s: "+33  -12" },
            ].map((r) => (
              <div
                key={r.f}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <FileDiff className="h-4 w-4 text-white/75" />
                  <div className="text-sm text-white/85">{r.f}</div>
                </div>
                <div className="text-xs text-white/55">{r.s}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10">
              Preview
            </button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10">
              Reject
            </button>
            <button className="rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-black transition hover:opacity-90">
              Apply
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-white/10 bg-[#070A12]/40 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/55">Test status</div>
            <Chip text="vitest • auto-rerun" />
          </div>
          <div className="mt-3 space-y-2">
            {[
              { t: "Unit", v: "pass", w: 100, color: "bg-green-500/60" },
              { t: "Integration", v: "pass", w: 100, color: "bg-green-500/60" },
              { t: "E2E", v: "running", w: 45, color: "bg-blue-500/60" },
            ].map((row) => (
              <div key={row.t} className="flex items-center justify-between">
                <div className="text-sm text-white/80">{row.t}</div>
                <div className="flex items-center gap-2 text-xs text-white/55">
                  <span className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                    <span
                      className={`block h-full rounded-full ${row.color}`}
                      style={{ width: `${row.w}%` }}
                    />
                  </span>
                  <span>{row.v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Chip text="PATCH_JSON sentinel" />
          <Chip text="3-stage extraction" />
          <Chip text="guard validation" />
          <Chip text="auto-rollback" />
        </div>
      </div>
    </div>
  );
}

export default function MonaCoderLandingPage() {
  return (
    <div id="top" className="min-h-screen bg-[#070A12] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px] opacity-20" />
        <div className="absolute -right-24 top-1/3 h-[520px] w-[520px] rounded-full bg-white/10 blur-[110px] opacity-15" />
        <div className="absolute left-10 top-2/3 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px] opacity-10" />

        <svg
          className="absolute inset-0 opacity-[0.10]"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
        >
          <path
            d="M-40,560 C180,360 260,420 420,340 C560,270 650,180 820,210 C980,236 1010,120 1260,90"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
          />
          <path
            d="M-30,640 C200,460 300,520 470,430 C620,350 740,260 900,290 C1040,315 1080,200 1260,160"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <NavPill />

      <main className="mx-auto mt-10 w-[min(1120px,92vw)] pb-20">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_30px_120px_-60px_rgba(0,0,0,0.9)] md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-20 h-[420px] w-[420px] rounded-full bg-white/10 blur-[90px] opacity-40" />
          <div className="pointer-events-none absolute -left-28 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[110px] opacity-25" />

          <div className="relative grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex flex-wrap items-center gap-2"
              >
                <Badge
                  icon={<Lock className="h-4 w-4" />}
                  text="100% Local — Zero cloud, all Ollama"
                />
                <Badge
                  icon={<Shield className="h-4 w-4" />}
                  text="Review gate + Guard validation"
                />
                <Badge icon={<Cpu className="h-4 w-4" />} text="Multi-model support" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
              >
                AI coding assistant that runs
                <span className="block text-white/90">entirely on your machine</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
              >
                MonaCoder is a patch-first VS Code extension powered by local Ollama models.
                Generate structured PATCH_JSON, review with AI, validate with guard rules,
                and apply changes safely—all without sending code to the cloud.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <button
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                  onClick={() => scrollToId("cta")}
                >
                  Install extension
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur-xl transition hover:bg-white/10"
                  onClick={() => scrollToId("models")}
                >
                  View models
                </button>
                <button
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur-xl transition hover:bg-white/10"
                  onClick={() => scrollToId("guided")}
                >
                  Guided Intake
                </button>
              </motion.div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                <StatPill title="Skills" value="17 built-in" />
                <StatPill title="Extraction" value="3-stage" />
                <StatPill title="Review" value="3-tier gate" />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-white/55">
                <Chip text="LLM Router (intent detection)" />
                <Chip text="Wave-based plan execution" />
                <Chip text="Semantic context search" />
                <Chip text="Test failure boost" />
                <Chip text="Auto-apply guards" />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative min-h-[460px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <PatchSessionMock />
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/55">Quick Skills</div>
                    <div className="mt-1 text-sm font-semibold">17 one-click templates</div>
                  </div>
                  <button
                    className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10 md:inline-flex"
                    onClick={() => scrollToId("skills")}
                  >
                    View all
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3">
                  <SkillBar compact showFooter={false} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <ChevronDown className="h-4 w-4" />
              Scroll down
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/45">
              {["Local-only", "PATCH_JSON", "Guard rules", "LLM Router", "Context Engine"].map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs text-white/55">Why MonaCoder</div>
              <div className="mt-2 text-2xl font-semibold">Built for real production workflows</div>
            </div>
            <div className="hidden items-center gap-2 text-xs text-white/55 md:flex">
              <CheckCircle2 className="h-4 w-4" />
              Privacy-first, zero cloud dependency
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<Code2 className="h-5 w-5" />}
              title="PATCH_JSON format"
              desc="All code changes are structured as PATCH_JSON with files/edits arrays. 3-stage extraction: Sentinel → Scored → Confirmation fallback."
              cta={{ label: "See workflow", id: "workflow" }}
            />
            <FeatureCard
              icon={<Eye className="h-5 w-5" />}
              title="Review + Guard gate"
              desc="AI review with PASS/DEGRADED/FAIL verdicts. Guard validation blocks secrets, eval(), dangerous patterns, and sensitive paths."
              cta={{ label: "How safety works", id: "security" }}
            />
            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="LLM Router"
              desc="Intelligent intent detection with configurable chat model. Routes to reply (chat), delegate (single patch), or plan (multi-step) actions."
              cta={{ label: "Guided prompts", id: "guided" }}
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Multi-threaded AI"
              desc="Parallel review (3 concurrent), wave-based plan execution, 2-phase apply (prepare parallel, commit serial). Multi-model routing for specialized tasks."
              cta={{ label: "See workflow", id: "workflow" }}
            />
            <FeatureCard
              icon={<Lock className="h-5 w-5" />}
              title="100% Local"
              desc="All models run via Ollama on your machine. Multi-endpoint support for distributed setups. No data leaves your workspace."
              cta={{ label: "View models", id: "models" }}
            />
            <FeatureCard
              icon={<Search className="h-5 w-5" />}
              title="Context Engine"
              desc="Semantic search with configurable embedding model. Hybrid retrieval: vector + keyword + recency + open files scoring."
              cta={{ label: "See workflow", id: "workflow" }}
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<RefreshCw className="h-5 w-5" />}
              title="Test-aware iteration"
              desc="Auto-run tests after apply (vitest/jest/mocha). Failure signals boost context retrieval for the next patch attempt."
              cta={{ label: "See workflow", id: "workflow" }}
            />
            <FeatureCard
              icon={<Cpu className="h-5 w-5" />}
              title="Multi-model routing"
              desc="Different models for different tasks: chat/router, code generation, review, and architecture. Fully configurable via settings."
              cta={{ label: "View models", id: "models" }}
            />
            <FeatureCard
              icon={<Gauge className="h-5 w-5" />}
              title="Prewarm & optimize"
              desc="Auto-prewarm models on startup. Configurable timeouts per model type. Latest-wins lock prevents stale operations."
              cta={{ label: "View models", id: "models" }}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-10">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="text-xs text-white/55">Quick Skills</div>
                <div className="mt-2 text-2xl font-semibold">17 built-in templates (9 core + 8 add-on)</div>
                <p className="mt-2 max-w-2xl text-sm text-white/65">
                  MonaCoder ships with a horizontal Skill Bar. Each skill launches a guided multi-step form
                  that builds a TaskSpec—reducing prompt ambiguity before calling local models.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip text="inspect mode" />
                <Chip text="plan mode" />
                <Chip text="patch mode" />
              </div>
            </div>

            <div className="mt-6">
              <SkillBar compact showFooter={false} />
            </div>

            {/* Core Skills */}
            <div className="mt-6">
              <div className="mb-3 text-sm font-semibold text-white/70">Core Skills (9)</div>
              <div className="grid gap-4 md:grid-cols-3">
                <FeatureCard
                  icon={<Bug className="h-5 w-5" />}
                  title="Debug System"
                  desc="Paste symptoms/logs, pick analysis depth (quick 15m or deep 60m). Get triage report with root causes and fix suggestions."
                />
                <FeatureCard
                  icon={<Wand2 className="h-5 w-5" />}
                  title="Refactor System"
                  desc="Select target files, goal, and constraints. Produces a safe refactor plan with test policy options (keep/add_missing/add_minimal)."
                />
                <FeatureCard
                  icon={<CheckCircle2 className="h-5 w-5" />}
                  title="Checklist from Plan"
                  desc="Turn a plan document into DoD/milestone checklist with section anchors or line range references."
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <FeatureCard
                icon={<Search className="h-5 w-5" />}
                title="Index Codebase"
                desc="Map modules, dependencies, entrypoints, dataflow, and security hotspots. Save context to session or write to docs."
              />
              <FeatureCard
                icon={<Play className="h-5 w-5" />}
                title="Execute A–Z"
                desc="Run a checklist end-to-end with checkpoints (each step or major only), apply policy (manual/auto), and stop-on-fail option."
              />
              <FeatureCard
                icon={<GitPullRequest className="h-5 w-5" />}
                title="Git Commit & Push"
                desc="Stage, commit, and push with clean message flow. Supports branch selection and file filtering."
              />
            </div>

            {/* Add-on Skills */}
            <div className="mt-6">
              <div className="mb-3 text-sm font-semibold text-white/70">Add-on Skills (8)</div>
              <div className="grid gap-4 md:grid-cols-4">
                <FeatureCard
                  icon={<Bug className="h-5 w-5" />}
                  title="Fix CI"
                  desc="Analyze CI/test failures with output parsing. Generate analysis or auto-fix plan."
                />
                <FeatureCard
                  icon={<TestTube className="h-5 w-5" />}
                  title="Add Tests"
                  desc="Generate unit/integration/e2e tests with coverage goals. Support vitest/jest/mocha."
                />
                <FeatureCard
                  icon={<FileText className="h-5 w-5" />}
                  title="Docs/ADR"
                  desc="Generate ADR, release notes, changelog, or README sections from git diff or manual input."
                />
                <FeatureCard
                  icon={<Package className="h-5 w-5" />}
                  title="Deps Audit"
                  desc="Audit dependencies for vulnerabilities. Generate upgrade plan with version policy controls."
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-4">
              <FeatureCard
                icon={<Zap className="h-5 w-5" />}
                title="Perf Analyze"
                desc="Profile code hotspots, bundle size, memory usage. Generate optimization plan."
              />
              <FeatureCard
                icon={<GitMerge className="h-5 w-5" />}
                title="PR Pack"
                desc="Generate PR description with test plan and risk assessment from git diff."
              />
              <FeatureCard
                icon={<Target className="h-5 w-5" />}
                title="Impact Map"
                desc="Map dependencies and usages for a file/function/module with configurable depth."
              />
              <FeatureCard
                icon={<MessageSquare className="h-5 w-5" />}
                title="Prompt Doctor"
                desc="Optimize your prompts for better TaskSpec generation. Auto-detect best mode."
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/50">
              {["Skills are optional", "Vietnamese UI", "Builds TaskSpec from answers", "Reduces ambiguity"].map(
                (t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section id="workflow" className="mt-10 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-xs text-white/55">Workflow</div>
            <div className="mt-2 text-2xl font-semibold">From prompt → patch → review → apply</div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
              MonaCoder uses a tight, safe loop. The LLM Router detects intent and routes to the right handler.
              Code changes go through 3-stage extraction, guard validation, AI review, then safe apply with test rerun.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                {
                  t: "1) Extract",
                  d: "3-stage fallback: Sentinel (<<<PATCH_JSON>>>) → Scored (find best JSON) → Confirmation (delete text). Retries on format drift.",
                },
                {
                  t: "2) Validate",
                  d: "Guard rules block secrets, eval(), dangerous patterns. AI review rates PASS/DEGRADED/FAIL with issue categorization.",
                },
                {
                  t: "3) Apply",
                  d: "Preview diffs → Apply with locks. Auto-apply guards (max 5 files, 400 lines, blocked globs). Test rerun with failure boost.",
                },
              ].map((s) => (
                <div
                  key={s.t}
                  className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-5 backdrop-blur-xl"
                >
                  <div className="text-sm font-semibold">{s.t}</div>
                  <div className="mt-2 text-sm text-white/65">{s.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-3 text-sm font-semibold text-white/70">Plan Executor (Multi-step)</div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-5 backdrop-blur-xl">
                  <div className="text-sm font-semibold">Wave-based parallelism</div>
                  <div className="mt-2 text-sm text-white/65">
                    Independent steps run in parallel (up to 3 concurrent). Dependency graph determines execution waves.
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-5 backdrop-blur-xl">
                  <div className="text-sm font-semibold">2-Phase execution</div>
                  <div className="mt-2 text-sm text-white/65">
                    Prepare phase (parallel) generates patches. Commit phase (serial) applies to disk to avoid conflicts.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["sentinel enforcement", "format retry", "parallel review", "target conflict detection", "checkpoint support", "latest-wins lock"].map(
                (c) => (
                  <Chip key={c} text={c} />
                )
              )}
            </div>
          </div>

          <div id="security" className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-xs text-white/55">Security</div>
            <div className="mt-2 text-2xl font-semibold">Guard rules by default</div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Safety is built into the workflow. Guard validation runs on every patch. Auto-apply has strict limits.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  i: <Lock className="h-4 w-4" />,
                  t: "Secrets detection",
                  d: "Block PEM private keys, hardcoded tokens/passwords/api_keys. Warn on JWT-like strings.",
                },
                {
                  i: <Shield className="h-4 w-4" />,
                  t: "Dangerous code",
                  d: "Block eval(), Function() constructor, exec/spawn with dynamic strings.",
                },
                {
                  i: <FileDiff className="h-4 w-4" />,
                  t: "Sensitive paths",
                  d: "Warn on .env, package.json, .github/, scripts/, *.config.js. Blocked globs configurable.",
                },
                {
                  i: <Gauge className="h-4 w-4" />,
                  t: "Auto-apply limits",
                  d: "Max 5 files, 400 lines changed. Path traversal protection. Workspace boundary enforcement.",
                },
              ].map((r) => (
                <div
                  key={r.t}
                  className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-white/75">{r.i}</span>
                    <div className="text-sm font-semibold">{r.t}</div>
                  </div>
                  <div className="mt-2 text-sm text-white/65">{r.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUIDED */}
        <section id="guided" className="mt-10">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="text-xs text-white/55">Guided Intake</div>
                <div className="mt-2 text-2xl font-semibold">6-step patch flow for structured tasks</div>
                <p className="mt-2 max-w-2xl text-sm text-white/65">
                  Guided Intake turns vague prompts into a clean TaskSpec. Walk through operation, scope,
                  targets, request, constraints, and summary—then run with confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip text="patch mode" />
                <Chip text="validation built-in" />
                <Chip text="back preserves answers" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { s: "Operation", d: "Choose: create, modify, delete, refactor, fix_bug, add_tests—so the model knows the intent." },
                { s: "Scope", d: "Pick a directory (optional). Validation blocks path traversal and unsafe paths." },
                { s: "Targets", d: "List files or search:keyword patterns. Helps generate smaller, safer patches." },
                { s: "Request", d: "Describe the change with acceptance criteria. The model builds a focused prompt." },
                { s: "Constraints", d: "Add rules: no breaking changes, keep API stable, run tests, auto-apply on PASS only." },
                { s: "Summary", d: "Review the complete TaskSpec before running. Back button preserves all previous answers." },
              ].map((item, i) => (
                <div
                  key={item.s}
                  className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-6 backdrop-blur-xl"
                >
                  <div className="text-xs text-white/55">Step {i + 1}</div>
                  <div className="mt-2 text-lg font-semibold">{item.s}</div>
                  <div className="mt-2 text-sm text-white/65">{item.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Skip anytime", "Intake wins over pending tasks", "Vietnamese UI labels", "Field validation"].map((c) => (
                <Chip key={c} text={c} />
              ))}
            </div>
          </div>
        </section>

        {/* MODELS */}
        <section id="models" className="mt-10">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="text-xs text-white/55">Local Models</div>
                <div className="mt-2 text-2xl font-semibold">Powered by Ollama — all on your machine</div>
                <p className="mt-2 max-w-2xl text-sm text-white/65">
                  MonaCoder routes different tasks to specialized models. All run locally via Ollama with
                  configurable timeouts and multi-endpoint support for distributed setups.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip text="zero cloud" />
                <Chip text="multi-endpoint" />
                <Chip text="prewarm support" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-blue-400" />
                  <div className="text-lg font-semibold">Chat Model</div>
                </div>
                <div className="mt-2 text-sm text-white/65">
                  <strong>Role:</strong> Chat, Router (intent detection)<br />
                  <strong>Use:</strong> Fast responses, routing decisions, general questions<br />
                  <strong>Config:</strong> <code className="text-white/50">chatModel</code>, <code className="text-white/50">router.model</code>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-green-400" />
                  <div className="text-lg font-semibold">Code Model</div>
                </div>
                <div className="mt-2 text-sm text-white/65">
                  <strong>Role:</strong> Code generation (PATCH_JSON)<br />
                  <strong>Use:</strong> Writing code patches, follows sentinel format<br />
                  <strong>Config:</strong> <code className="text-white/50">codeModel</code>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-yellow-400" />
                  <div className="text-lg font-semibold">Review Model</div>
                </div>
                <div className="mt-2 text-sm text-white/65">
                  <strong>Role:</strong> Code review / critique<br />
                  <strong>Use:</strong> PASS/DEGRADED/FAIL verdicts, issue detection<br />
                  <strong>Config:</strong> <code className="text-white/50">reviewModel</code>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-purple-400" />
                  <div className="text-lg font-semibold">Architect Model</div>
                </div>
                <div className="mt-2 text-sm text-white/65">
                  <strong>Role:</strong> Architecture, complex design (optional)<br />
                  <strong>Use:</strong> System-level reasoning, thorough analysis<br />
                  <strong>Config:</strong> <code className="text-white/50">architectModel</code>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-[#070A12]/40 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-cyan-400" />
                <div className="text-lg font-semibold">Embedding Model</div>
              </div>
              <div className="mt-2 text-sm text-white/65">
                <strong>Role:</strong> Embeddings for Context Engine<br />
                <strong>Use:</strong> Semantic search, code similarity, hybrid retrieval<br />
                <strong>Config:</strong> <code className="text-white/50">context.embeddingModel</code>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Auto-prewarm on startup", "Per-model base URLs", "Configurable timeouts", "Retry support"].map((c) => (
                <Chip key={c} text={c} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section id="faq" className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-xs text-white/55">FAQ</div>
            <div className="mt-2 text-2xl font-semibold">Common questions</div>
            <div className="mt-6 space-y-3">
              {[
                {
                  q: "Does my code leave my machine?",
                  a: "No. MonaCoder is 100% local. All models run via Ollama on your machine. Zero cloud dependencies.",
                },
                {
                  q: "What if the model outputs bad JSON?",
                  a: "3-stage extraction with fallback: Sentinel markers → Scored JSON detection → Confirmation text. Format retry with correction prompts.",
                },
                {
                  q: "How do you prevent unsafe changes?",
                  a: "Guard validation blocks secrets, eval(), dangerous patterns. Auto-apply limits: max 5 files, 400 lines, blocked globs. AI review gates.",
                },
                {
                  q: "Can I use other Ollama models?",
                  a: "Yes. All models are configurable in settings. Multi-endpoint support for distributed Ollama instances.",
                },
              ].map((f) => (
                <div
                  key={f.q}
                  className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-5 backdrop-blur-xl"
                >
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-white/65">{f.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div id="cta" className="text-xs text-white/55">Get started</div>
            <div className="mt-2 text-2xl font-semibold">Install & start coding locally</div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Make sure Ollama is running with the required models. Install the extension and open a project.
              Try a small change, preview the patch, then apply.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90">
                Install extension
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur-xl transition hover:bg-white/10"
                onClick={() => scrollToId("docs")}
              >
                Read docs
              </button>
            </div>

            <div id="docs" className="mt-6 space-y-3">
              <div className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-5 backdrop-blur-xl">
                <div className="text-xs text-white/55">1. Install Ollama models</div>
                <div className="mt-2 font-mono text-sm text-white/80">
                  ollama pull &lt;chat-model&gt;<br />
                  ollama pull &lt;code-model&gt;<br />
                  ollama pull &lt;review-model&gt;<br />
                  ollama pull &lt;embedding-model&gt;
                </div>
                <div className="mt-2 text-xs text-white/55">Configure your preferred models in extension settings</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#070A12]/40 p-5 backdrop-blur-xl">
                <div className="text-xs text-white/55">2. Install extension</div>
                <div className="mt-2 font-mono text-sm text-white/80">code --install-extension monacoder.vsix</div>
                <div className="mt-2 text-xs text-white/55">(or install from VS Code Marketplace)</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "JavaScript",
                "Python",
                "Any Ollama model",
                "VS Code 1.85+",
              ].map((c) => (
                <Chip key={c} text={c} />
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">MonaCoder v0.4.2</div>
                  <div className="text-xs text-white/55">100% Local AI coding for VS Code</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip text="MIT License" />
                <Chip text="GitHub" />
                <Chip text="Changelog" />
                <Chip text="Issues" />
              </div>
            </div>
            <div className="mt-6 text-xs text-white/45">© {new Date().getFullYear()} MonaCoder. Powered by Ollama and local LLMs.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
