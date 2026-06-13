import React from "react";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-medium">
            Legal
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how
            FundStack collects, uses, and protects your personal information.
          </p>

          <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
            Last Updated: June 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 md:p-10 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              1. Information We Collect
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may collect personal information including your name, email
              address, profile photo, account details, loan application data,
              and other information necessary to provide our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process loan applications and repayments.</li>
              <li>Improve platform performance and user experience.</li>
              <li>Provide customer support and notifications.</li>
              <li>Maintain platform security and prevent fraud.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              3. Data Security
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure, or
              misuse.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              4. Sharing Information
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We do not sell your personal information. Information may be
              shared only when required by law or with trusted service providers
              necessary for operating our platform.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              5. Cookies & Analytics
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may use cookies and analytics tools to enhance user experience,
              understand usage patterns, and improve platform functionality.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              6. User Rights
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              You have the right to access, update, or request deletion of your
              personal information, subject to applicable legal requirements.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              7. Policy Updates
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with the updated revision date.
            </p>
          </section>

          {/* Contact */}
          <div className="bg-blue-50 dark:bg-slate-700 rounded-2xl p-6 border border-blue-100 dark:border-slate-600">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
              Contact Us
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              If you have any questions regarding this Privacy Policy, please
              contact our support team.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/terms"
            className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Terms & Conditions
          </Link>

          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white text-center hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
