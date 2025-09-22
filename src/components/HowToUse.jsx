import { Download, BellRing, Brain, Settings2, CheckCircle2, LayoutGrid } from "lucide-react";


export default function HowToUse() {

  // const useFlow = [
  //   {
  //     icon: LayoutGrid,
  //     title: "Open the dashboard",
  //     desc: "Click the Subsync icon to view all subscriptions, totals, and upcoming renewals.",
  //   },
  //   {
  //     icon: Brain,
  //     title: "Capture from any billing page",
  //     desc: "On a billing/subscription page, click Capture. Subsync reads plan, price, cycle, and renewal date.",
  //     tip: "Enable AI for smarter, faster extraction on unfamiliar pages.",
  //   },
  //   {
  //     icon: BellRing,
  //     title: "Get smart reminders",
  //     desc: "Subsync sends Chrome notifications 7, 3, and 1 day before renewal, and on renewal day.",
  //     tip: "Customize reminder days in Settings.",
  //   },
  // ];

    const useFlow = [
    {
      icon: Settings2,
      title: "Setup your reminders",
      desc: "Go to Settings, add your email and reminder days to get notifications before subscription renewals.",
    },
    {
      icon: Download,
      title: "Add subscriptions",
      desc: "Go to Add page to add subscriptions manually or using the Smart Capture AI button.",
      tip: "You need to add your Gemini API key to enable AI capture.",
    },
    {
      icon: CheckCircle2,
      title: "Manage subscriptions",
      desc: "Check your subscriptions on the Subscriptions page where you can edit details, pause/resume reminders, or delete them.",
    },
    {
      icon: LayoutGrid,
      title: "View dashboard",
      desc: "See all your subscriptions in the Dashboard with totals, active, and upcoming subscriptions and other analytics",
    },
  ];

  return (
    <section className="mx-auto my-20 max-w-6xl px-6">
      {/* Header */}
      {/* <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl"> How to install  </h2>
      </div> */}

      {/* How to Install Steps */}
      {/* <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="font-[Geist] relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-white/90" />
                </div>
                <h3 className="font-[Geist] text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="text-sm text-white/95">{s.desc}</p>
              {s.note && <p className="mt-3 text-xs text-white/80">{s.note}</p>}
              <div
                className="pointer-events-none absolute -inset-8 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-100"
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div> */}

      {/* How to use steps */}
      <div id="howToUse" className="mt-14  scroll-mt-24">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl"> How to use  </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {useFlow.map((u, i) => {
            const Icon = u.icon;
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white/90" />
                  </div>
                  <h4 className="font-[Geist] text-base font-semibold text-white">{u.title}</h4>
                </div>
                <p className="text-sm text-white/95">{u.desc}</p>
                {u.tip && <p className="mt-3 text-xs text-white/80">Tip: {u.tip}</p>}
                <div
                  className="pointer-events-none absolute -inset-8 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
