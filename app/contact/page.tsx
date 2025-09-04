import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">Contact Us</h1>
        <p className="mt-2 text-slate-600">Fill out the form and our mentor will contact you within 24 hours.</p>
        <div className="mt-6 rounded-lg border border-slate-200 p-6">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
