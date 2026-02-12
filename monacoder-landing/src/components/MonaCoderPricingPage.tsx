import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Code2,
  Sparkles,
  Zap,
  Shield,
  Lock,
  Clock,
  Gift,
  Star,
  Heart,
  Rocket,
  Crown,
  Infinity,
  BadgeCheck,
  Users,
  Headphones,
  RefreshCw,
  Timer,
  CreditCard,
  ShieldCheck,
  Award,
  TrendingUp,
  ChevronDown,
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
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
          <Crown className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">MonaCoder Pro</div>
          <div className="text-xs text-white/55">Lifetime Deal</div>
        </div>
      </div>

      <button
        className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
        onClick={() => scrollToId("pricing")}
      >
        Get lifetime access
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const FeatureCheck = ({ text, pro = false }: { text: string; pro?: boolean }) => (
  <div className="flex items-start gap-3">
    <Check className={`mt-0.5 h-5 w-5 shrink-0 ${pro ? "text-amber-400" : "text-green-400"}`} />
    <span className="text-sm text-white/80">{text}</span>
  </div>
);

const CompareRow = ({
  feature,
  free,
  pro,
}: {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
}) => (
  <tr className="border-b border-white/10">
    <td className="py-4 text-sm">{feature}</td>
    <td className="py-4 text-center">
      {typeof free === "boolean" ? (
        free ? (
          <Check className="mx-auto h-5 w-5 text-green-400" />
        ) : (
          <X className="mx-auto h-5 w-5 text-white/20" />
        )
      ) : (
        <span className="text-sm text-white/60">{free}</span>
      )}
    </td>
    <td className="py-4 text-center">
      {typeof pro === "boolean" ? (
        pro ? (
          <Check className="mx-auto h-5 w-5 text-amber-400" />
        ) : (
          <X className="mx-auto h-5 w-5 text-white/20" />
        )
      ) : (
        <span className="text-sm font-medium text-amber-400">{pro}</span>
      )}
    </td>
  </tr>
);

const Testimonial = ({
  quote,
  author,
  role,
  avatar,
  highlight = false,
}: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  highlight?: boolean;
}) => (
  <div
    className={`rounded-3xl border p-6 backdrop-blur-xl ${
      highlight
        ? "border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/5"
        : "border-white/10 bg-white/5"
    }`}
  >
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="mt-4 text-sm italic text-white/75">"{quote}"</p>
    <div className="mt-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-sm font-bold text-black">
        {avatar}
      </div>
      <div>
        <div className="text-sm font-medium">{author}</div>
        <div className="text-xs text-white/50">{role}</div>
      </div>
    </div>
  </div>
);

const GuaranteeCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
      {icon}
    </div>
    <div>
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-white/65">{desc}</p>
    </div>
  </div>
);

