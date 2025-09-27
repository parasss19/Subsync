import { Download, Settings2, CheckCircle2, LayoutGrid, Play } from "lucide-react";
import Chrome from '../assets/chrome.svg';

export default function HowToUse() {
  const useFlow = [
    { icon: Settings2, 
      title: "Setup your reminders", 
      desc: "Go to Settings, add your email and reminder days to get notifications before subscription renewals." 
    },
    { 
      icon: Download, 
      title: "Add subscriptions manually", 
      desc: "Go to Add page to add subscriptions manually or using the Smart Capture AI button." 
    },
    { icon: CheckCircle2, 
      title: "Add using AI", 
      desc: "Use the Smart Capture AI button to quickly capture subscription details automatically.", 
      tip: "You need to add your Gemini API key to enable AI capture." 
    },
    { 
      icon: LayoutGrid, title: "Import and Export Data", 
      desc: "Backup or transfer with JSON. Simple portability for peace of mind." 
    },
  ];

  const tutorials = [
    {
      title: "Setup & add settings",
      desc: "Learn how to install the Chrome extension, configure settings, and save changes for easy subscription management.",
      videoUrl: "https://res.cloudinary.com/dxxeks4o5/video/upload/q_auto,f_auto/setup_u4gdmi.mp4",
      posterUrl: "https://res.cloudinary.com/dxxeks4o5/video/upload/so_3,q_auto,f_auto,w_800/setup_u4gdmi.jpg",
      category: "Getting Started"
    },
    {
      title: "Add subscriptions manually",
      desc: "Quickly add subscriptions by entering details manually. You can edit, pause, resume and delete it. Perfect for full control over your data.",
      videoUrl: "https://res.cloudinary.com/dxxeks4o5/video/upload/q_auto,f_auto/addSub_pd032o.mp4",
      posterUrl: "https://res.cloudinary.com/dxxeks4o5/video/upload/so_3,q_auto,f_auto,w_800/addSub_pd032o.jpg",
      category: "Features"
    },
    {
      title: "Add using AI",
      desc: "Use Smart Capture AI to automatically detect and add subscriptions with minimal effort.",
      videoUrl: "https://res.cloudinary.com/dxxeks4o5/video/upload/q_auto,f_auto/aicapture_e6fdsq.mp4",
      posterUrl: "https://res.cloudinary.com/dxxeks4o5/video/upload/so_3,q_auto,f_auto,w_800/aicapture_e6fdsq.jpg",
      category: "AI Features"
    },
    {
      title: "Import and Export Data",
      desc: "Backup or transfer with JSON. Simple portability for peace of mind.",
      videoUrl: "https://res.cloudinary.com/dxxeks4o5/video/upload/q_auto,f_auto/import_export_gm5yhh.mp4",
      posterUrl: "https://res.cloudinary.com/dxxeks4o5/video/upload/so_3,q_auto,f_auto,w_800/import_export_gm5yhh.jpg",
      category: "Import-Export"
    },
  ];


  return (
    <section className="mx-auto my-20 max-w-6xl px-6">
      
      {/* How to use steps */}
      <div id="howToUse" className="mt-14 scroll-mt-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl">How to use</h2>
          <p className="mt-2 text-white/70">Follow these steps to get started with Subsync.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {useFlow.map((u, i) => {
            const Icon = u.icon;
            return (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white/90" />
                  </div>
                  <h4 className="font-[Geist] text-base font-semibold text-white">{u.title}</h4>
                </div>
                <p className="text-xs text-white/95">{u.desc}</p>
                {u.tip && <p className="mt-3 text-xs text-white/80">Tip: {u.tip}</p>}
                <div className="pointer-events-none absolute -inset-8 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-100" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>


      {/* Tutorials Section */}
      <div className="mt-32">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Play className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Video Tutorials</span>
          </div>
          <h2 className="font-[Geist] text-2xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent sm:text-4xl mb-4">  Master Subsync in Minutes  </h2>
        </div>
        
        {/* Tutorials */}
        <div className="space-y-12">
          {tutorials.map((video, i) => (
            <div key={i} className="group relative">
              <div className={`flex flex-col gap-8 lg:gap-16 lg:flex-row ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""} items-center`}>
                
                {/* Video Container */}
                <div className="w-full lg:w-3/5 relative">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] p-1 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    <video
                      src={video.videoUrl}
                      controls
                      preload="metadata"
                      poster={video.posterUrl}
                      className="relative w-full aspect-video rounded-[1.375rem] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black/30">
                        <span className="text-sm font-bold text-white">{i + 1}</span>
                      </div>
                      <div className="px-2.5 py-1 rounded-md border text-xs font-medium bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        {video.category}
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">{video.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-base">{video.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-white/10 backdrop-blur-sm">
            <div className="text-2xl font-bold text-white">Ready to get started?</div>
            <p className="text-white/60 max-w-md">Follow along with our tutorials and start managing your subscriptions like a pro.</p>
            <div>
              <button
                onClick={() => window.open("https://chrome.google.com/webstore/detail/your-extension-id", "_blank")}
                className="cursor-pointer bg-black/60 text-yellow-300 text-sm sm:text-lg px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md transition-transform duration-150 active:scale-95"
              >
                <span className='tracking-wider flex items-center font-medium justify-center gap-2'>
                  Add to <img src={Chrome} alt="chrome" className='w-5 h-5'/> it’s Free
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
