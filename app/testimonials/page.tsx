import { testimonials } from "@/data/testimonials"
import { TestimonialCard } from "@/components/testimonial-card"

export default function TestimonialsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">Testimonials</h1>
        <p className="mt-2 text-slate-600">Real results from students and parents who trusted NEXUSS CLASSES.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </section>
    </main>
  )
}
