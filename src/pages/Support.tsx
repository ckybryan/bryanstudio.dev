import LegalPageLayout from '../components/petcrew/LegalPageLayout';
import { Accordion, AccordionItem } from '../components/petcrew/Accordion';

export default function Support() {
  return (
    <LegalPageLayout
      title="Support & Help"
      icon="💬"
      lastUpdated="Last Updated: November 11, 2025"
    >
      {/* Quick Links */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-purple-900">Quick Links</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="mailto:bryanstudio.dev@gmail.com"
            className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
          >
            <span className="text-3xl">📧</span>
            <div>
              <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                Email Support
              </p>
              <p className="text-sm text-gray-600">bryanstudio.dev@gmail.com</p>
            </div>
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
          >
            <span className="text-3xl">⭐</span>
            <div>
              <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                Rate Us on App Store
              </p>
              <p className="text-sm text-gray-600">Help us improve</p>
            </div>
          </a>
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem title="How do I add a new pet?" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">Adding a new pet to PetCrew is easy:</p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-600">
                <li>Open the PetCrew app</li>
                <li>Tap the "+" button in the top right corner</li>
                <li>Select "Add Pet"</li>
                <li>Enter your pet's name, type (dog, cat, etc.), and photo (optional)</li>
                <li>Set up feeding schedule and preferences</li>
                <li>Tap "Save" to create your pet profile</li>
              </ol>
              <div className="mt-4 rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Free users can add up to 2 pets. Upgrade to Premium for
                  unlimited pets!
                </p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="How does feeding tracking work?" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">PetCrew makes feeding tracking simple and automatic:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  <strong>Quick Log:</strong> Tap the paw button on your pet's card to instantly
                  log a feeding
                </li>
                <li>
                  <strong>Manual Entry:</strong> Long-press to enter custom feeding times or add
                  notes
                </li>
                <li>
                  <strong>Reminders:</strong> Enable feeding reminders in pet settings to get
                  notifications
                </li>
                <li>
                  <strong>History:</strong> View complete feeding history in the Timeline tab
                </li>
              </ul>
              <p className="text-gray-600">
                All feeding data is stored locally on your device and syncs via iCloud if enabled.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem title="Can I share my pet's data with family members?" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">
                Yes! Create or join a household to collaborate on pet care:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Go to Settings → Household</li>
                <li>Tap "Create Household" or "Join Household"</li>
                <li>Share the invite link with family members</li>
                <li>Everyone sees real-time updates when feedings are logged</li>
              </ul>
              <div className="mt-4 rounded-lg bg-yellow-50 p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Privacy Note:</strong> Only invited household members can access your pet data.
                  You can leave a household anytime.
                </p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="How do I sync with family members?" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">To sync your pet data with family members across devices:</p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-600">
                <li>Open PetCrew Settings</li>
                <li>Tap "Household"</li>
                <li>Choose "Create Household" (if you're the first) or "Join Household" (if someone invited you)</li>
                <li>Share the invite link with family members</li>
              </ol>
              <p className="mb-4">
                <strong>Requirements:</strong>
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Internet connection for syncing</li>
                <li>All members must have PetCrew installed</li>
              </ul>
              <p className="text-gray-600">
                Your data will automatically sync across all household members' devices in real-time.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem title="How do I upgrade to Premium?" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">Upgrade to Premium for just $1.99/month:</p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-600">
                <li>Open PetCrew and go to Settings</li>
                <li>Tap "Premium Features" or "Upgrade to Premium"</li>
                <li>Review premium features and pricing</li>
                <li>Tap "Subscribe" to proceed</li>
                <li>Confirm purchase with Face ID, Touch ID, or password</li>
              </ol>
              <p className="mb-4">
                <strong>Premium Features Include:</strong>
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Unlimited pets</li>
                <li>Advanced analytics and insights</li>
                <li>Family sharing</li>
                <li>Custom feeding schedules</li>
                <li>Priority support</li>
              </ul>
              <p className="text-gray-600">
                Cancel anytime in App Store Settings. No refunds for partial months.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem title="Can I use PetCrew offline?" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">
                Yes! PetCrew works completely offline since all data is stored on your device:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Log feedings anytime, anywhere</li>
                <li>View pet history and statistics</li>
                <li>Add photos and notes</li>
                <li>Receive local notifications and reminders</li>
              </ul>
              <p className="mb-4">
                <strong>Household Sharing:</strong> If you're in a household, changes will
                automatically sync when you reconnect to the internet.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem title="How do I delete my data?" defaultOpen>
            <div className="prose max-w-none">
              <h4 className="mb-3 font-semibold text-gray-900">Delete Local Data</h4>
              <p className="mb-4">To delete data from your device:</p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-600">
                <li>Uninstall the PetCrew app from your device</li>
                <li>All local data will be permanently deleted</li>
              </ol>

              <h4 className="mb-3 font-semibold text-gray-900">Leave a Household</h4>
              <p className="mb-4">If you're in a household:</p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-600">
                <li>Open PetCrew Settings</li>
                <li>Go to Household</li>
                <li>Tap "Leave Household"</li>
                <li>Confirm - your data will remain local on your device</li>
              </ol>
              <div className="mt-4 rounded-lg bg-red-50 p-4">
                <p className="text-sm text-red-800">
                  <strong>Warning:</strong> Uninstalling the app permanently deletes all local data and cannot be undone.
                </p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Troubleshooting */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Troubleshooting</h2>
        <Accordion>
          <AccordionItem title="App crashes or freezes" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">If PetCrew is crashing or freezing, try these steps:</p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-600">
                <li>
                  <strong>Force quit the app:</strong> Double-click home button (or swipe up) and
                  swipe away PetCrew
                </li>
                <li>
                  <strong>Restart your device:</strong> Power off and on your iPhone/iPad
                </li>
                <li>
                  <strong>Update the app:</strong> Check App Store for available updates
                </li>
                <li>
                  <strong>Update iOS:</strong> Go to Settings → General → Software Update
                </li>
                <li>
                  <strong>Reinstall:</strong> Delete app and reinstall from App Store (note: this will delete local data unless you're in a household)
                </li>
              </ol>
              <p className="text-gray-600">
                If issues persist, contact bryanstudio.dev@gmail.com with details about when the crash
                occurs.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem title="Household sync not working" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">If your data isn't syncing with household members:</p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-600">
                <li>Verify all members are in the same household</li>
                <li>Check internet connection on all devices</li>
                <li>Make sure all members have the latest version of PetCrew</li>
                <li>Try leaving and rejoining the household</li>
                <li>Wait a few moments for sync to complete</li>
              </ol>
              <div className="mt-4 rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Sync happens in real-time when you have an internet connection.
                  Check household status in Settings → Household.
                </p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Notifications not working" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">If you're not receiving feeding reminders:</p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-600">
                <li>
                  Check iOS notification settings: Settings → Notifications → PetCrew (must be
                  enabled)
                </li>
                <li>Verify reminders are enabled in PetCrew for specific pets</li>
                <li>Check Do Not Disturb settings</li>
                <li>Restart the app</li>
                <li>Disable and re-enable notifications in pet settings</li>
              </ol>
            </div>
          </AccordionItem>

          <AccordionItem title="Photos not loading or missing" defaultOpen>
            <div className="prose max-w-none">
              <p className="mb-4">If pet photos aren't displaying:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  <strong>Check photo permissions:</strong> Settings → Privacy → Photos → PetCrew
                  (should be "All Photos" or "Selected Photos")
                </li>
                <li>
                  <strong>Storage issues:</strong> Ensure your device has available storage space
                </li>
                <li>
                  <strong>Re-add photos:</strong> Edit pet profile and add photos again
                </li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact Support */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-purple-900">Still Need Help?</h2>
        <p className="mb-6 text-gray-700">
          Our support team is here to help! We typically respond within 24-48 hours.
        </p>
        <div className="space-y-4">
          <a
            href="mailto:bryanstudio.dev@gmail.com"
            className="block rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <h3 className="mb-2 font-semibold text-purple-900">Email Support</h3>
            <p className="mb-2 text-gray-700">bryanstudio.dev@gmail.com</p>
            <p className="text-sm text-gray-600">
              Please include your iOS version, device model, and detailed description of the issue.
            </p>
          </a>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold text-purple-900">Before Contacting Support</h3>
            <p className="mb-3 text-gray-700">
              To help us assist you faster, please include:
            </p>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-600">
              <li>PetCrew app version (found in Settings → About)</li>
              <li>iOS version (Settings → General → About)</li>
              <li>Device model (e.g., iPhone 13, iPad Pro)</li>
              <li>Detailed description of the problem</li>
              <li>Steps to reproduce the issue</li>
              <li>Screenshots if applicable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <div className="rounded-2xl border-2 border-purple-200 bg-white p-8">
        <h2 className="mb-4 text-xl font-bold text-purple-900">System Requirements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Minimum Requirements</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• iOS 14.0 or later</li>
              <li>• iPhone, iPad, or iPod touch</li>
              <li>• 50 MB available storage</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Recommended</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• iOS 16.0 or later</li>
              <li>• iCloud account for sync</li>
              <li>• Stable internet connection</li>
            </ul>
          </div>
        </div>
      </div>
    </LegalPageLayout>
  );
}
