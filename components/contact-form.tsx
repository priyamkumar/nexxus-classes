"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  return (
    <form action="https://formsubmit.co/priyamkumar976@gmail.com" method="POST" className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={update}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={update}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
          placeholder="+91-XXXXXXXXXX"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={update}
          rows={5}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
          placeholder="Tell us about your learning goals..."
        />
      </div>

      <Button type="submit" disabled={loading} className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
