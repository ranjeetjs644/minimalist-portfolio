"use client"

import { forwardRef } from "react"

export const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <header id="intro" ref={ref} className="min-h-[85vh] flex items-center opacity-0 pt-20">
      <div className="w-full">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">2025</span>
          </div>

          <div className="space-y-1">
            <h1
              className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ranjeet
            </h1>
            <h1
              className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-muted-foreground/60"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Patel
            </h1>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-snug max-w-lg">
            <span className="text-foreground font-medium">Full-Stack Developer</span> building scalable systems with
            <span className="text-primary"> cloud</span>,<span className="text-primary"> backend</span>, and
            <span className="text-primary"> modern web</span> technologies.
          </p>

          {/* Status badges */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground">Open to work</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Ahmedabad, India</span>
            </div>
          </div>

          {/* Current Status - compact grid */}
          <div className="pt-4 grid grid-cols-2 gap-4 max-w-md">
            <div className="p-4 rounded-xl bg-secondary/50 border border-border">
              <div className="text-xs font-mono text-muted-foreground tracking-wider mb-1">CURRENTLY</div>
              <div className="text-base font-medium">Jr. Software Engineer</div>
              <div className="text-sm text-muted-foreground">@ Startup</div>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50 border border-border">
              <div className="text-xs font-mono text-muted-foreground tracking-wider mb-1">EDUCATION</div>
              <div className="text-base font-medium">Bachelor of Technology </div>
              <div className="text-sm text-muted-foreground">Computer Science and Engineering</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 flex items-center gap-2 text-muted-foreground">
            <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-0.5 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
            </div>
            <span className="text-xs font-mono tracking-wider">SCROLL</span>
          </div>
        </div>
      </div>
    </header>
  )
})

HeroSection.displayName = "HeroSection"
