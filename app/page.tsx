"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import Image from "next/image"

export default function ShaderShowcase() {
  return (
    <ShaderBackground>
      <Header />
      <div className="flex justify-center pt-8 pb-4">
        <Image
          src="/images/team-wizard-logo.png"
          alt="Team Wizard Logo"
          width={400}
          height={200}
          className="w-80 h-auto object-contain"
        />
      </div>
      <HeroContent />
    </ShaderBackground>
  )
}
