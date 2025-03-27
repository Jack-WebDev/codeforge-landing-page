"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type PackageManager = "npm" | "yarn" | "pnpm";

const installCommands: Record<PackageManager, string> = {
  npm: "npm create codeforge",
  yarn: "yarn create codeforge",
  pnpm: "pnpm create codeforge",
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeManager, setActiveManager] = useState<PackageManager>("npm");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const copyCommand = () => {
    navigator.clipboard.writeText(`${activeManager} create codeforge`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-violet-900 to-fuchsia-900 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="text-fuchsia-400 text-2xl font-mono"
          >
            &gt;_
          </motion.div>
          <span className="font-bold text-xl">CodeForge</span>
        </div>
      </nav>

      <header className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="md:w-1/2 mb-16 md:mb-0"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Supercharge your <span className="text-fuchsia-400">workflow</span>{" "}
            with CodeForge
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl mb-8 text-indigo-200 leading-relaxed"
          >
            A modern command-line interface that helps developers boost
            productivity.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 shadow-2xl border border-indigo-800">
            <div className="flex items-center justify-start mb-4 space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-indigo-300 font-mono text-sm">
                Terminal
              </div>
            </div>
            <div className="font-mono text-sm">
              <p className="text-indigo-300">
                $ <span className="text-white">npm create codeforge</span>
              </p>

              <p className="text-fuchsia-400 mt-2">
                ✓ CodeForge initialized successfully!
              </p>

              <p className="text-fuchsia-400 mt-2">
                ✓ Installing dependencies...
              </p>
              <p className="text-fuchsia-400 mt-2">
                - Run npm run build to build your project <br />- Run npm run
                dev to start your project
              </p>
              <p className="text-indigo-300 mt-2">
                $ <span className="text-white">_</span>
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      <section id="features" className="bg-indigo-950 bg-opacity-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose CodeForge?
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Designed with modern workflows in mind, CodeForge brings powerful
              features to your fingertips.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Turbo",
                description:
                  "Monorepo powered by Turbo for blazing fast builds and task orchestration.",
              },
              {
                icon: "🗄️",
                title: "Knex.js & Objection.js",
                description:
                  "SQL query building and modeling made simple with Knex.js and Objection.js.",
              },
              {
                icon: "⚙️",
                title: "Express.js",
                description:
                  "Lightweight and flexible backend powered by Express.js for handling HTTP requests.",
              },
              {
                icon: "🧬",
                title: "GraphQL",
                description:
                  "Modern API querying with GraphQL for efficient data fetching and type safety.",
              },
              {
                icon: "🛰️",
                title: "Apollo Server & Pothos",
                description:
                  "Robust GraphQL server with Apollo, and schema-first development using Pothos.",
              },
              {
                icon: "📂",
                title: "API & Web Separation",
                description:
                  "Structured with separate apps: `api` for backend services and `web` for the frontend.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-indigo-900 bg-opacity-40 rounded-xl p-6 border border-indigo-800 hover:border-fuchsia-500 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-indigo-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="installation" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Quick Installation</h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Get up and running in seconds with a simple command.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-2 mb-2">
              {(Object.keys(installCommands) as PackageManager[]).map(
                (manager) => (
                  <button
                    key={manager}
                    onClick={() => setActiveManager(manager)}
                    className={`px-3 py-1 rounded-t-lg font-mono text-sm transition-colors ${
                      activeManager === manager
                        ? "bg-gray-900 text-white border-t border-l border-r border-indigo-800"
                        : "bg-gray-800 text-indigo-300 hover:bg-gray-900"
                    }`}
                  >
                    {manager}
                  </button>
                )
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 bg-opacity-50 rounded-xl p-6 font-mono relative overflow-hidden border border-indigo-800"
            >
              <div className="text-white text-lg">
                $ {installCommands[activeManager]}
              </div>
              <button
                onClick={copyCommand}
                className="absolute right-4 top-4 text-indigo-300 hover:text-fuchsia-400 transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-950 py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-indigo-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-fuchsia-400 text-2xl font-mono">&gt;_</div>
                <span className="font-bold text-xl">CodeForge</span>
              </div>
              <p className="text-indigo-300 max-w-md">
                A modern command-line interface for developers who want to work
                smarter, not harder.
              </p>
            </div>
            <div className="text-indigo-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CodeForge. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
