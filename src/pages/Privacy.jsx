import logo from "../assets/logo.svg";

const Privacy = () => {
  return (
    <div className="mt-20 px-6 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10 font-[Geist]">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          <span className="text-yellow-500 flex items-center justify-center gap-2">
            <img src={logo} alt="logo image" className="w-10 h-10" /> Subsync
          </span>
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg text-white/60">
          How we handle your information with privacy-first principles.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6 mb-10 text-white leading-relaxed font-[Geist]">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            This Privacy Policy explains how the Subsync Chrome Extension collects, uses, and stores information.
            Subsync is built with a privacy-first approach we do not collect or store your personal data on
            external servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Data Controller</h2>
          <p>
            Subsync is developed by Paras Mehta. For any privacy-related
            questions, you can contact us at{" "}
            <a
              href="mailto:parasss0708@gmail.com"
              className="text-gray-200 underline"
            >
              support@subsync.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. What Information We Collect and Why
          </h2>
          <p>
            Subsync only collects the minimum information needed to help you manage
            subscriptions and receive accurate renewal reminders. We do not collect
            sensitive personal data and we never store your API keys.
          </p>

          <h3 className="font-bold mt-3">Subscription Details</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>What:</strong> Service name, plan, billing amount, currency,
              cycle (monthly/yearly), next renewal date, and trial/active status.
            </li>
            <li>
              <strong>How:</strong> Added manually by you or captured from billing
              pages when you use “Capture with AI”.
            </li>
            <li>
              <strong>Why:</strong> To display your subscriptions and send you timely
              renewal reminders.
            </li>
          </ul>

          <h3 className="font-bold mt-3">Reminder Settings</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>What:</strong> Your selected reminder days (e.g., 3 days before
              renewal).
            </li>
            <li>
              <strong>Why:</strong> Used to trigger email notifications so you don’t
              miss renewals.
            </li>
          </ul>

          <h3 className="font-bold mt-3">User Email</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>What:</strong> The email address you provide when setting up
              reminders.
            </li>
            <li>
              <strong>Why:</strong> Required to send you subscription renewal
              notifications only. We do not use your email for marketing or share it
              with third parties.
            </li>
          </ul>

          <h3 className="font-bold mt-3">Gemini API Key (Optional)</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>What:</strong> If you enable “Capture with AI”, you may provide
              your own Google Gemini API key.
            </li>
            <li>
              <strong>How:</strong> Entered directly in Subsync settings and stored
              only in your browser.
            </li>
            <li>
              <strong>Why:</strong> Used locally in your browser to authenticate
              requests to Google’s API. We never see, transmit, or store your key.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Storage
          </h2>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>Database:</strong> We store only the data required to send
              accurate reminders like subscription name, price, renewal date, your email, and reminder
              days. No sensitive personal data or API keys are stored in our database.
            </li>
            <li>
              <strong>Local Storage:</strong> Your settings, Gemini API key (if
              provided), and extension preferences remain only in your Chrome local
              storage.
            </li>
            <li>
              <strong>No Cloud Backups:</strong> Apart from the reminder-related
              information above, we do not back up or host your data externally.
            </li>
            <li>
              <strong>No Transmission:</strong> Subscription and settings data remain
              private. The only transmissions are emails sent directly to you for
              reminders.
            </li>
            <li>
              <strong>Portability:</strong> You can export/import your subscription
              list in JSON format at any time.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. How Information is Used</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Show your subscriptions in the extension.</li>
            <li>Calculate total monthly/yearly spending.</li>
            <li>Send renewal/trial reminders you set.</li>
            <li>Enable AI-powered capture if Gemini API is provided.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Sharing Your Information
          </h2>
          <p>
            We do not share, sell, or trade your information. If you enable
            Gemini AI, requests are made directly from your browser to Google
            and are subject to Google’s privacy policy. Subsync never
            intermediates or stores these requests.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. No Analytics / Tracking</h2>
          <p>
            Subsync does not use any third-party analytics, trackers, or ads. We
            do not monitor your browsing activity or usage behavior.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Your Rights (GDPR)</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Access your data in the extension or export as JSON.</li>
            <li>Edit or overwrite subscriptions anytime.</li>
            <li>Delete all data by clearing storage or uninstalling.</li>
            <li>Restrict processing by disabling reminders or uninstalling.</li>
            <li>Port your data via Export/Import.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this policy from time to time. Updates will be posted
            here and in the Chrome Web Store listing. Please review
            periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            For questions or concerns, contact us at{" "}
            <a
              href="mailto:parasss0708@gmail.com"
              className="text-gray-200 underline"
            >
              support@subsync.com
            </a>
          </p>
        </section>

        <p className="text-sm text-white mt-6"> Last updated: September 23, 2025</p>
      </div>
    </div>
  );
};

export default Privacy;
