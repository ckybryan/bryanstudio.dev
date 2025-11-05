import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: 'Do I need to create an account?',
    answer:
      "Nope! Download and start logging immediately. No email, no password, no hassle. Only needed for Premium household sync.",
  },
  {
    question: 'What happens to my data?',
    answer:
      "Free users: 100% local on your device. We never see it. Premium: Encrypted cloud sync shared only with your invited household members. You control who joins.",
  },
  {
    question: 'Can I try Premium features?',
    answer:
      'Yes! Start a 7-day free trial of Premium. No credit card required. Cancel anytime with one tap.',
  },
  {
    question: 'Does this work offline?',
    answer:
      'Absolutely. All core features work without internet. Premium sync happens automatically when you reconnect.',
  },
  {
    question: 'How many pets can I track for free?',
    answer:
      'Up to 2 pets completely free, forever. Need more? Upgrade to Premium for unlimited pets.',
  },
  {
    question: 'What\'s included in the free version?',
    answer:
      'Everything you need: Quick feed logging, iOS widgets, reminders, 30-day history, color-coded calendar, and smart notifications. No ads, ever.',
  },
  {
    question: 'How does household sync work?',
    answer:
      'Premium users create a household and share an invite code (like PET-ABC123). Family members join instantly and all devices stay synced in real-time.',
  },
  {
    question: 'Can I switch between devices?',
    answer:
      'Free users: Each device is independent. Premium users: Automatic sync across all devices in your household.',
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
            href="mailto:support@petcrewapp.com"
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
