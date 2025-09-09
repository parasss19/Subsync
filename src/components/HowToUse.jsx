// HowToUse.jsx
import Chrome from '../assets/chrome.svg';
import { Download, BellRing, Brain, Settings2, CheckCircle2, LayoutGrid } from "lucide-react";
import { FaChrome } from "react-icons/fa";


export default function HowToUse() {

  const steps = [
    {
      icon: FaChrome,
      title: "Open the Chrome Web Store",
      desc: "Go to the Subsync Subscription Manager page and click Add to Chrome.",
      note: "You may need to sign in to your Google account.",
    },
    {
      icon: Download,
      title: "Install the extension",
      desc: "Confirm permissions and pin Subsync to your toolbar for quick access.",
      note: "Click the puzzle icon and pin Subsync.",
    },
    {
      icon: Settings2,
      title: "Set up preferences",
      desc: "Open Subsync → Settings to pick reminder days and optionally add your AI key.",
      note: "AI capture is optional and can be disabled anytime.",
    },
  ];

  const useFlow = [
    {
      icon: LayoutGrid,
      title: "Open the dashboard",
      desc: "Click the SubList icon to view all subscriptions, totals, and upcoming renewals.",
    },
    {
      icon: Brain,
      title: "Capture from any billing page",
      desc: "On a billing/subscription page, click Capture. SubList reads plan, price, cycle, and renewal date.",
      tip: "Enable AI for smarter, faster extraction on unfamiliar pages.",
    },
    {
      icon: BellRing,
      title: "Get smart reminders",
      desc: "SubList sends Chrome notifications 7, 3, and 1 day before renewal, and on renewal day.",
      tip: "Customize reminder days in Settings.",
    },
  ];

  return (
    <section className="mx-auto my-20 max-w-6xl px-6">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl"> How to install  </h2>
      </div>

      {/* How to Install Steps */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
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
      </div>

      {/* How to use steps */}
      <div id="howToUse" className="mt-14  scroll-mt-24">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl"> How to use  </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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

      {/* CTA btn*/}
      <div className="mt-8  text-center">
        <button
          onClick={() => navigate("#")}
          className="cursor-pointer bg-black/60 text-yellow-300 text-sm sm:text-lg px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md transition-transform duration-150 active:scale-95"
        >
          <span className='tracking-wider flex items-center font-[Geist] text-xl font-medium justify-center gap-2'>
            Add to <img src={Chrome} alt="chrome" className='w-5 h-5'/> its's Free
          </span>
        </button>
      </div>
    </section>
  );
}
