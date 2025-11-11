import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DeveloperPortfolio() {
  const appsRef = useRef(null);
  const appsInView = useInView(appsRef, { once: true });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-400/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-pink-400/30 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-5xl font-extrabold text-white md:text-7xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Bryan Chan
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-purple-100 md:text-2xl">
              Solo developer crafting delightful mobile experiences.
              <br />
              Building apps that solve real problems.
            </p>
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="mailto:bryanstudio.dev@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
              About{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              I'm a passionate indie developer focused on creating beautiful, intuitive mobile
              applications. With a background in full-stack development, I bring ideas to life from
              concept to App Store.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Every app I build is driven by one goal: to make people's lives easier and more
              enjoyable. I believe in simple, elegant solutions that just work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apps Section */}
      <section ref={appsRef} className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={appsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
              My{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Apps
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Apps I've built and launched on the App Store
            </p>
          </motion.div>

          {/* PetCrew Card */}
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={appsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/petcrew"
                className="group block overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl md:p-12"
              >
                <div className="flex flex-col items-center gap-8 md:flex-row">
                  {/* App Icon */}
                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src="/petcrew/assets/icons/app-icon.png"
                      alt="PetCrew App Icon"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* App Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="mb-3 text-3xl font-extrabold text-gray-900 group-hover:text-purple-600 transition-colors">
                      PetCrew
                    </h3>
                    <p className="mb-4 text-lg text-gray-600">
                      Smart pet care companion. Track feeding schedules, share care with family, and
                      never miss a meal. Simple, beautiful, and built for pet parents who care.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                      <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-600">
                        iOS
                      </span>
                      <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
                        Pet Care
                      </span>
                      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        Family Sharing
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <svg
                      className="h-8 w-8 text-purple-600 transition-transform group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Coming Soon */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={appsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-gray-500">More apps coming soon...</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-gray-600">
            <a
              href="mailto:bryanstudio.dev@gmail.com"
              className="font-medium text-purple-600 hover:text-purple-700"
            >
              bryanstudio.dev@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500">© 2025 Bryan Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
