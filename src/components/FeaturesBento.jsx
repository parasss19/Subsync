import { Brain, BellRing, ShieldCheck, ArrowDownUp, Mail, Edit3, Trash2 } from "lucide-react";


const features = [
  {
    title: "Flexible Subscription Management",
    desc: "Add subscriptions manually without an API key, or use your Google Gemini API key for smart auto-capture of details.",
    icon: Brain,
    accent: "from-cyan-500/20 to-blue-500/10",
    badge: "AI + Manual",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Email Integration",
    desc: "Connect your email for reminder delivery. Set custom reminder schedule with 1, 3, and 7 day options.",
    icon: Mail,
    accent: "from-rose-500/20 to-red-500/10",
    badge: "Email",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Pause, Resume & Edit",
    desc: "Full control over your subscriptions easily pause, resume, or update details anytime with just a click.",
    icon: Edit3,
    accent: "from-purple-500/20 to-pink-500/10",
    badge: "Control",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Privacy first",
    desc: "API key stored locally in the browser and never sent to external servers.",
    icon: ShieldCheck,
    accent: "from-emerald-500/20 to-teal-500/10",
    badge: "Local",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Export / Import",
    desc: "Backup or transfer with JSON , simple portability for peace of mind.",
    icon: ArrowDownUp,
    accent: "from-sky-500/20 to-indigo-500/10",
    badge: "Data",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Clear All Data",
    desc: "Wipe everything in one click, subscriptions, reminder schedules, and local storage data for a completely fresh start.",
    icon: Trash2,
    accent: "from-red-500/20 to-orange-500/10",
    badge: "Reset",
    span: "col-span-2 sm:col-span-2",
  },
];


export default function FeaturesBento() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl">
          Features
        </h2>
        <p className="font-[Geist] mt-2 text-white/60">
          Subsync Subscription Manager brings clarity to recurring costs with AI capture, reminders, and a clean, privacy first workflow.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 font-[Geist]">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <article
              key={i}
              className={`${f.span} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20`}
            >
              {/* Soft gradient accent */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.accent} opacity-70`}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-xs text-white/80">
                  <span className="inline-block size-1.5 rounded-full bg-white/40" />
                  {f.badge}
                </div>

                {/* Icon + Title */}
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white/90" />
                  </div>
                  <h3 className="font-[Geist] text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70">
                  {f.desc}
                </p>
              </div>

              {/* Glow on hover */}
              <div
                className="pointer-events-none absolute -inset-8 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
