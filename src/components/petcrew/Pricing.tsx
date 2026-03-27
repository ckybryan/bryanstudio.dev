import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    'Unlimited pets',
    'All widget sizes (small + medium)',
    'One-tap quick feed logging',
    'Full feeding history (unlimited)',
    'Smart reminders with quiet hours',
    'Feeding insights, streaks, analytics',
    'Local member tracking',
    'Dark mode',
    'No account required',
    'No ads, ever',
  ];

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            100% free.{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              No catches.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Every feature. Every pet. No limits. No subscriptions.
          </p>
        </motion.div>

        {/* Single pricing card */}
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-purple-600"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Card header */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white">
              <h3 className="mb-2 text-2xl font-bold">Everything Included</h3>
              <p className="mb-4 text-sm opacity-90">Every feature unlocked for everyone</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold">$0</span>
                <span className="text-lg opacity-75">/forever</span>
              </div>
            </div>

            {/* Card body */}
            <div className="bg-white p-8">
              <ul className="mb-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Download on the App Store
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust footer */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No account required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No ads ever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>100% private</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
