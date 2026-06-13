import React from "react";
import { Link } from 'react-router';

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-medium">
            Legal
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before using
            FundStack. By accessing or using our platform, you agree to be bound
            by these terms.
          </p>

          <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
            Last Updated: June 2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 md:p-10 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              1. Acceptance of Terms
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              By creating an account or using FundStack, you acknowledge that
              you have read, understood, and agree to comply with these Terms &
              Conditions.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              2. User Accounts
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Users are responsible for maintaining the confidentiality of their
              account credentials and for all activities that occur under their
              account.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              3. Loan Management Services
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              FundStack provides tools for loan application, approval tracking,
              borrower management, and repayment monitoring. We do not guarantee
              loan approval or financial outcomes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              4. User Responsibilities
            </h2>

            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Provide accurate and complete information.</li>
              <li>Use the platform lawfully and ethically.</li>
              <li>Protect your account credentials.</li>
              <li>Avoid fraudulent or misleading activities.</li>
              <li>Comply with all applicable laws and regulations.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              5. Prohibited Activities
            </h2>

            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Attempting unauthorized access to the system.</li>
              <li>Uploading malicious software or harmful content.</li>
              <li>Impersonating another user or organization.</li>
              <li>Violating applicable laws or regulations.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              6. Intellectual Property
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              All content, branding, logos, software, and platform features are
              the intellectual property of FundStack and may not be copied,
              modified, or distributed without permission.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              7. Limitation of Liability
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              FundStack shall not be liable for any indirect, incidental,
              special, or consequential damages arising from the use of our
              services.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              8. Account Suspension & Termination
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate
              these Terms & Conditions or engage in harmful activities.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              9. Changes to Terms
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may revise these Terms & Conditions at any time. Continued use
              of the platform after changes are posted constitutes acceptance of
              the updated terms.
            </p>
          </section>

          {/* Contact Section */}
          <div className="bg-blue-50 dark:bg-slate-700 rounded-2xl p-6 border border-blue-100 dark:border-slate-600">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
              Need Help?
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              If you have any questions about these Terms & Conditions, please
              contact our support team for assistance.
            </p>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/privacy-policy"
            className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Privacy Policy
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

export default TermsCondition;
