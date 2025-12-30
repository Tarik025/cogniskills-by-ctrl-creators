"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, ArrowRight, BookOpen, Calendar, Zap, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"

export default function SkillsAnalysisPage() {
  const searchParams = useSearchParams()
  const jobTitle = searchParams.get("jobTitle") || "Software Developer"
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const savedData = localStorage.getItem("analysisResult")
    if (savedData) {
      const parsed = JSON.parse(savedData)
      setData(parsed.data || parsed)
    }
  }, [])

  if (!data) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full relative z-10" 
          />
          <p className="mt-4 text-indigo-300 font-mono tracking-widest animate-pulse">INITIATING AI SCAN...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-indigo-500/30">
      {/* --- EXTREME COOL: Animated Background Layer --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-blue-600/10 blur-[120px] rounded-full animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="space-y-16"
        >
          {/* Header with Neon Badge */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4"
            >
              <Sparkles className="h-3 w-3" /> AI Analysis Complete
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase italic">
              Target: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]">{jobTitle}</span>
            </h1>
          </div>

          {/* Comparison Cards with Staggered Entrance */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Matched Skills */}
            <Card className="group relative bg-slate-900/40 backdrop-blur-2xl border-slate-800/50 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-black uppercase italic tracking-wider text-emerald-400">Inventory Found</h2>
                    <Zap className="h-6 w-6 text-emerald-500 fill-emerald-500/20" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {data.matched?.map((skill: string, i: number) => (
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] group/item hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm font-semibold text-slate-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </Card>

            {/* Missing Skills */}
            <Card className="group relative bg-slate-900/40 backdrop-blur-2xl border-slate-800/50 rounded-3xl overflow-hidden hover:border-rose-500/50 transition-all duration-500 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-black uppercase italic tracking-wider text-rose-400">Skill Gaps</h2>
                    <XCircle className="h-6 w-6 text-rose-500 fill-rose-500/20" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {data.missing?.map((skill: string, i: number) => (
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-rose-500/10 hover:border-rose-500/20 transition-all"
                      >
                        <ArrowRight className="h-4 w-4 text-rose-500" />
                        <span className="text-sm font-semibold text-slate-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </Card>
          </div>

          {/* ROADMAP: The Hero Section */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <Card className="relative bg-slate-950/80 backdrop-blur-3xl border-slate-800/50 p-10 rounded-[2rem] shadow-3xl overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="space-y-2">
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white flex items-center gap-4">
                    <BookOpen className="h-10 w-10 text-indigo-500" /> Roadmap
                  </h2>
                  <p className="text-slate-400 font-medium">Automated learning path synthesized from industry requirements.</p>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent mx-8 hidden md:block" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {data.roadmap?.map((step: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="relative group h-full"
                  >
                    <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl blur-xl group-hover:bg-indigo-500/10 transition-all" />
                    <div className="relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] group-hover:border-indigo-500/40 transition-all">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 font-black text-xl border border-indigo-500/30">
                          {i + 1}
                        </div>
                        <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs">Phase 0{i+1}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed font-semibold text-lg">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}