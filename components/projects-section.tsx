"use client"

import { forwardRef } from "react"

const projects = [
  {
    title: "AI-powered GitHub PR Review Tool",
    category: "College Project",
    description:
      "Web app that analyzes GitHub Pull Requests using AI to generate intelligent code suggestions and reviews.",
    tech: ["Next.js", "GitHub OAuth", "Octokit", "AI APIs"],
    highlight: true,
  },
  {
    title: "E-Commerce SaaS Modules",
    category: "Startup Work",
    description:
      "Contributing to building real SaaS modules and scalable service architectures for e-commerce solutions.",
    tech: ["SaaS Architecture", "Scalable Systems"],
    highlight: true,
  },
  {
    title: "Scalable File Upload System",
    category: "Backend",
    description: "Production-grade file upload pipeline with multi-provider storage and high reliability.",
    tech: ["Express.js", "AWS Lambda", "S3", "Backblaze B2"],
    highlight: false,
  },
  {
    title: "B2B Logistics PWA",
    category: "PWA",
    description: "Business logistics management with offline support and real-time order tracking.",
    tech: ["PWA", "Real-time", "Role-based Access"],
    highlight: false,
  },
  {
    title: "Social Media Backend",
    category: "Backend",
    description: "Backend system with posts, videos, channels, and subscriptions.",
    tech: ["Node.js", "MongoDB", "JWT", "Cloudinary"],
    highlight: false,
  },
]

export const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20 opacity-0">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <span
            className="text-4xl sm:text-5xl font-bold text-primary/20"
            style={{ fontFamily: "var(--font-display)" }}
          >
            03
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Projects
            </h2>
            <div className="h-px w-12 bg-primary mt-1" />
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-4 stagger-children">
          {/* Featured */}
          <div className="grid sm:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.highlight)
              .map((project, i) => (
                <article
                  key={i}
                  className="group p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-xs font-mono text-primary tracking-wider uppercase">{project.category}</span>
                  <h3
                    className="text-base font-medium mt-2 mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-snug mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-background border border-border rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
          </div>

          {/* Others */}
          <div className="grid sm:grid-cols-3 gap-3">
            {projects
              .filter((p) => !p.highlight)
              .map((project, i) => (
                <article
                  key={i}
                  className="group p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/20 transition-all duration-300"
                >
                  <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3
                    className="text-sm font-medium mt-1.5 mb-1.5 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"
