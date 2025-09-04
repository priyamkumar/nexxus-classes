export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">About NEXUSS CLASSES</h1>
        <p className="mt-3 max-w-3xl text-pretty text-slate-600 md:text-lg">
          We provide home tuition and personalized coaching with a focus on conceptual clarity, disciplined practice,
          and continuous feedback. Our mentors work closely with learners to build strong foundations and top exam
          performance.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-6">
            <p className="text-3xl font-bold text-amber-700">500+</p>
            <p className="text-sm text-slate-600">Students tutored</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <p className="text-3xl font-bold text-amber-700">95%</p>
            <p className="text-sm text-slate-600">Board exam success rate</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <p className="text-3xl font-bold text-amber-700">1:1</p>
            <p className="text-sm text-slate-600">Personalized mentoring</p>
          </div>
        </div>
      </section>
    </main>
  )
}
