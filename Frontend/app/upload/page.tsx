"use client"

import axios from "axios";


import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, Cloud, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function UploadResumePage() {
  const [isLoading, setIsLoading] = useState(false); // Track AI processing state
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [jobTitle, setJobTitle] = useState<string>("")



  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0 && files[0].type === "application/pdf") {
      setSelectedFile(files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setSelectedFile(files[0])
    }
  }



const handleUpload = async () => {
  // 1. Basic check: Make sure a file and a job title are selected
  if (!selectedFile || !jobTitle) {
    alert("Please select a file and a role first!");
    return;
  }

  setIsLoading(true);

  try {
    // 2. Prepare the data exactly how Postman does it
    // We use 'FormData' because we are sending a physical file
    const formData = new FormData();
    formData.append("resume", selectedFile); // The key 'resume' must match your Backend
    formData.append("role", jobTitle);

    // 3. Send the file to the endpoint you tested in Postman
    const response = await axios.post("http://localhost:5000/resume/analyze", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Tells the server a file is coming
      },
    });

    // 4. If the Backend says "Success", save the data and go to the next page
    if (response.data.success) {
      // We save the AI results in the browser's memory
      localStorage.setItem("analysisResult", JSON.stringify(response.data));
      window.location.href = `/analysis?jobTitle=${encodeURIComponent(jobTitle)}`;
    } else {
      alert("AI analysis failed: " + response.data.message);
    }

  } catch (err) {
    console.error("Connection Error:", err);
    alert("Cannot connect to Backend. Is your Node.js server running on port 5000?");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-blue-500/30 blur-2xl rounded-full" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white relative z-10">
                Add Your Resume
              </h1>
            </div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Upload your resume and let us analyze your skills to help you achieve your career goals
            </p>
          </div>

          {/* Job Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <label htmlFor="job-title" className="text-sm font-semibold text-slate-300">
              Desired Job Title
            </label>
            <Select value={jobTitle} onValueChange={setJobTitle}>
              <SelectTrigger
                id="job-title"
                className="w-full h-14 bg-slate-900/50 backdrop-blur-xl border-2 border-slate-800 hover:border-indigo-500/50 transition-colors text-base font-semibold text-white"
              >
                <SelectValue placeholder="Select your desired role" className="font-semibold" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                <SelectItem value="Java Developer">Java Developer</SelectItem>
                <SelectItem value="coming-soon" disabled>
                  More roles coming soon...
                </SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Upload Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-sm font-semibold text-slate-300">Upload Options</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* PDF Upload Card */}
              <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card
                  className={`relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border-2 transition-all duration-300 cursor-pointer h-full ${
                    isDragging
                      ? "border-indigo-500 shadow-xl shadow-indigo-500/30"
                      : "border-slate-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  <div className="p-8 flex flex-col items-center justify-center space-y-4 text-center min-h-[280px]">
                    <div className="p-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl shadow-lg">
                      <FileText className="h-12 w-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">PDF Upload Resume</h3>
                      <p className="text-sm text-slate-400">
                        {selectedFile ? selectedFile.name : "Drag and drop your PDF here or click to browse"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-400 font-medium">
                      <Upload className="h-4 w-4" />
                      <span>Browse Files</span>
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none"></div>
                  <input id="file-input" type="file" accept=".pdf" className="hidden" onChange={handleFileInput} />
                </Card>
              </motion.div>

              {/* Google Drive Card */}
              <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border-2 border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-full">
                  <div className="p-8 flex flex-col items-center justify-center space-y-4 text-center min-h-[280px]">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                      <Cloud className="h-12 w-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">Add from Google Drive</h3>
                      <p className="text-sm text-slate-400">
                        Import your resume directly from your Google Drive account
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-400 font-medium">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.71 3.5L1.15 15l3.58 6.5L11.29 9.99 7.71 3.5M9.73 15L6.15 21.5h14.44L24.17 15H9.73m7.96-5l-3.58-6.5H1.15l3.58 6.5h13.96z" />
                      </svg>
                      <span>Connect Drive</span>
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"></div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Upload Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <Button
              size="lg"
              className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedFile || !jobTitle}
              onClick={handleUpload}
            >
              Upload Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-sm text-slate-500"
          >
            <p>Supported format: PDF only • Maximum file size: 10MB</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
