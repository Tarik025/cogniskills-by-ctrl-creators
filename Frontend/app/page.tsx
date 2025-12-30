"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Upload, Target, TrendingUp, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section - Reduced padding-bottom (pb) */}
        <section className="pt-20 pb-10 md:pt-32 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            {/* Title with glow effect */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-blue-500/30 blur-2xl rounded-full animate-pulse" />
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white relative z-10">
                COGNISKILLS
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-slate-400 text-balance max-w-2xl">Smart Career Gap Analyzer</p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/upload">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all duration-300"
                >
                  Get Started!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Why CogniSkills Section - Reduced padding-top (pt) */}
        <section className="pt-6 pb-16 md:pt-8 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-12"
          >
            {/* Speech Bubble Header */}
            <div className="relative inline-block">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-indigo-500/30 rounded-3xl px-8 py-4 shadow-lg shadow-indigo-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Why CogniSkills?</h2>
              </div>
              {/* Speech bubble tail */}
              <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-indigo-500/30"></div>
            </div>

            {/* Feature Card with Glassmorphism */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-4xl"
            >
              <Card className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border-slate-800 shadow-2xl shadow-indigo-500/10 hover:border-slate-700 transition-all duration-300">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                <div className="relative p-8 md:p-12 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                      <Upload className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-indigo-300">Upload your resume</h3>
                      <p className="text-slate-400">Simply upload your current resume and let our AI analyze it</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-purple-300">Discover missing skills</h3>
                      <p className="text-slate-400">
                        Identify skill gaps based on your target role and industry trends
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-emerald-300">
                        Get a clear learning roadmap
                      </h3>
                      <p className="text-slate-400">Receive personalized recommendations for courses and resources</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-amber-300">Ace in your Career</h3>
                      <p className="text-slate-400">Level up your skills and land your dream job with confidence</p>
                    </div>
                  </div>
                </div>

                {/* Ambient glow effects */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}