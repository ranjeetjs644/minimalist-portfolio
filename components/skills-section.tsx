"use client"

import { forwardRef, useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    id: "cloud",
    title: "Cloud & DevOps",
    color: "from-sky-500 to-cyan-500",
    skills: ["AWS Lambda", "S3", "DynamoDB", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    id: "backend",
    title: "Backend",
    color: "from-emerald-500 to-teal-500",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT", "Webhooks"],
  },
  {
    id: "frontend",
    title: "Frontend",
    color: "from-violet-500 to-purple-500",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "PWA"],
  },
  {
    id: "database",
    title: "Database",
    color: "from-orange-500 to-amber-500",
    skills: ["MongoDB", "DynamoDB", "SQL", "Mongoose"],
  },
]

export const SkillsSection = forwardRef<HTMLElement>((_, ref) => {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set())
  const skillRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.getAttribute("data-skill")
            if (skillId) {
              setVisibleSkills((prev) => new Set([...prev, skillId]))
            }
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    skillRefs.current.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 opacity-0">
      <div className="space-y-8">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <span
            className="text-4xl sm:text-5xl font-bold text-primary/20"
            style={{ fontFamily: "var(--font-display)" }}
          >
            02
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Skills
            </h2>
            <div className="h-px w-12 bg-primary mt-1" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              ref={(el) => {
                if (el) skillRefs.current.set(category.id, el)
              }}
              data-skill={category.id}
              className={`skill-card group p-5 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-500 ${
                visibleSkills.has(category.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category header with gradient line */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-display)" }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills as minimal tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm text-muted-foreground bg-background/50 border border-border/50 rounded-lg hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default ${
                      visibleSkills.has(category.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling tech marquee */}
        <div className="pt-4 overflow-hidden">
          <div className="text-xs font-mono text-muted-foreground tracking-wider mb-4">TECH STACK</div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee gap-3 whitespace-nowrap">
              {[
                "Node.js",
                "React",
                "Next.js",
                "TypeScript",
                "AWS",
                "Docker",
                "MongoDB",
                "Express",
                "Tailwind",
                "Git",
                "REST APIs",
                "JWT",
                "S3",
                "Lambda",
                "DynamoDB",
                "GitHub Actions",
                "Node.js",
                "React",
                "Next.js",
                "TypeScript",
                "AWS",
                "Docker",
                "MongoDB",
                "Express",
                "Tailwind",
                "Git",
                "REST APIs",
                "JWT",
                "S3",
                "Lambda",
                "DynamoDB",
                "GitHub Actions",
              ].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="px-4 py-2 text-sm text-muted-foreground bg-secondary/50 border border-border/50 rounded-full hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

SkillsSection.displayName = "SkillsSection"
