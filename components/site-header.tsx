"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Simple, accessible header with mobile menu
export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  const navLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-700 md:text-base"
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  )

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="NEXUSS CLASSES Home">
          {/* switch to transparent logo and make it responsive */}
          <img
            src="/images/logo-wb.png"
            alt="NEXUSS CLASSES logo"
            className="h-8 w-auto shrink-0 object-contain md:h-10"
          />
          <span className="text-lg font-semibold tracking-wide text-slate-900 md:text-xl">NEXUSS CLASSES</span>
        </Link>

        <nav className="hidden items-center md:flex" aria-label="Primary">
          <div className="flex items-center">
            {navLink("/", "Home")}
            {navLink("/about", "About")}
            {navLink("/courses", "Courses")}
            {navLink("/testimonials", "Testimonials")}
            {navLink("/contact", "Contact")}
          </div>
          <Link href="/contact" className="ml-3">
            <Button className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white">Enroll Now</Button>
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden border-t border-slate-200 bg-white", open ? "block" : "hidden")}>
        <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/courses", "Courses")}
          {navLink("/testimonials", "Testimonials")}
          {navLink("/contact", "Contact")}
          <Link href="/contact" className="mt-2">
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Enroll Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
