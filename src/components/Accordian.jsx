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
    title: "How does SubSync capture subscriptions?",
    content:
      "When capture is triggered, SubSync reads the current page to detect plan name, price, billing cycle, and renewal date, then saves it locally for tracking.",
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
    title: "Which sites does SubSync support?",
    content:
      "SubSync works across most billing and subscription pages. It can also use AI to interpret page content for new or unfamiliar layouts.",
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
    <div className="relative z-10 max-w-4xl mx-auto w-full px-6 pb-6">
      <h3 className="text-xl text-white font-semibold mb-4">FAQ's</h3>

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
  )
}

export default Accordian;