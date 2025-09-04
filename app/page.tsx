import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { courses } from "@/data/courses"
import { CourseCard } from "@/components/course-card"
import { testimonials } from "@/data/testimonials"
import { TestimonialCard } from "@/components/testimonial-card"

export default function HomePage() {
  return (
    <main>
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <Hero />
          <Features />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-balance text-xl font-semibold text-foreground md:text-2xl">Popular Courses</h2>
            <a href="/courses" className="text-sm font-medium text-primary hover:opacity-90">
              See all →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((c) => (
              <CourseCard key={c.title} course={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-balance text-xl font-semibold text-foreground md:text-2xl">What students say</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-pretty text-lg font-semibold text-foreground md:text-xl">
              Ready to boost your scores?
            </h3>
            <p className="text-sm text-muted-foreground">Talk to a mentor and get a personalized study plan.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
