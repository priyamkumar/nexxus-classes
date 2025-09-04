"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        toast({ title: "Message sent", description: "We will get back to you shortly." })
        setForm({ name: "", email: "", phone: "", message: "" })
      } else {
        toast({ title: "Failed", description: data?.error || "Please try again.", variant: "destructive" })
      }
    } catch {
      toast({ title: "Network error", description: "Please try again later.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
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
