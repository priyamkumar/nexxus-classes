import { courses } from "@/data/courses"
import { CourseCard } from "@/components/course-card"

export default function CoursesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">Courses</h1>
        <p className="mt-2 text-slate-600">
          Choose from our curated programs designed to build confidence and mastery.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>
      </section>
    </main>
  )
}