export default function MonaCoderPricingPage() {
  const [showAllFeatures, setShowAllFeatures] = React.useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] text-white antialiased">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-600/20 via-orange-600/10 to-transparent blur-[100px]" />
      </div>

      <NavPill />

      <main className="relative mx-auto max-w-5xl px-5 pb-20 pt-10">
        {/* HERO */}
        <section className="text-center">
          {/* Urgency banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400"
          >
            <Timer className="h-4 w-4 animate-pulse" />
            <span>Limited time offer — Early bird pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
          >
            One payment.{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Lifetime access.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/65"
          >
            Get MonaCoder Pro forever with a single payment. No subscriptions, no recurring fees.
            Pay once, own it for life.
          </motion.p>

          {/* Value props */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Infinity className="h-4 w-4 text-amber-400" />
              <span>Lifetime updates</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Headphones className="h-4 w-4 text-amber-400" />
              <span>Priority support</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>30-day guarantee</span>
            </div>
          </motion.div>
        </section>

        {/* PRICING CARD */}
        <section id="pricing" className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-lg"
          >
            <div className="overflow-hidden rounded-[32px] border-2 border-amber-500/50 bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent p-1 shadow-[0_0_60px_-15px_rgba(251,191,36,0.3)]">
              <div className="rounded-[28px] bg-[#0a0a0a] p-8">
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-sm font-medium text-amber-400">
                    <Crown className="h-4 w-4" />
                    Lifetime Deal
                  </div>
                  <div className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">
                    Save 70%
                  </div>
                </div>

                {/* Price */}
                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg text-white/40 line-through">$1,299</span>
                    <span className="text-5xl font-bold">$399</span>
                    <span className="text-white/50">USD</span>
                  </div>
                  <div className="mt-2 text-sm text-white/60">
                    One-time payment • Lifetime access • All future updates
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 py-4 text-lg font-semibold text-black transition hover:opacity-90"
                  onClick={() => window.open("https://buy.stripe.com/xxx", "_blank")}
                >
                  <CreditCard className="h-5 w-5" />
                  Get MonaCoder Pro
                </button>

                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/50">
                  <div className="flex items-center gap-1">
                    <Lock className="h-3 w-3" />
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    30-day refund
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="text-sm font-medium text-amber-400">Everything included:</div>
                  <div className="mt-4 grid gap-3">
                    <FeatureCheck text="All 17 Quick Skills + future skills" pro />
                    <FeatureCheck text="Multi-model support (5 configurable slots)" pro />
                    <FeatureCheck text="Advanced security guards" pro />
                    <FeatureCheck text="AI code review & validation" pro />
                    <FeatureCheck text="Context-aware search engine" pro />
                    <FeatureCheck text="Priority email support" pro />
                    <FeatureCheck text="All future updates forever" pro />
                    <FeatureCheck text="Commercial license included" pro />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {["Stripe secure", "Instant access", "No subscription"].map((badge) => (
                <div
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Free vs Pro</h2>
            <p className="mt-2 text-white/60">See what you get with the lifetime deal</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-medium text-white/70">Free</th>
                    <th className="px-6 py-4 text-center">
                      <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-sm font-bold text-black">
                        Pro Lifetime
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="px-6">
                  <CompareRow feature="Quick Skills" free="5 basic" pro="All 17 + future" />
                  <CompareRow feature="Model slots" free="1" pro="5 configurable" />
                  <CompareRow feature="Security guards" free={true} pro={true} />
                  <CompareRow feature="AI code review" free="Basic" pro="Advanced + parallel" />
                  <CompareRow feature="Context search" free="Limited" pro="Full semantic search" />
                  <CompareRow feature="Auto-apply limits" free="2 files" pro="Unlimited" />
                  <CompareRow feature="Test integration" free={false} pro={true} />
                  <CompareRow feature="Priority support" free={false} pro={true} />
                  <CompareRow feature="Commercial license" free={false} pro={true} />
                  <CompareRow feature="Future updates" free="Major only" pro="All updates forever" />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="mt-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-amber-400">
              <Star className="h-5 w-5 fill-amber-400" />
              <Star className="h-5 w-5 fill-amber-400" />
              <Star className="h-5 w-5 fill-amber-400" />
              <Star className="h-5 w-5 fill-amber-400" />
              <Star className="h-5 w-5 fill-amber-400" />
            </div>
            <h2 className="mt-3 text-2xl font-bold">Loved by developers</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Testimonial
              quote="Best investment I've made this year. The lifetime deal paid for itself in the first week of productivity gains."
              author="David Park"
              role="Senior Developer"
              avatar="DP"
              highlight
            />
            <Testimonial
              quote="No more $20/month subscriptions. One payment and I'm set for life. The multi-model support alone is worth it."
              author="Emma Wilson"
              role="Tech Lead"
              avatar="EW"
            />
            <Testimonial
              quote="Priority support is incredible. Got a response within 2 hours and my issue was fixed the same day."
              author="James Liu"
              role="Startup Founder"
              avatar="JL"
            />
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <div className="text-3xl font-bold text-amber-400">2,500+</div>
              <div className="mt-1 text-sm text-white/60">Happy customers</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <div className="text-3xl font-bold text-amber-400">4.9/5</div>
              <div className="mt-1 text-sm text-white/60">Average rating</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <div className="text-3xl font-bold text-amber-400">98%</div>
              <div className="mt-1 text-sm text-white/60">Would recommend</div>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="mt-24">
          <div className="rounded-[32px] border border-green-500/20 bg-green-500/5 p-8 backdrop-blur-xl md:p-10">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                <ShieldCheck className="h-10 w-10 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">30-Day Money-Back Guarantee</h2>
                <p className="mt-3 text-white/65">
                  Try MonaCoder Pro risk-free for 30 days. If you're not completely satisfied,
                  just email us and we'll refund 100% of your purchase. No questions asked,
                  no hoops to jump through.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <GuaranteeCard
                    icon={<RefreshCw className="h-5 w-5" />}
                    title="Full refund"
                    desc="100% money back within 30 days"
                  />
                  <GuaranteeCard
                    icon={<Clock className="h-5 w-5" />}
                    title="Quick process"
                    desc="Refunds processed in 3-5 days"
                  />
                  <GuaranteeCard
                    icon={<Heart className="h-5 w-5" />}
                    title="No hard feelings"
                    desc="Keep using the free version"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE CALCULATION */}
        <section className="mt-24">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Do the math</h2>
              <p className="mt-2 text-white/60">See how much you save with lifetime</p>
            </div>

            <div className="mx-auto mt-8 max-w-2xl">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm text-white/50">Alternative: Monthly subscription</div>
                  <div className="mt-2 text-2xl font-bold">$29<span className="text-base text-white/50">/month</span></div>
                  <div className="mt-4 space-y-2 text-sm text-white/60">
                    <div className="flex justify-between">
                      <span>1 year</span>
                      <span>$348</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 years</span>
                      <span>$696</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3 years</span>
                      <span className="text-red-400">$1,044</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-6">
                  <div className="text-sm text-amber-400">MonaCoder Pro Lifetime</div>
                  <div className="mt-2 text-2xl font-bold">$399<span className="text-base text-white/50"> once</span></div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-white/60">
                      <span>1 year</span>
                      <span className="text-green-400">Save $0 (break even at 14 months)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 years</span>
                      <span className="text-green-400">Save $297</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>3 years</span>
                      <span className="text-green-400">Save $645</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-amber-500/10 p-4 text-center">
                <div className="text-sm text-amber-400">
                  <TrendingUp className="mr-1 inline h-4 w-4" />
                  Lifetime pays for itself in <strong>14 months</strong>. Everything after that is free.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Questions about the lifetime deal</h2>
          </div>

          <div className="mx-auto mt-8 max-w-2xl space-y-3">
            {[
              {
                q: "What does 'lifetime' mean exactly?",
                a: "Lifetime means as long as MonaCoder exists as a product. You get all updates, new features, and improvements forever with no additional payments.",
              },
              {
                q: "Is there a catch?",
                a: "No catch. We offer lifetime deals to fund early development and build a loyal customer base. Once we hit our funding goal, lifetime deals will no longer be available.",
              },
              {
                q: "Can I use it for commercial projects?",
                a: "Yes! The Pro license includes commercial use. Use it for client work, your startup, or any business project.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "You're covered by our 30-day money-back guarantee. Just email us within 30 days for a full refund, no questions asked.",
              },
              {
                q: "How many devices can I use it on?",
                a: "The license is per-user, not per-device. Use it on as many of your own computers as you want — desktop, laptop, whatever.",
              },
              {
                q: "Will the price go up?",
                a: "Yes. This is early bird pricing. Once we exit beta, the lifetime price will increase to $599, then eventually we'll move to subscription-only.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border border-white/10 bg-white/5">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-medium">
                  {q}
                  <ChevronDown className="h-5 w-5 text-white/40 transition group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-4 text-sm text-white/65">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-24">
          <div className="overflow-hidden rounded-[32px] border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-8 text-center backdrop-blur-xl md:p-12">
            <Crown className="mx-auto h-12 w-12 text-amber-400" />
            <h2 className="mt-4 text-3xl font-bold">Ready to upgrade?</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/65">
              Join 2,500+ developers who chose lifetime access. One payment, forever yours.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <button
                className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-lg font-semibold text-black transition hover:opacity-90"
                onClick={() => window.open("https://buy.stripe.com/xxx", "_blank")}
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Get MonaCoder Pro — $399
              </button>
              <div className="flex items-center gap-4 text-sm text-white/50">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" />
                  30-day guarantee
                </div>
                <div className="flex items-center gap-1">
                  <Infinity className="h-4 w-4" />
                  Lifetime updates
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-white/40">
              Prices in USD. VAT may apply based on your location.
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 text-center text-xs text-white/40">
          <div className="flex items-center justify-center gap-4">
            <a href="/" className="hover:text-white">Home</a>
            <span>•</span>
            <a href="/?dev" className="hover:text-white">For developers</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
          <div className="mt-4">© {new Date().getFullYear()} MonaCoder. All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}
