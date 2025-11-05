import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'TaskFlow',
    description: 'A productivity web app for managing tasks with real‑time updates and drag‑and‑drop.',
    stack: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Shoply API',
    description: 'RESTful e‑commerce API with authentication, pagination, and robust validation.',
    stack: ['FastAPI', 'MongoDB', 'JWT'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'DevNotes',
    description: 'Markdown note‑taking app with cloud sync and offline support.',
    stack: ['Vite', 'PWA', 'IndexedDB'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A selection of work that highlights my approach to building clean, reliable software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative h-44 w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span key={tag} className="rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <a href={p.link} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
                    <span>View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
