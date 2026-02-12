import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Sparkles,
  Wand2,
  Zap,
  Cloud,
  Key,
  MessageSquare,
  MousePointer,
  Smile,
  Coffee,
  Lightbulb,
  Play,
  Star,
  Heart,
  Rocket,
  Gift,
  Shield,
  Clock,
  ThumbsUp,
  ChevronRight,
  ExternalLink,
  Copy,
  Settings,
  Globe,
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
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-500">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">MonaCoder</div>
          <div className="text-xs text-white/55">Vibe Coding Edition ✨</div>
        </div>
      </div>

      <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {[
          { t: "How it works", id: "how" },
          { t: "Providers", id: "providers" },
          { t: "Get started", id: "start" },
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
        className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 text-sm font-semibold transition hover:opacity-90"
        onClick={() => scrollToId("start")}
      >
        Start vibing
        <Sparkles className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const FeatureCard = ({
  icon,
  title,
  desc,
  color = "pink",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color?: "pink" | "orange" | "purple" | "blue";
}) => {
  const colors = {
    pink: "from-pink-500/20 to-pink-500/5 border-pink-500/20",
    orange: "from-orange-500/20 to-orange-500/5 border-orange-500/20",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/20",
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/20",
  };

  return (
    <div
      className={`rounded-3xl border bg-gradient-to-br ${colors[color]} p-6 backdrop-blur-xl`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
        {icon}
      </div>
      <div className="mt-4 text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/65">{desc}</p>
    </div>
  );
};

const ProviderCard = ({
  name,
  logo,
  desc,
  price,
  link,
  popular = false,
}: {
  name: string;
  logo: string;
  desc: string;
  price: string;
  link: string;
  popular?: boolean;
}) => (
  <div
    className={`relative rounded-3xl border p-6 backdrop-blur-xl transition hover:bg-white/[0.03] ${
      popular ? "border-pink-500/30 bg-pink-500/5" : "border-white/10 bg-white/5"
    }`}
  >
    {popular && (
      <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-3 py-1 text-xs font-semibold">
        ⭐ Recommended
      </div>
    )}
    <div className="text-3xl">{logo}</div>
    <div className="mt-3 text-lg font-semibold">{name}</div>
    <p className="mt-1 text-sm text-white/65">{desc}</p>
    <div className="mt-3 text-sm font-medium text-pink-400">{price}</div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center text-sm text-white/70 transition hover:text-white"
    >
      Setup guide <ExternalLink className="ml-1 h-3 w-3" />
    </a>
  </div>
);

const Step = ({
  num,
  title,
  desc,
  visual,
}: {
  num: number;
  title: string;
  desc: string;
  visual?: React.ReactNode;
}) => (
  <div className="flex gap-6">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-lg font-bold">
      {num}
    </div>
    <div className="flex-1">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-1 text-white/65">{desc}</p>
      {visual && <div className="mt-4">{visual}</div>}
    </div>
  </div>
);

const Testimonial = ({
  quote,
  author,
  emoji,
}: {
  quote: string;
  author: string;
  emoji: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
    <div className="text-2xl">{emoji}</div>
    <p className="mt-3 text-sm italic text-white/75">"{quote}"</p>
    <div className="mt-3 text-xs text-white/50">— {author}</div>
  </div>
);

export default function MonaCoderVibeCodePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0812] text-white antialiased">
      {/* Colorful background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-pink-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-20 h-[500px] w-[500px] rounded-full bg-orange-600/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[80px]" />
      </div>

      <NavPill />

      <main className="relative mx-auto max-w-4xl px-5 pb-20 pt-10">
        {/* HERO */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm"
          >
            <Sparkles className="h-4 w-4 text-pink-400" />
            <span>No coding experience needed</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
          >
            Turn your ideas into{" "}
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              working code
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-lg text-white/65"
          >
            Just describe what you want in plain English. MonaCoder uses AI to write the code for you.
            No terminal, no complex setup — just vibes. ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-3 text-sm font-semibold transition hover:opacity-90"
              onClick={() => scrollToId("start")}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Get started free
            </button>
            <button
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
              onClick={() => scrollToId("how")}
            >
              <Play className="mr-2 h-5 w-5" />
              See how it works
            </button>
          </motion.div>

          {/* Demo preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-12 max-w-2xl"
          >
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <MessageSquare className="h-4 w-4" />
                <span>You say:</span>
              </div>
              <p className="mt-2 text-lg">
                "Make me a contact form with name, email, and message fields. Add validation and a submit button."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-pink-500" />
                <span className="text-sm text-pink-400">MonaCoder is writing code...</span>
              </div>
              <div className="mt-4 rounded-2xl bg-white/5 p-4 font-mono text-xs text-white/70">
                <span className="text-pink-400">// Contact form component</span>
                <br />
                <span className="text-blue-400">export function</span> ContactForm() {"{"}
                <br />
                {"  "}...
                <br />
                {"}"}
              </div>
            </div>
          </motion.div>
        </section>

        {/* WHY VIBE CODING */}
        <section className="mt-24">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-pink-400">Why vibe coding?</div>
            <h2 className="mt-3 text-3xl font-bold">Coding should be fun, not frustrating</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <FeatureCard
              icon={<Smile className="h-6 w-6 text-pink-400" />}
              title="No experience needed"
              desc="Never written code before? No problem! Just describe what you want in plain English."
              color="pink"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-orange-400" />}
              title="Instant results"
              desc="See your ideas come to life in seconds. No waiting, no compiling, no headaches."
              color="orange"
            />
            <FeatureCard
              icon={<Wand2 className="h-6 w-6 text-purple-400" />}
              title="AI does the hard work"
              desc="Let powerful AI models handle the technical details. You focus on the creative vision."
              color="purple"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-blue-400" />}
              title="Safe to experiment"
              desc="Preview all changes before applying. Can't break anything you can't fix."
              color="blue"
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-24">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-white/50">Super simple</div>
              <h2 className="mt-3 text-2xl font-bold">How it works</h2>
            </div>

            <div className="mx-auto mt-10 max-w-xl space-y-8">
              <Step
                num={1}
                title="Choose your runtime (2 minutes)"
                desc="Start with Ollama for local mode, or use Claude CLI / Codex CLI if those tools are already installed."
              />
              <Step
                num={2}
                title="Set provider routing in settings"
                desc="Open MonaCoder settings, then choose provider per role (chat/code/review/architect)."
                visual={
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-xs">
                    <span className="text-white/50">Code Provider:</span>{" "}
                    <span className="text-pink-400">claude_cli</span>
                    <button className="ml-2 text-white/30 hover:text-white">
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                }
              />
              <Step
                num={3}
                title="Start describing what you want"
                desc='Just type naturally: "Add a dark mode toggle" or "Fix the login button" — AI handles the rest.'
              />
              <Step
                num={4}
                title="Review and apply"
                desc="See exactly what will change. Click apply if you like it. That's it — you're coding! 🎉"
              />
            </div>
          </div>
        </section>

        {/* PROVIDERS */}
        <section id="providers" className="mt-24">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Choose your AI</div>
            <h2 className="mt-3 text-3xl font-bold">Pick a runtime provider</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/65">
              MonaCoder supports local-first Ollama and optional CLI bridges.
              Choose what fits your workflow and privacy policy.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <ProviderCard
              name="Ollama (Local)"
              logo="🧩"
              desc="Run models on your own machine for private, offline-first coding."
              price="Free local runtime"
              popular
              link="https://ollama.com/download"
            />
            <ProviderCard
              name="Claude CLI"
              logo="🧠"
              desc="Bridge to Claude CLI for complex reasoning tasks when needed."
              price="Depends on your Claude setup"
              link="https://docs.anthropic.com"
            />
            <ProviderCard
              name="Codex CLI"
              logo="⚙️"
              desc="Bridge to Codex CLI for code-heavy execution flows and patch generation."
              price="Depends on your Codex setup"
              link="https://platform.openai.com/docs"
            />
            <ProviderCard
              name="MCP Tools"
              logo="🌐"
              desc="Connect MCP servers for extra tools and context with guardrails."
              price="Built-in support"
              link="https://modelcontextprotocol.io"
            />
          </div>

          <div className="mt-8 rounded-2xl border border-pink-500/20 bg-pink-500/5 p-6 text-center">
            <Lightbulb className="mx-auto h-8 w-8 text-pink-400" />
            <p className="mt-3 text-sm text-white/75">
              <strong>Pro tip:</strong> Start with <strong>Ollama local mode</strong> for privacy.
              Turn on Claude CLI or Codex CLI only for tasks that need extra reasoning power.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-24">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-white/50">Happy vibers</div>
            <h2 className="mt-3 text-2xl font-bold">People are loving it</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Testimonial
              emoji="🎨"
              quote="I'm a designer, not a coder. MonaCoder lets me prototype my ideas without bothering the dev team."
              author="Designer, 34"
            />
            <Testimonial
              emoji="📱"
              quote="Built my first app in a weekend. I just described features and it wrote everything!"
              author="Entrepreneur, 28"
            />
            <Testimonial
              emoji="🎓"
              quote="Learning to code was intimidating until I found this. Now I actually understand what the AI writes."
              author="Student, 21"
            />
          </div>
        </section>

        {/* GET STARTED */}
        <section id="start" className="mt-24">
          <div className="overflow-hidden rounded-[32px] border border-pink-500/30 bg-gradient-to-br from-pink-500/10 via-orange-500/5 to-transparent p-8 backdrop-blur-xl md:p-10">
            <div className="text-center">
              <Gift className="mx-auto h-12 w-12 text-pink-400" />
              <h2 className="mt-4 text-3xl font-bold">Ready to start vibing?</h2>
              <p className="mx-auto mt-3 max-w-lg text-white/65">
                It takes less than 5 minutes to set up. Free to try with most providers.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-md space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/20 text-sm font-bold text-pink-400">
                    1
                  </div>
                  <span className="font-medium">Install VS Code</span>
                </div>
                <p className="mt-2 pl-11 text-sm text-white/60">
                  Free code editor from Microsoft.{" "}
                  <a href="https://code.visualstudio.com" className="text-pink-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    Download here →
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/20 text-sm font-bold text-pink-400">
                    2
                  </div>
                  <span className="font-medium">Install MonaCoder extension</span>
                </div>
                <p className="mt-2 pl-11 text-sm text-white/60">
                  Search "MonaCoder" in VS Code extensions and click Install.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/20 text-sm font-bold text-pink-400">
                    3
                  </div>
                  <span className="font-medium">Set provider routing</span>
                </div>
                <p className="mt-2 pl-11 text-sm text-white/60">
                  Open Settings (Cmd+,) → Search "MonaCoder" → choose provider for each role and test connection.
                </p>
              </div>

              <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-sm font-bold">
                    ✓
                  </div>
                  <span className="font-medium">Start creating!</span>
                </div>
                <p className="mt-2 pl-11 text-sm text-white/75">
                  Open the MonaCoder panel and describe what you want to build. Have fun! 🎉
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 text-lg font-semibold transition hover:opacity-90">
                <Sparkles className="mr-2 h-5 w-5" />
                Install MonaCoder
              </button>
              <p className="mt-4 text-sm text-white/50">
                Free forever • No credit card needed • Works on Mac, Windows, Linux
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Questions?</h2>
          </div>

          <div className="mx-auto mt-8 max-w-2xl space-y-3">
            {[
              {
                q: "Do I need to know how to code?",
                a: "Nope! That's the whole point. Just describe what you want in plain English, and the AI writes the code for you.",
              },
              {
                q: "Is it really free?",
                a: "MonaCoder itself is free. Local Ollama mode is free; optional CLI bridges follow your external CLI/account setup.",
              },
              {
                q: "What can I build with this?",
                a: "Websites, apps, automations, games — almost anything! Start with something simple like a to-do list or contact form.",
              },
              {
                q: "What if the AI writes bad code?",
                a: "You always preview changes before applying. Don't like something? Just ask it to try again or make specific changes.",
              },
              {
                q: "Is my code private?",
                a: "By default, local mode keeps execution on your machine via Ollama. If you enable external CLI bridges, follow your team's policy for those routes.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border border-white/10 bg-white/5">
                <summary className="cursor-pointer px-5 py-4 font-medium">{q}</summary>
                <div className="px-5 pb-4 text-sm text-white/65">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 text-center">
          <div className="flex items-center justify-center gap-2 text-white/50">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">Made with vibes by MonaCoder</span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/40">
            <a href="/?dev" className="hover:text-white">For developers</a>
            <span>•</span>
            <a href="/" className="hover:text-white">Technical docs</a>
            <span>•</span>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
