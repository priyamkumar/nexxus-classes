export function Features() {
  const features = [
    { title: "Home Tuition", desc: "Personalized sessions tailored to your pace and curriculum." },
    { title: "Experienced Mentors", desc: "Subject experts with proven track records." },
    { title: "Regular Assessments", desc: "Chapter-wise tests with feedback and improvement plans." },
  ]
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
