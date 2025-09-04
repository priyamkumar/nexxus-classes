interface Testimonial {
  name: string
  grade: string
  quote: string
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="rounded-lg border border-border bg-card p-6 text-card-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-primary">
      <blockquote className="text-sm text-muted-foreground">“{t.quote}”</blockquote>
      <figcaption className="mt-3 text-sm font-medium text-foreground">
        {t.name} • <span className="text-muted-foreground">{t.grade}</span>
      </figcaption>
    </figure>
  )
}
