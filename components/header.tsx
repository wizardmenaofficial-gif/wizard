"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [showMembersDropdown, setShowMembersDropdown] = useState(false)

  const members = ["NMORY", "KRZ", "SNUF", "PPCY", "XD", "SPTR", "AMMAR"]

  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/images/wizard-logo.png"
          alt="Wizard Esports Logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          href="#"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Features
        </a>
        <div className="relative">
          <button
            onClick={() => setShowMembersDropdown(!showMembersDropdown)}
            className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 flex items-center gap-1"
          >
            Members
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${showMembersDropdown ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showMembersDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-2 min-w-[120px]">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  {member}
                </div>
              ))}
            </div>
          )}
        </div>
        <a
          href="#"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Docs
        </a>
      </nav>

      {/* Login Button Group with Arrow */}
      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          Login
        </button>
      </div>
    </header>
  )
}
