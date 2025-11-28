"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            const staggerElements = entry.target.querySelectorAll(".stagger-children")
            staggerElements.forEach((el) => el.classList.add("animate"))
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll(".skill-bar")
            skillBars.forEach((el) => el.classList.add("animate"))
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => setIsDark(!isDark)

  const navItems = ["intro", "about", "skills", "projects", "contact"]

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Side Navigation */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-2">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2 transition-all duration-300"
              aria-label={`Navigate to ${section}`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? "bg-primary scale-150"
                    : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                }`}
              />
              <span
                className={`text-[10px] font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeSection === section
                    ? "opacity-100 text-foreground"
                    : "opacity-0 group-hover:opacity-100 text-muted-foreground"
                }`}
              >
                {section}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <header className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto py-4 flex items-center justify-between">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-border shadow-sm">
            <Image
              src="/ranjeet-photo.png"
              alt="Ranjeet Patel"
              width={40}
              height={40}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
        <HeroSection ref={(el) => (sectionsRef.current[0] = el)} />
        <AboutSection ref={(el) => (sectionsRef.current[1] = el)} />
        <SkillsSection ref={(el) => (sectionsRef.current[2] = el)} />
        <ProjectsSection ref={(el) => (sectionsRef.current[3] = el)} />
        <ContactSection ref={(el) => (sectionsRef.current[4] = el)} />

        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-xs text-muted-foreground font-mono">2025 Ranjeet Patel</div>
            <div className="text-xs text-muted-foreground">Built with passion</div>
          </div>
        </footer>
      </main>
    </div>
  )
}
