import { Code2, Layers, Database, Server } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'TypeScript'] },
  { icon: Server, label: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'REST'] },
  { icon: Database, label: 'Database', items: ['MongoDB', 'PostgreSQL', 'Prisma/Mongoose'] },
  { icon: Layers, label: 'Tools', items: ['Git', 'Docker', 'Vercel', 'CI/CD'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Core Skills</h2>
          <p className="mt-2 text-gray-600">Technologies I use to build modern full‑stack applications.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, label, items }) => (
            <div key={label} className="rounded-xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                {items.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
