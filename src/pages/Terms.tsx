import LegalPageLayout from '../components/petcrew/LegalPageLayout';
import { Accordion, AccordionItem } from '../components/petcrew/Accordion';

export default function Terms() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      icon="📜"
      lastUpdated="Last Updated: November 11, 2025"
    >
      {/* TL;DR Summary */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-purple-900">TL;DR</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="mr-3 text-xl">📱</span>
            <span>PetCrew is free to use with optional premium features</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">✅</span>
            <span>Use the app responsibly and don't abuse our services</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">🔒</span>
            <span>Your data stays private - we don't share or sell it</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">⚖️</span>
            <span>The app is provided "as is" - we're not liable for issues</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">💬</span>
            <span>Questions? Contact us at bryanstudio.dev@gmail.com</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <Accordion>
        <AccordionItem title="Acceptance of Terms" defaultOpen>
          <div className="prose max-w-none">
            <p className="mb-4">
              Welcome to PetCrew! These Terms of Service ("Terms") govern your access to and use of
              the PetCrew mobile application ("App"), website, and related services (collectively,
              "Services").
            </p>
            <p className="mb-4">
              By downloading, installing, or using PetCrew, you agree to be bound by these Terms. If
              you don't agree with any part of these Terms, please don't use our Services.
            </p>
            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> These Terms include a binding arbitration clause and
                class action waiver that affect your rights. Please read carefully.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Eligibility">
          <div className="prose max-w-none">
            <p className="mb-4">
              PetCrew is available to users of all ages. However, if you are under 13 years old, you
              must have parental or guardian consent to use our Services.
            </p>
            <p className="mb-4">By using PetCrew, you represent and warrant that:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>You have the legal capacity to enter into these Terms</li>
              <li>If you're under 13, you have parental/guardian permission</li>
              <li>All information you provide is accurate and truthful</li>
              <li>You will comply with all applicable laws and regulations</li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="License & App Use">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">License Grant</h4>
            <p className="mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
              revocable license to download and use PetCrew for personal, non-commercial purposes.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Permitted Uses</h4>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Track feeding schedules for your pets</li>
              <li>Log pet care activities and health information</li>
              <li>Set reminders and notifications</li>
              <li>Share pet care data with family members via household sharing</li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">Prohibited Uses</h4>
            <p className="mb-4">You agree NOT to:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Modify, adapt, or create derivative works</li>
              <li>Use the App for commercial purposes without authorization</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated tools (bots, scrapers) to access the Services</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit malicious code or harmful content</li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Premium Subscription">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">Subscription Details</h4>
            <p className="mb-4">
              PetCrew offers an optional Premium subscription for $1.99/month with enhanced features:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Unlimited pets (free version limited to 3)</li>
              <li>Advanced analytics and insights</li>
              <li>Family sharing for collaborative pet care</li>
              <li>Custom feeding schedules</li>
              <li>Priority support</li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">Billing</h4>
            <p className="mb-4">
              Subscriptions are billed monthly through Apple's App Store. Payment will be charged to
              your Apple ID at confirmation of purchase.
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>
                <strong>Auto-Renewal:</strong> Subscriptions automatically renew unless canceled at
                least 24 hours before the current period ends
              </li>
              <li>
                <strong>Renewal Charge:</strong> Your account will be charged within 24 hours prior
                to the end of the current period
              </li>
              <li>
                <strong>Managing Subscription:</strong> Cancel or manage your subscription in App
                Store Settings
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">Cancellation & Refunds</h4>
            <p className="mb-4">
              You can cancel your subscription at any time through your App Store settings.
              Cancellation takes effect at the end of the current billing period.
            </p>
            <p>
              <strong>Refund Policy:</strong> All purchases are subject to Apple's refund policy.
              Contact Apple Support for refund requests. We do not process refunds directly.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Intellectual Property">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">Our Content</h4>
            <p className="mb-4">
              All content, features, and functionality of PetCrew (including but not limited to
              text, graphics, logos, icons, images, software, and designs) are owned by PetCrew or
              our licensors and are protected by copyright, trademark, and other intellectual
              property laws.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Your Content</h4>
            <p className="mb-4">
              You retain all rights to the content you create in PetCrew (pet names, photos, notes,
              etc.). We don't claim ownership of your data.
            </p>
            <p className="mb-4">
              Since all data is stored locally on your device (or your personal iCloud), we never
              access, view, or use your content for any purpose.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Privacy & Data">
          <div className="prose max-w-none">
            <p className="mb-4">
              Your privacy is extremely important to us. Please review our{' '}
              <a href="/petcrew/privacy" className="text-purple-600 hover:text-purple-700">
                Privacy Policy
              </a>{' '}
              to understand how we collect, use, and protect your information.
            </p>
            <p className="mb-4">Key privacy highlights:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>No account required - no personal data collection</li>
              <li>All pet care data stored locally on your device</li>
              <li>Optional household sharing syncs data across family devices</li>
              <li>We never sell, rent, or share your information</li>
              <li>No analytics, no tracking - completely private</li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Disclaimers & Warranties">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">"As Is" Service</h4>
            <p className="mb-4">
              PetCrew is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either
              express or implied, including but not limited to:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Merchantability or fitness for a particular purpose</li>
              <li>Accuracy, reliability, or completeness of content</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Security or freedom from viruses/harmful components</li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">Not Medical Advice</h4>
            <div className="rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> PetCrew is a tracking tool, not a substitute for
                professional veterinary advice. Always consult a licensed veterinarian for medical
                decisions about your pet's health.
              </p>
            </div>

            <h4 className="mt-4 mb-3 font-semibold text-gray-900">No Guarantee</h4>
            <p>
              We make no warranties that PetCrew will meet your requirements or that it will be
              suitable for your specific needs. Use of the App is at your own risk.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Limitation of Liability">
          <div className="prose max-w-none">
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PETCREW AND ITS AFFILIATES, OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, use, or goodwill</li>
              <li>Service interruption or system failures</li>
              <li>Any damages arising from your use or inability to use the Services</li>
              <li>Unauthorized access to your data or transmissions</li>
              <li>
                Errors, mistakes, or inaccuracies in content or functionality
              </li>
            </ul>
            <p className="mb-4">
              Our total liability to you for all claims arising from your use of PetCrew shall not
              exceed the amount you paid us in the 12 months preceding the claim (or $50 if you
              haven't paid us anything).
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-700">
                Some jurisdictions don't allow certain liability limitations, so some of the above
                may not apply to you.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Indemnification">
          <div className="prose max-w-none">
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless PetCrew and its affiliates from any
              claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Your use or misuse of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of applicable laws or regulations</li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Changes to Services">
          <div className="prose max-w-none">
            <p className="mb-4">We reserve the right to:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Modify, suspend, or discontinue any part of the Services</li>
              <li>Change features, functionality, or pricing</li>
              <li>Impose usage limits or restrictions</li>
              <li>Update these Terms at any time</li>
            </ul>
            <p className="mb-4">
              We'll notify you of significant changes through the App or via email (if provided).
              Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Termination">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">Your Right to Terminate</h4>
            <p className="mb-4">
              You may stop using PetCrew at any time by uninstalling the App. To delete your data,
              uninstall the App and delete iCloud backup if enabled.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Our Right to Terminate</h4>
            <p className="mb-4">
              We may suspend or terminate your access to PetCrew at any time, with or without cause
              or notice, if we believe you've violated these Terms or for any other reason.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Effect of Termination</h4>
            <p>
              Upon termination, your license to use PetCrew ends immediately. Provisions that should
              survive termination (warranties, indemnification, limitation of liability) will remain
              in effect.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Dispute Resolution">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">Informal Resolution</h4>
            <p className="mb-4">
              If you have a dispute with PetCrew, please contact us first at{' '}
              <a href="mailto:bryanstudio.dev@gmail.com" className="text-purple-600 hover:text-purple-700">
                bryanstudio.dev@gmail.com
              </a>{' '}
              to attempt an informal resolution.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Binding Arbitration</h4>
            <p className="mb-4">
              If we can't resolve a dispute informally, you agree that any dispute will be resolved
              through binding arbitration rather than in court, except for small claims court
              matters.
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
              <li>Arbitration is administered by the American Arbitration Association (AAA)</li>
              <li>Federal Arbitration Act governs these Terms</li>
              <li>No class actions or consolidated proceedings</li>
              <li>Arbitrator's decision is final and binding</li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">Class Action Waiver</h4>
            <div className="mt-4 rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> You waive your right to participate in class actions,
                class arbitrations, or representative proceedings. Disputes must be brought
                individually.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="General Provisions">
          <div className="prose max-w-none">
            <h4 className="mb-3 font-semibold text-gray-900">Governing Law</h4>
            <p className="mb-4">
              These Terms are governed by the laws of the State of California, without regard to
              conflict of law principles.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Entire Agreement</h4>
            <p className="mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between
              you and PetCrew.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">Severability</h4>
            <p className="mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining
              provisions will remain in full force and effect.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">No Waiver</h4>
            <p>
              Our failure to enforce any right or provision doesn't constitute a waiver of that right
              or provision.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="Contact Information">
          <div className="prose max-w-none">
            <p className="mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="rounded-lg bg-purple-50 p-6">
              <p className="mb-2 font-semibold text-purple-900">Contact Email</p>
              <p className="mb-4">
                <a
                  href="mailto:bryanstudio.dev@gmail.com"
                  className="text-purple-600 hover:text-purple-700"
                >
                  bryanstudio.dev@gmail.com
                </a>
              </p>

              <p className="text-sm text-gray-600">
                We typically respond to inquiries within 48 hours during business days.
              </p>
            </div>
          </div>
        </AccordionItem>
      </Accordion>

      {/* Bottom Notice */}
      <div className="mt-12 rounded-2xl border-2 border-purple-200 bg-purple-50 p-8 text-center">
        <h3 className="mb-4 text-xl font-bold text-purple-900">Thank You for Using PetCrew</h3>
        <p className="text-gray-700">
          We're committed to providing a safe, reliable, and user-friendly experience for all pet
          parents. These Terms help protect both you and us while ensuring PetCrew remains a trusted
          tool for pet care.
        </p>
      </div>
    </LegalPageLayout>
  );
}
