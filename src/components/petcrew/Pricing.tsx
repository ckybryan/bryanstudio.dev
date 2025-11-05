import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const plans = [
    {
      name: 'Free Forever',
      price: '$0',
      period: 'forever',
      description: 'Perfect for solo pet parents',
      features: [
        'Up to 2 pets',
        'One-tap quick logging',
        'iOS home screen widgets',
        '30-day feeding history',
        'Smart reminders',
        'Works 100% offline',
        'Color-coded status',
        'No account required',
      ],
      cta: 'Download Free',
      popular: false,
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      name: 'Premium',
      price: '$1.99',
      period: 'per month',
      description: 'Best for families and multi-pet homes',
      features: [
        'Everything in Free',
        'Unlimited pets',
        'Household sync (up to 5 members)',
        'Full feeding history',
        'Advanced insights & analytics',
        'Consistency tracking',
        'Member activity leaderboard',
        'Priority support',
        'All widget sizes',
      ],
      cta: 'Start Free Trial',
      popular: true,
      gradient: 'from-purple-600 to-pink-600',
    },
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
            Start free.{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Upgrade when ready.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            No trials, no tricks. Track up to 2 pets forever for free. Only upgrade if you need household sync or analytics.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl shadow-2xl ${
                plan.popular ? 'ring-4 ring-purple-600' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-0 top-0 overflow-hidden">
                  <div className="relative">
                    <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-br from-purple-600 to-pink-600" />
                    <div className="absolute right-0 top-0 flex h-16 w-16 items-center justify-center">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute right-2 top-2 text-xs font-bold text-white">
                    POPULAR
                  </div>
                </div>
              )}

              {/* Card header */}
              <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white`}>
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="mb-4 text-sm opacity-90">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-lg opacity-75">/{plan.period}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="bg-white p-8">
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
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
                  className={`w-full rounded-full bg-gradient-to-r ${plan.gradient} py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
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
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>7-day free trial</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
