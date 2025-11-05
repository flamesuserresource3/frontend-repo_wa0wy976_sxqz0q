import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Intro content */}
        <div className="order-2 lg:order-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm text-gray-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span>Full‑Stack Developer • Open to Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Building modern, scalable web apps with craft and care
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            I’m a fresher full‑stack developer passionate about React, Node.js, and cloud‑ready APIs. I love turning ideas into fast, delightful products.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition">
              <Rocket className="h-5 w-5" />
              <span>View Projects</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 transition">
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right: Spline canvas */}
        <div className="order-1 lg:order-2 relative h-[340px] sm:h-[420px] md:h-[520px] lg:h-[600px] rounded-xl overflow-hidden ring-1 ring-gray-200 bg-white">
          {/* Gradient overlay (non-blocking) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-50/40 via-transparent to-purple-50/50" />
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
