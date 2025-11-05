import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let’s connect</h2>
          <p className="mt-2 text-gray-600">I’m actively looking for full‑time roles and exciting collaborations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <form className="lg:col-span-2 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Tell me about your project..." />
              </div>
            </div>
            <div className="mt-4">
              <button type="button" className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 transition">
                Send Message
              </button>
            </div>
          </form>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">More ways to reach me</h3>
            <div className="mt-4 space-y-3">
              <a href="mailto:you@example.com" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
                <Mail className="h-5 w-5" /> you@example.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
                <Github className="h-5 w-5" /> github.com/yourhandle
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
                <Linkedin className="h-5 w-5" /> linkedin.com/in/yourhandle
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </section>
  );
}
