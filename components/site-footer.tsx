import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <img
            src="/images/logo.jpg"
            alt="NEXXUS CLASSES logo"
            className="mt-1 h-10 w-10 rounded-sm object-contain"
          />
          <div>
            <p className="text-base font-semibold text-slate-900">
              NEXXUS CLASSES
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Home Tuition & Personalized Coaching.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Quick Links</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/about" className="hover:text-amber-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-amber-700">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-amber-700">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <a
            href="mailTo:nexxusclasses@gmail.com"
            className="mt-2 text-sm text-slate-600 hover:text-amber-600"
          >
            Email: nexxusclasses@gmail.com
          </a>
          <p className="mt-2 text-sm text-slate-600">
            Address: Sco 544, second third floor, Sector 45 c, keshoram complex,
            galli number 5 Chandigarh.
          </p>
          <a
            href="tel:6239416185"
            className="mt-2 text-sm text-slate-600 hover:text-amber-600"
          >
            Phone: 6239416185
          </a>
          <p className="mt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} NEXXUS CLASSES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
