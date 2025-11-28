"use client"

import { forwardRef } from "react"

export const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 opacity-0">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <span
            className="text-4xl sm:text-5xl font-bold text-primary/20"
            style={{ fontFamily: "var(--font-display)" }}
          >
            01
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              About
            </h2>
            <div className="h-px w-12 bg-primary mt-1" />
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-4 stagger-children">
            <p className="text-sm sm:text-base text-muted-foreground leading-snug">
              I'm a <span className="text-foreground font-medium">full-stack developer</span> and final-year Computer
              Science and Engineering student working in a startup environment where I contribute to building scalable,
              production-ready systems.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-snug">
              I enjoy implementing clean backend services, working with cloud infrastructure, and deploying
              high-performance applications using modern DevOps tooling.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-snug">
              I've contributed to <span className="text-primary">e-commerce SaaS development</span>, built custom
              logistics applications, PR-review tools, backend systems, and PWA applications. I use AI effectively in my
              workflow to enhance productivity.
            </p>
          </div>

          <div className="lg:col-span-2">
            {/* Quick facts */}
            <div className="p-5 rounded-xl bg-secondary/50 border border-border">
              <div className="text-xs font-mono text-muted-foreground tracking-wider mb-4">QUICK FACTS</div>
              <div className="space-y-3 stagger-children">
                {[
                  { label: "Experience", value: "Startup" },
                  { label: "Focus", value: "Backend & Cloud" },
                  { label: "Approach", value: "Production-Ready" },
                  { label: "Workflow", value: "AI-Enhanced" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
