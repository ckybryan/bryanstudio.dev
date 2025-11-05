import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Problem side */}
          <motion.div
            className="rounded-3xl bg-white p-8 shadow-lg md:p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-4xl">😰</span>
              <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
            </div>

            <ul className="space-y-6">
              {[
                {
                  icon: '🤔',
                  text: '"Did my partner already feed the cat?"',
                },
                {
                  icon: '🙈',
                  text: '"I forgot if I gave him breakfast..."',
                },
                {
                  icon: '😵',
                  text: 'Multiple family members = double-feeding chaos',
                },
                {
                  icon: '📱',
                  text: 'Apps that require accounts just to track meals',
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <span className="flex-shrink-0 text-2xl">{item.icon}</span>
                  <p className="text-lg text-gray-700">{item.text}</p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 rounded-xl bg-red-50 p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <p className="text-center text-sm font-semibold text-red-800">
                Sound familiar? You're not alone.
              </p>
            </motion.div>
          </motion.div>

          {/* Solution side */}
          <motion.div
            className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 shadow-xl md:p-12"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-4xl">✨</span>
              <h2 className="text-3xl font-bold text-white">The Solution</h2>
            </div>

            <ul className="space-y-6">
              {[
                {
                  icon: '👀',
                  title: 'See feeding status instantly',
                  desc: 'Color-coded pet cards show who ate and when',
                },
                {
                  icon: '⚡',
                  title: 'One-tap logging in <2 seconds',
                  desc: 'No forms, no fuss. Just tap "Feed" and done.',
                },
                {
                  icon: '👨‍👩‍👧‍👦',
                  title: 'Family sync keeps everyone aligned',
                  desc: 'Real-time updates across all devices',
                },
                {
                  icon: '📱',
                  title: 'iOS widgets on your home screen',
                  desc: 'Check status without opening the app',
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <span className="flex-shrink-0 text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-purple-100">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 rounded-xl bg-white/20 p-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
              <p className="text-center text-sm font-semibold text-white">
                ✓ Download and start logging in seconds
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Center arrow animation */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-lg">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
