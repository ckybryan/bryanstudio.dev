import LegalPageLayout from '../components/petcrew/LegalPageLayout';
import { Accordion, AccordionItem } from '../components/petcrew/Accordion';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      icon="🔒"
      lastUpdated="Last Updated: November 11, 2025"
    >
      {/* TL;DR Summary */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-purple-900">TL;DR</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="mr-3 text-xl">✅</span>
            <span>Your pet care data stays on your device - we never see it</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">✅</span>
            <span>No account required means no personal data collection</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">✅</span>
            <span>iCloud sync is optional and fully encrypted</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">✅</span>
            <span>We don't sell, rent, or share your information</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">✅</span>
            <span>Basic analytics help us improve the app (you can opt out)</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <Accordion>
        <AccordionItem title="Introduction" defaultOpen>
          <div className="prose max-w-none">
            <p className="mb-4">
              Welcome to PetCrew! We're committed to protecting your privacy and being transparent
              about how we handle your data. This Privacy Policy explains our practices regarding
              data collection, use, and protection.
            </p>
            <p className="mb-4">
              PetCrew is designed with privacy at its core. Unlike many apps, we don't require an
              account, which means we don't collect or store personal information like your name,
              email, or phone number.
            </p>
            <p>
              By using PetCrew, you agree to the practices described in this Privacy Policy. If you
              have any questions, please contact us at{' '}
              <a href="mailto:bryanstudio.dev@gmail.com" className="text-purple-600 hover:text-purple-700">
                bryanstudio.dev@gmail.com
              </a>
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Information We Collect">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">Data You Create</h4>
            <p className="mb-4">
              All pet care information (feeding times, photos, notes, etc.) is stored locally on
              your device. This data never leaves your device unless you choose to enable iCloud
              sync.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Analytics Data</h4>
            <p className="mb-4">
              We collect minimal, anonymized usage data to help improve PetCrew:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>App version and device type (e.g., "iPhone 13, iOS 17.2")</li>
              <li>Feature usage patterns (e.g., "feeding log viewed")</li>
              <li>Crash reports and error logs</li>
              <li>General location (country/region only, no precise location)</li>
            </ul>
            <p className="mb-4">
              <strong>Important:</strong> This data is completely anonymous and cannot be linked to
              you or your pets.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">What We Don't Collect</h4>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Personal identification information (name, email, phone)</li>
              <li>Pet names or photos (unless you choose to sync via iCloud)</li>
              <li>Precise location data</li>
              <li>Contacts or other device data</li>
              <li>Payment information (if using free version)</li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="iCloud Sync">
          <div className="prose max-w-none">
            <p className="mb-4">
              PetCrew offers optional iCloud sync to backup your data and sync across your Apple
              devices. When enabled:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Your pet care data is encrypted and stored in your personal iCloud account</li>
              <li>We never have access to your iCloud data - it's controlled by Apple</li>
              <li>Data sync is governed by Apple's privacy policy and terms</li>
              <li>You can disable iCloud sync anytime in the app settings</li>
            </ul>
            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> iCloud sync is entirely optional. PetCrew works perfectly
                without it, storing all data locally on your device.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="How We Use Information">
          <div className="prose max-w-none">
            <p className="mb-4">The limited data we collect is used solely to:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>
                <strong>Improve app performance:</strong> Identify and fix bugs, crashes, and
                performance issues
              </li>
              <li>
                <strong>Enhance features:</strong> Understand which features are most valuable to
                prioritize development
              </li>
              <li>
                <strong>Ensure compatibility:</strong> Test new iOS versions and device models
              </li>
              <li>
                <strong>Provide support:</strong> Help troubleshoot issues when you contact us
              </li>
            </ul>
            <p className="font-semibold text-gray-900">
              We never use your data for advertising, marketing, or any purpose beyond improving
              PetCrew.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Data Sharing & Third Parties">
          <div className="prose max-w-none">
            <p className="mb-4">
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Service Providers</h4>
            <p className="mb-4">
              We use trusted third-party services to help operate PetCrew. These services may
              receive anonymized analytics data:
            </p>

            <div className="mb-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Purpose
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Data Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      Apple Analytics
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">App performance & crashes</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Device type, iOS version</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      iCloud
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Optional data sync & backup
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Encrypted pet care data
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="mb-3 font-semibold text-gray-900">Legal Requirements</h4>
            <p>
              We may disclose information if required by law, such as to comply with a subpoena or
              similar legal process, or to protect the rights, property, or safety of PetCrew, our
              users, or others.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Data Security">
          <div className="prose max-w-none">
            <p className="mb-4">
              We take data security seriously and implement industry-standard measures to protect
              your information:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>All data on your device is protected by iOS security features</li>
              <li>iCloud sync uses end-to-end encryption</li>
              <li>We use secure HTTPS connections for all network communications</li>
              <li>Regular security audits and updates</li>
            </ul>
            <div className="mt-4 rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> While we implement strong security measures, no method
                of transmission or storage is 100% secure. Please use device passcodes and enable
                biometric authentication for additional protection.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Your Rights & Choices">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">Data Control</h4>
            <p className="mb-4">You have complete control over your data:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>
                <strong>Access:</strong> All your data is accessible within the app at any time
              </li>
              <li>
                <strong>Edit:</strong> Modify or delete any pet care records directly in the app
              </li>
              <li>
                <strong>Export:</strong> Premium users can export all data as CSV or PDF
              </li>
              <li>
                <strong>Delete:</strong> Uninstalling the app removes all local data immediately
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">Analytics Opt-Out</h4>
            <p className="mb-4">
              To disable analytics collection, go to Settings → Privacy → Analytics and toggle off
              "Share Analytics Data".
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">iCloud Sync</h4>
            <p>
              Disable iCloud sync anytime in Settings → iCloud Sync. Note that disabling sync will
              stop syncing new data but won't delete existing iCloud data. To delete iCloud data,
              use Settings → Manage Storage → Delete iCloud Data.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Children's Privacy">
          <div className="prose max-w-none">
            <p className="mb-4">
              PetCrew is designed for pet owners of all ages. We do not knowingly collect personal
              information from children under 13.
            </p>
            <p className="mb-4">
              Since PetCrew doesn't require account creation and stores data locally on-device,
              there's no risk of inadvertently collecting children's personal information. Parents
              and guardians maintain full control over the device and app data.
            </p>
            <p>
              If you believe we have inadvertently collected information from a child under 13,
              please contact us immediately at{' '}
              <a href="mailto:bryanstudio.dev@gmail.com" className="text-purple-600 hover:text-purple-700">
                bryanstudio.dev@gmail.com
              </a>
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="International Users">
          <div className="prose max-w-none">
            <p className="mb-4">
              PetCrew is available worldwide. If you use PetCrew outside the United States, your
              data remains on your device unless you enable iCloud sync.
            </p>
            <p className="mb-4">
              For iCloud users, data storage location is determined by your Apple ID country
              settings and Apple's data policies.
            </p>
            <p>
              We comply with applicable data protection laws, including GDPR for European users and
              CCPA for California residents.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Changes to This Policy">
          <div className="prose max-w-none">
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or for legal, operational, or regulatory reasons.
            </p>
            <p className="mb-4">When we make changes:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>We'll update the "Last Updated" date at the top</li>
              <li>Significant changes will be announced in the app</li>
              <li>You'll be asked to review and accept major policy changes</li>
            </ul>
            <p>
              Continued use of PetCrew after policy updates constitutes acceptance of the revised
              terms.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Contact Us">
          <div className="prose max-w-none">
            <p className="mb-4">
              We value your privacy and welcome any questions or concerns. Please reach out:
            </p>
            <div className="rounded-lg bg-purple-50 p-6">
              <p className="mb-2 font-semibold text-purple-900">Email</p>
              <p className="mb-4">
                <a
                  href="mailto:bryanstudio.dev@gmail.com"
                  className="text-purple-600 hover:text-purple-700"
                >
                  bryanstudio.dev@gmail.com
                </a>
              </p>

              <p className="text-sm text-gray-600">
                We typically respond to privacy inquiries within 48 hours.
              </p>
            </div>
          </div>
        </AccordionItem>
      </Accordion>

      {/* Bottom Notice */}
      <div className="mt-12 rounded-2xl border-2 border-purple-200 bg-purple-50 p-8 text-center">
        <h3 className="mb-4 text-xl font-bold text-purple-900">Privacy First, Always</h3>
        <p className="text-gray-700">
          PetCrew was built on the principle that your pet care data belongs to you and only you.
          We're committed to maintaining the highest privacy standards and being transparent about
          our practices.
        </p>
      </div>
    </LegalPageLayout>
  );
}
