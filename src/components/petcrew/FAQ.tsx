import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: 'Do I need to create an account?',
    answer:
      'No. Just download and start tracking. No email, no password, no sign-up needed.',
  },
  {
    question: 'Is PetCrew really free?',
    answer:
      'Yes — every feature is free with no limits. Unlimited pets, unlimited history, all widget sizes, full analytics. No subscriptions, no in-app purchases, no ads.',
  },
  {
    question: 'What do the status colors mean?',
    answer:
      'Green means your pet was fed recently. Yellow means a feeding is due soon. Red means feeding is overdue. The same colors appear on your home screen widgets and in the calendar history.',
  },
  {
    question: 'How do I log a feeding?',
    answer:
      'Tap the "Feed now" button on any pet card. You can also add details like notes or mark it as a treat. Feedings can be logged from the app or directly from a home screen widget.',
  },
  {
    question: 'How do home screen widgets work?',
    answer:
      'PetCrew offers small and medium iOS widgets. The small widget shows one pet with its feeding status. The medium widget shows meal progress and who fed last. Widgets update automatically after each feeding.',
  },
  {
    question: 'How do I coordinate feeding with family?',
    answer:
      'Go to the Members tab and add family members by name. When anyone logs a feeding, they select who fed the pet. This way you can see exactly who fed and when — no one else needs to install the app.',
  },
  {
    question: 'Is my data private?',
    answer:
      'All data is stored locally on your device. We have no servers and no way to access your information. Deleting the app removes all data permanently.',
  },
  {
    question: 'Does PetCrew work offline?',
    answer:
      'Yes. Everything works without an internet connection since all data is stored on your device. Notifications and reminders also work offline.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Everything you need to know about PetCrew
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-purple-50"
              >
                <span className="pr-4 text-lg font-semibold text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="mb-4 text-lg text-gray-600">Still have questions?</p>
          <a
            href="mailto:bryanstudio.dev@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
