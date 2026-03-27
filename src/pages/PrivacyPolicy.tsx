import LegalPageLayout from '../components/petcrew/LegalPageLayout';
import { Accordion, AccordionItem } from '../components/petcrew/Accordion';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      icon="🔒"
      lastUpdated={`Last Updated: March ${new Date().getFullYear()}`}
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
            <span>All data stored locally on your device — no cloud, no servers</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">✅</span>
            <span>We don't sell, rent, or share your information</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">✅</span>
            <span>No analytics, no tracking - completely private</span>
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

        <AccordionItem title="Information We Collect" defaultOpen>
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">Data You Create</h4>
            <p className="mb-4">
              All pet care information (feeding times, photos, notes, etc.) is stored locally on
              your device. This data never leaves your device.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Device Permissions</h4>
            <p className="mb-4">
              PetCrew may request the following device permissions, all of which are optional:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li><strong>Camera & Photo Library:</strong> Only used if you choose to add photos to pet profiles. Photos are stored locally on your device.</li>
              <li><strong>Notifications:</strong> Used for feeding reminders. A device token is sent to Apple Push Notification Service (APNS) — no personal data is included.</li>
            </ul>

            <h4 className="mt-6 mb-3 font-semibold text-gray-900">What We Don't Collect</h4>
            <p className="mb-4">
              <strong>PetCrew does not collect analytics, usage data, or telemetry.</strong>
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>No personal identification information (name, email, phone)</li>
              <li>No location data</li>
              <li>No contacts or other device data</li>
              <li>No advertising identifiers or tracking cookies</li>
            </ul>
            <div className="mt-4 rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Apple may collect anonymous crash reports if you have opted into sharing analytics in your iOS Settings. This is managed by Apple, not by PetCrew.
              </p>
            </div>
            <div className="mt-4 rounded-lg bg-green-50 p-4">
              <p className="text-sm text-green-800">
                <strong>Privacy First:</strong> Your pet care data stays on your device. We never see it, track it, or analyze it.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Local Storage Only" defaultOpen>
          <div className="prose max-w-none">
            <p className="mb-4">
              All PetCrew data is stored exclusively on your device. We do not operate any servers
              or cloud infrastructure for storing user data.
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Pet profiles, feeding logs, and settings are stored on-device</li>
              <li>Local member names are stored on-device</li>
              <li>No data is transmitted to external servers</li>
              <li>Uninstalling the app permanently removes all data</li>
            </ul>
            <div className="mt-4 rounded-lg bg-green-50 p-4">
              <p className="text-sm text-green-800">
                <strong>100% Local:</strong> PetCrew has no servers, no cloud sync, and no way to
                access your data. Your information never leaves your phone.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="How We Use Information" defaultOpen>
          <div className="prose max-w-none">
            <p className="mb-4">
              <strong>We don't collect any personal data or analytics.</strong> Your information is only used as follows:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>
                <strong>Pet care data:</strong> Stored locally on your device and never transmitted anywhere
              </li>
              <li>
                <strong>Support requests:</strong> Information you provide when contacting us via email is used only to help resolve your issue
              </li>
            </ul>
            <p className="font-semibold text-gray-900">
              We never use your data for advertising, marketing, analytics, or tracking.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Data Sharing & Third Parties" defaultOpen>
          <div className="prose max-w-none">
            <p className="mb-4">
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Service Providers</h4>
            <p className="mb-4">
              PetCrew does not use any servers or cloud services for storing user data. The only
              third-party services involved are:
            </p>

            <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
              <li>
                <strong>App Store (Apple):</strong> For app distribution
              </li>
              <li>
                <strong>Apple Push Notification Service (APNS):</strong> For feeding reminders — only a device token is sent, no personal data
              </li>
              <li>
                <strong>Apple Crash Reporting:</strong> If you have opted into sharing analytics in iOS Settings, Apple may collect anonymous crash data. This is managed by Apple, not by PetCrew.
              </li>
            </ul>

            <div className="mt-4 rounded-lg bg-purple-50 p-4">
              <p className="text-sm text-purple-800">
                <strong>Important:</strong> We do not use any analytics services, tracking tools, or advertising platforms.
                Your data is never shared with data brokers or third-party analytics companies.
              </p>
            </div>

            <h4 className="mt-6 mb-3 font-semibold text-gray-900">Legal Requirements</h4>
            <p>
              We may disclose information if required by law, such as to comply with a subpoena or
              similar legal process, or to protect the rights, property, or safety of PetCrew, our
              users, or others.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Data Security" defaultOpen>
          <div className="prose max-w-none">
            <p className="mb-4">
              We take data security seriously and implement industry-standard measures to protect
              your information:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>All data on your device is protected by iOS security features</li>
              <li>No data is transmitted over the network — everything stays on-device</li>
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

        <AccordionItem title="Your Rights & Choices" defaultOpen>
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
                <strong>Delete:</strong> Uninstalling the app removes all local data immediately
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">Complete Data Removal</h4>
            <p>
              Uninstalling PetCrew permanently removes all data from your device. Since we have no
              servers or cloud storage, there is no residual data to delete elsewhere.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Children's Privacy" defaultOpen>
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

        <AccordionItem title="International Users" defaultOpen>
          <div className="prose max-w-none">
            <p className="mb-4">
              PetCrew is available worldwide. All data remains on your device regardless of your
              location.
            </p>
            <p>
              We comply with applicable data protection laws, including GDPR for European users and
              CCPA for California residents.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Changes to This Policy" defaultOpen>
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

        <AccordionItem title="Contact Us" defaultOpen>
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
