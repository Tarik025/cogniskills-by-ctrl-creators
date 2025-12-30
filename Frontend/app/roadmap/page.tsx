"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code2, Palette, Blocks, Database, Trophy, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const roadmapSteps = [
  {
    step: 1,
    title: "Learn the Fundamentals",
    description: "Build a solid foundation with core web technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation"],
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/10",
  },
  {
    step: 2,
    title: "Advanced Styling & Tools",
    description: "Master modern styling frameworks and developer tools",
    skills: ["Tailwind CSS", "Git & GitHub", "npm/pnpm", "Chrome DevTools"],
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/10",
  },
  {
    step: 3,
    title: "Frameworks",
    description: "Learn industry-standard frameworks for building modern apps",
    skills: ["React.js", "Next.js", "Component Architecture", "React Hooks"],
    icon: Blocks,
    color: "from-indigo-500 to-blue-500",
    bgGlow: "bg-indigo-500/10",
  },
  {
    step: 4,
    title: "State & APIs",
    description: "Handle data fetching and global state management",
    skills: ["RESTful APIs", "Zustand/Redux", "Server Actions", "Error Handling"],
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/10",
  },
  {
    step: 5,
    title: "The Goal",
    description: "Create your portfolio and achieve success",
    skills: ["Portfolio Projects", "GitHub Profile", "Job Applications", "Interview Prep"],
    icon: Trophy,
    color: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/10",
    isGoal: true,
  },
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="relative inline-block">
            {/* Glowing aura effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-blue-500/30 blur-2xl rounded-full animate-pulse" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white relative z-10 mb-4">
              Become a{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Follow this structured roadmap to master frontend development and land your dream job
          </p>
        </motion.div>

        {/* Roadmap Steps */}
        <div className="space-y-8 md:space-y-12 relative">
          {/* Connecting line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-blue-500/50 -translate-x-1/2" />

          {roadmapSteps.map((stepData, index) => {
            const Icon = stepData.icon
            const isLeft = index % 2 === 0
            const isGoal = stepData.isGoal

            return (
              <motion.div
                key={stepData.step}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex ${isGoal ? "justify-center" : `md:justify-${isLeft ? "start" : "end"}`} relative`}
              >
                {/* Step number indicator */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${stepData.color} flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-[#0a0a0a]`}
                  >
                    {stepData.step}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full ${isGoal ? "max-w-2xl" : "md:max-w-[45%]"}`}
                >
                  <Card
                    className={`bg-slate-900/50 backdrop-blur-xl border-slate-800 shadow-2xl rounded-2xl overflow-hidden group hover:border-slate-700 transition-all duration-300 ${stepData.bgGlow} ${isGoal ? "border-2 border-amber-500/30" : ""}`}
                  >
                    <div className="p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${stepData.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="md:hidden px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-semibold">
                              Step {stepData.step}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{stepData.title}</h3>
                          <p className="text-slate-400 text-sm md:text-base">{stepData.description}</p>
                        </div>
                      </div>

                      {/* Skills list */}
                      <div className="space-y-2">
                        {stepData.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors duration-200"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm md:text-base font-medium">{skill}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Goal CTA */}
                      {isGoal && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mt-6 pt-6 border-t border-slate-700"
                        >
                          <Button
                            size="lg"
                            className="w-full h-14 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Start Your Journey
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 md:mt-24 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to start learning?</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Upload your resume to get a personalized roadmap based on your current skills
          </p>
          <Button
            size="lg"
            asChild
            className="h-14 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/upload">
              Upload Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
