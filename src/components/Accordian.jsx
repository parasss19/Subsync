import { useState } from "react";

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    title: "What is SubSync?",
    content:
      "SubSync is a Chrome extension that uses AI to capture subscription details from billing pages and sends smart reminders so renewals never slip through.",
  },
  {
    title: "Is SubSync free to use?",
    content:
      "Yes! SubSync is free to install and use for managing subscriptions, tracking renewals, and receiving reminders.",
  },
  {
    title: "Does SubSync store my data in the cloud?",
    content:
      "No, Data stays on your device, not our servers. Your subscription data and settings are stored locally in your browser.",
  },
  {
    title: "Do I need an AI key to use it?",
    content:
      "No. AI capture is optional. If enabled, you can add an API key in Settings to improve automatic extraction on billing pages.",
  },
  {
    title: "Will I get renewal reminders?",
    content:
      "Yes. SubSync can notify before renewals (e.g., 7, 3, and 1 day prior). You can customize reminder days in Settings.",
  },
  {
    title: "Can I import or export my data?",
    content:
      "Absolutely. Export your subscriptions as JSON for backup, or re-import to restore or move between devices.",
  },
  {
    title: "How do I contact support?",
    content:
      "Reach out anytime at support@subsync.com",
  },
  {
    title: "How do I uninstall or delete my data?",
    content:
      "You can remove individual entries in the extension or clear everything by uninstalling SubSync or clearing the extension’s local data in your browser.",
  },
];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="relative z-10 mt-10 mb-5 max-w-6xl mx-auto w-full px-6 pb-6">
      <div className="flex flex-col md:flex-row md:gap-12">
        {/* Left side heading */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl text-white font_instrument tracking-wider text-center md:text-left">
            Frequently Asked Questions
          </h3>
          <p className="mt-2 text-gray-400 text-sm font_instrument tracking-wider text-center md:text-left">
            Everything you need to know about Instantly in one place.
          </p>
        </div>

        {/* Right side accordion */}
        <div className="md:w-2/3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 py-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="cursor-pointer w-full text-left text-white flex justify-between items-center"
              >
                <span className="font-medium">{faq.title}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-300">{faq.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordian;