import { motion } from 'framer-motion';

export default function PetCrewHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 py-20 md:py-32">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-400/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-pink-400/30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column - Text content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Never wonder{' '}
              <span className="text-yellow-300">"Did I feed the dog?"</span>{' '}
              again
            </motion.h1>

            <motion.p
              className="mb-8 text-lg text-purple-100 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              One-tap feeding tracker with iOS widgets.{' '}
              <span className="font-semibold text-white">
                Free forever, no login required.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-6 text-sm text-purple-100 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium">Free</span>
              <span>•</span>
              <span className="font-medium">No account needed</span>
              <span>•</span>
              <span className="font-medium">Works offline</span>
            </motion.div>
          </motion.div>

          {/* Right column - iPhone mockup */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-purple-400 to-pink-400 opacity-50 blur-2xl" />

              {/* iPhone frame */}
              <div className="relative overflow-hidden rounded-[3rem] bg-black p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[2.5rem]">
                  <img
                    src="/petcrew/assets/screenshots/appstore-01.png"
                    alt="PetCrew app showing iOS widgets"
                    className="h-auto w-full max-w-sm"
                  />
                </div>
              </div>

              {/* Floating widget mockup */}
              <motion.div
                className="absolute -right-4 top-1/4 rounded-2xl bg-white p-4 shadow-2xl md:-right-12"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Yaya</p>
                      <p className="text-gray-500">Fed 2m ago</p>
                    </div>
                  </div>
                  <button className="mt-2 w-full rounded-lg bg-purple-600 px-4 py-2 text-white">
                    Quick Feed
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
