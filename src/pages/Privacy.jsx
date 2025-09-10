import { CalendarSync } from 'lucide-react';
import logo from '../assets/logo.svg'

const Privacy = () => {
  return (
    <div className='mt-20 px-6 max-w-5xl mx-auto'>
      {/* Title */}
      <div className='text-center mb-10 font-[Geist]'>
        <h1 className='text-3xl sm:text-4xl font-bold text-white'>
          <span className='text-yellow-500 flex items-center justify-center gap-2'>
            {/* <CalendarSync/> Subsync */}
            <img src={logo} alt="logo image" className='w-10 h-10'/>
            Subsync
          </span>
          Privacy Policy
        </h1>
        <p className='mt-2 text-lg text-white/60'>How we handle your information.</p>
      </div>

      {/* Content */}
      <div className='space-y-6 mb-10 text-white leading-relaxed font-[]'>
        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>1. Introduction</h2>
          <p>
            This Privacy Policy describes how the "Subsync Subscription Manager"
            Chrome Extension collects, uses, and stores information. We are committed to protecting
            your privacy and ensuring transparency about our data practices.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>2. Data Controller</h2>
          <p>
            The Subsync Subscription Manager Chrome Extension is developed by Paras Mehta. For any
            privacy-related questions, you can contact us at{' '}
            <a href='mailto:parasss0708@gmail.com' className='text-gray-200 underline'>support@subsync.com</a>.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>3. What Information We Collect and Why</h2>
          <p>
            The Extension is designed with user privacy as a core principle. We do NOT collect, transmit, or store any
            of your personal data on our servers or any external services. All information processed and stored by the
            Extension remains exclusively on your local computer.
          </p>

          <p>The Extension collects and processes the following types of information locally on your device:</p>

          <h1 className='font-bold mt-3'>Subscription Details</h1>
          <ul className='list-disc ml-6 mt-2'>
            <li>
              <strong>What is collected:</strong> Service name (e.g., "Netflix," "Figma"), plan name (e.g., "Premium,"
              "Pro"), billing amount, currency, billing cycle (e.g., monthly, yearly), next renewal date, trial status
              and end date, subscription status (active, cancelling).
            </li>
            <li>
              <strong>How it&apos;s collected:</strong> This information is extracted directly from the web pages you visit
              (specifically billing, subscription, or membership pages) when you explicitly interact with the Extension
              (e.g., by clicking "Capture with AI").
            </li>
            <li>
              <strong>Purpose:</strong> To enable the core functionality of the Extension, which is to help you track and
              manage your subscriptions and provide timely renewal reminders. This data is essential for the Extension to
              function as intended.
            </li>
            <li>
              <strong>Legal Basis (GDPR):</strong> Performance of a contract (Terms of Service for the Extension) and/or
              legitimate interest (providing you with the requested functionality of subscription management).
            </li>
          </ul>

          <h1 className='font-bold mt-3'>Gemini API Key (if provided)</h1>
          <ul className='list-disc ml-6 mt-2'>
            <li>
              <strong>What is collected:</strong> An API key you may provide to enable the "Capture with AI" feature.
            </li>
            <li>
              <strong>How it&apos;s collected:</strong> You explicitly enter this key into the Extension&apos;s settings page.
            </li>
            <li>
              <strong>Purpose:</strong> To authenticate requests made directly from your browser to Google&apos;s Gemini API
              service, allowing the "Capture with AI" feature to function.
            </li>
          </ul>

          <h1 className='font-bold mt-3'>Page Content (for extraction)</h1>
          <ul className='list-disc ml-6 mt-2'>
            <li>
              <strong>What is collected:</strong> The text content and HTML structure of the active web page you are
              viewing.
            </li>
            <li>
              <strong>How it&apos;s collected:</strong> This data is temporarily accessed by the Extension&apos;s content scripts
              only when you explicitly click a "Capture" button. It is processed locally to identify and extract
              subscription details.
            </li>
            <li>
              <strong>Purpose:</strong> To perform the automated subscription detail extraction and categorization.
            </li>
            <li>
              <strong>Legal Basis (GDPR):</strong> Performance of a contract (providing you with the requested functionality
              of subscription detail extraction).
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>4. How Information is Stored (Local Storage Only)</h2>
          <ul className='list-disc ml-6 mt-2'>
            <li>
              <strong>Local storage:</strong> All the information listed above (Subscription Details, Gemini API Key, and
              any temporarily processed page content) is stored exclusively in your Chrome browser&apos;s local storage
              (chrome.storage.local) on your computer.
            </li>
            <li>
              <strong>No Cloud Storage:</strong> We do not have access to, nor do we store, any of this data on our
              servers or any third-party cloud services.
            </li>
            <li>
              <strong>No Transmission:</strong> Your data is never transmitted to us or any other external entity.
            </li>
            <li>
              <strong>Data Persistence:</strong> The data persists even if you close and reopen Chrome, but it will be
              deleted if you uninstall the Extension or explicitly clear your Chrome browsing data.
            </li>
            <li>
              <strong>Data Portability:</strong> You have the option to export your stored subscription data as a JSON
              file from the Extension's settings page.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>5. How Information is Used</h2>
          <ul className='list-disc ml-6 mt-2'>
            <li>To display your subscriptions within the Extension&apos;s popup.</li>
            <li>To calculate and display your total monthly spending.</li>
            <li>To categorize your subscriptions.</li>
            <li>To schedule and deliver renewal and trial reminder notifications.</li>
            <li>To make direct authenticated calls to Google&apos;s Gemini API (if you have provided an API key).</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>6. Sharing Your Information (No Sharing)</h2>
          <p>
            We do not share, sell, rent, or trade any of your information with third parties. As all data is stored
            locally on your device, there is no sharing of your data by us. If you choose to use the "Capture with AI"
            feature and provide a Gemini API Key, requests are made directly from your browser to Google&apos;s API,
            governed by Google&apos;s own terms of service and privacy policy. We are not involved in this data transfer.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>7. Data Retention</h2>
          <p>
            Your data is retained for as long as you keep the Extension installed on your Chrome browser and do not
            explicitly delete the data. We do not have access to your data, so we cannot delete it for you. You are in
            full control of your data retention.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>8. Your Rights (GDPR)</h2>
          <ul className='list-disc ml-6 mt-2'>
            <li>
              <strong>Right to Access:</strong> You can access all data stored by the Extension by opening the popup or by
              using the "Export Data" feature.
            </li>
            <li>
              <strong>Right to Rectification:</strong> Modify or update your subscription details directly within the
              Extension (re-capture overwrites). You can also edit exported JSON and re-import it.
            </li>
            <li>
              <strong>Right to Erasure:</strong> Delete individual subscriptions, delete all data by uninstalling the
              Extension, or clear the Extension’s local data in your browser.
            </li>
            <li>
              <strong>Right to Restriction of Processing:</strong> Disable features (like reminders) in settings; stop
              processing by uninstalling the Extension.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> Export your subscription data as JSON.
            </li>
            <li>
              <strong>Right to Object:</strong> Discontinue use of the Extension and uninstall it.
            </li>
          </ul>
          <p className='mt-2'>
            As we do not store or process your data on our servers, these rights are primarily exercised by you through
            your direct interaction with the Extension on your device.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>9. Children&apos;s Privacy</h2>
          <p>
            The Extension is not intended for use by children under the age of 16. We do not knowingly collect any
            information from children under 16.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page within the Chrome Web Store listing. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-white mb-2'>11. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:{' '}
            <a href='mailto:parasss0708@gmail.com' className='text-gray-200 underline'>contact@subsync.com</a>
          </p>
        </section>

        <p className='text-sm text-white mt-6'>Last updated: September 8, 2025</p>
      </div>
    </div>
  );
};

export default Privacy;
