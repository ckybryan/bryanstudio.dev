import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface LegalPageLayoutProps {
  title: string;
  icon: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  title,
  icon,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 py-16">
        {/* Animated background blobs */}
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
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-6xl">{icon}</div>
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
              {title}
            </h1>
            <p className="text-lg text-purple-100">{lastUpdated}</p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            <Link
              to="/petcrew"
              className="font-medium text-purple-600 transition-colors hover:text-purple-700"
            >
              ← Back to PetCrew
            </Link>
            <Link
              to="/petcrew/privacy"
              className="font-medium text-gray-600 transition-colors hover:text-purple-600"
            >
              Privacy Policy
            </Link>
            <Link
              to="/petcrew/terms"
              className="font-medium text-gray-600 transition-colors hover:text-purple-600"
            >
              Terms of Service
            </Link>
            <Link
              to="/petcrew/support"
              className="font-medium text-gray-600 transition-colors hover:text-purple-600"
            >
              Support
            </Link>
          </div>
          <p className="text-center text-sm text-gray-500">
            © 2025 PetCrew. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
