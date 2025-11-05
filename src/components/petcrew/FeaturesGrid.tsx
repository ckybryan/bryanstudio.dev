import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              track pet meals
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Simple, fast, and reliable. Built for busy pet parents who want to stay organized.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Large card - iOS Widgets */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 shadow-xl md:col-span-2 md:row-span-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-3xl font-bold text-white">iOS Widgets</h3>
              <p className="mb-6 text-lg text-purple-100">
                See your pet's feeding status right on your home screen. One tap to feed without
                opening the app.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Small widget for 1 pet (FREE)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Medium widget for 3 pets (Premium)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Auto-updates after each feeding
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 right-0 opacity-20">
              <img
                src="/petcrew/assets/screenshots/appstore-01.png"
                alt="Widget preview"
                className="h-80 w-auto"
              />
            </div>
          </motion.div>

          {/* 1-Tap Logging */}
          <motion.div
            className="group overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 inline-flex rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">1-Tap Logging</h3>
            <p className="text-green-100">Log a feeding in under 2 seconds. No forms, no hassle.</p>
          </motion.div>

          {/* Free Forever */}
          <motion.div
            className="group overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 inline-flex rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">Free Forever</h3>
            <p className="text-amber-100">Track up to 2 pets completely free. No trials, no tricks.</p>
          </motion.div>

          {/* Household Sync */}
          <motion.div
            className="group overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 shadow-xl md:col-span-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Household Sync</h3>
                <p className="text-blue-100">
                  Share feedings with family. Everyone stays in sync across all devices.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  Premium Feature
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smart Reminders */}
          <motion.div
            className="group overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 p-8 shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 inline-flex rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">Smart Reminders</h3>
            <p className="text-pink-100">
              Get notified at feeding times. Quiet hours respect your sleep.
            </p>
          </motion.div>

          {/* Feeding Insights - Full width */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 to-purple-600 p-8 shadow-xl md:col-span-3"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-3xl font-bold text-white">
                  Feeding Insights & History
                </h3>
                <p className="mb-4 text-lg text-purple-100">
                  Color-coded calendar shows feeding patterns at a glance. Track consistency,
                  streaks, and missed meals.
                </p>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    Green = All meals completed
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    Yellow = Some meals logged
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    Red = Missed feedings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-purple-400" />
                    Purple = Extra treats
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/petcrew/assets/screenshots/appstore-03.png"
                  alt="Calendar with colored dots"
                  className="h-auto w-full max-w-sm rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
