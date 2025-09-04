import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Personalized Coaching
          </span>
          <h1 className="mt-4 text-pretty text-3xl font-bold text-slate-900 md:text-4xl">
            Excel with expert tutors at NEXUSS CLASSES
          </h1>
          <p className="mt-3 text-pretty text-slate-600 md:text-lg">
            Structured lessons, regular assessments, and one-on-one attention for school and board exams. Learn smarter,
            score higher.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Enroll Now</Button>
            </Link>
            <Link href="/courses" className="text-sm font-medium text-amber-700 hover:text-amber-800">
              View Courses →
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="/classroom-study-session.png"
            alt="Students studying with a tutor"
            className="w-full rounded-lg border border-slate-200"
          />
        </div>
      </div>
    </section>
  )
}
