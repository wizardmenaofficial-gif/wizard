"use client"

import type React from "react"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function HeroContent() {
  const [showSignup, setShowSignup] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log("[v0] New signup received!")
    console.log("[v0] Discord Username:", formData.name)
    console.log("[v0] Email:", formData.email)
    console.log("[v0] Full signup data:", formData)

    try {
      const supabase = createClient()

      const { data, error } = await supabase
        .from("signups")
        .insert([
          {
            name: formData.name,
            email: formData.email,
          },
        ])
        .select()

      if (error) {
        console.log("[v0] Database error:", error.message)
        throw error
      }

      console.log("[v0] Successfully saved to database:", data)
      setShowSignup(false)
      setFormData({ name: "", email: "" })
    } catch (error) {
      console.log("[v0] Error saving signup:", error)
      // Keep form open on error so user can retry
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">WIZARD</span>
          <br />
          <span className="font-light tracking-tight text-white">ESPORTS</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Elite competitive gaming team dominating the esports scene. Join our community of skilled players, strategic
          gameplay, and championship victories across multiple gaming titles.
        </p>

        {showSignup ? (
          <form
            onSubmit={handleSubmit}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-4"
          >
            <h3 className="text-white font-medium mb-4 text-sm">Join Wizard Esports</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Discord Username"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                required
                disabled={isSubmitting}
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowSignup(false)}
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Buttons */
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setShowSignup(true)}
              className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
