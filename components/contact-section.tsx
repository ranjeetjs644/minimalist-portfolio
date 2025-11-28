"use client"

import { forwardRef } from "react"
import Link from "next/link"

export const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const socials = [
    {
      name: "GitHub",
      handle: "ranjeetjs644",
      url: "https://github.com/ranjeetjs644",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "ranjeetjs",
      url: "https://linkedin.com/in/ranjeetjs",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "X",
      handle: "ranjeett.dev",
      url: "https://x.com/ranjeett_dev",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Email",
      handle: "ranjeett.dev@gmail.com",
      url: "mailto:ranjeett.dev@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-14 sm:py-16 opacity-0">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl font-sans font-bold text-primary/20">04</span>
          <div>
            <h2 className="text-xl sm:text-2xl font-sans font-semibold">Connect</h2>
            <div className="h-px w-10 bg-primary mt-1" />
          </div>
        </div>

        {/* Content - compact */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4 stagger-children">
            <p className="text-sm text-muted-foreground leading-snug">
              Interested in opportunities, collaborations, or just want to say hi? Feel free to reach out.
            </p>

            {/* Email CTA */}
            <Link
              href="mailto:ranjeett.dev@gmail.com"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium">ranjeett.dev@gmail.com</span>
              <svg
                className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="space-y-3">
            {/* Social links - compact grid */}
            <div className="grid grid-cols-2 gap-2 stagger-children">
              {socials.map((s) => (
                <Link
                  key={s.name}
                  href={s.url}
                  target={s.name !== "Email" ? "_blank" : undefined}
                  className="group flex items-center gap-2.5 p-2.5 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">{s.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                      {s.name}
                    </div>
                    <div className="text-[10px] text-muted-foreground truncate">{s.handle}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Resume */}
            <Link
              href="https://drive.google.com/file/d/1oduCe3ngnlMqiEWIpZVRTgRS1laybT7W/view?usp=sharing"
              target="_blank"
              className="group inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:border-primary/30 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-xs font-medium">View Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
