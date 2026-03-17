import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'Mobile', 'Design', 'Open Source'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A comprehensive e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      icon: '🛒',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web Apps',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Mobile App Design',
      description:
        'Modern mobile application with focus on user experience, featuring smooth animations and intuitive navigation.',
      icon: '📱',
      tags: ['React Native', 'TypeScript', 'Firebase', 'Figma'],
      category: 'Mobile',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting tools.',
      icon: '📊',
      tags: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
      category: 'Web Apps',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Design System',
      description:
        'Comprehensive design system with reusable components, style guidelines, and documentation for enterprise applications.',
      icon: '🎨',
      tags: ['Figma', 'React', 'Storybook', 'TypeScript'],
      category: 'Design',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management tool with team features, real-time updates, and project tracking capabilities.',
      icon: '✅',
      tags: ['Next.js', 'Prisma', 'Tailwind', 'WebSocket'],
      category: 'Web Apps',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Open Source Library',
      description:
        'Popular open-source component library with over 1000+ GitHub stars, helping developers build better UIs.',
      icon: '📦',
      tags: ['React', 'TypeScript', 'NPM', 'Documentation'],
      category: 'Open Source',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="text-white">
      {/* Projects Header */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl mb-6">My Projects</h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-400 max-w-2xl">
              A collection of projects I've worked on, from web applications to open
              source contributions
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/50'
                      : 'bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-white border border-gray-800/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={index} delay={0.1 * (index % 3)}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-pink-500/50 transition-all group">
                  <div className="h-48 bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center text-7xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all"></div>
                    <span className="relative">{project.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl mb-2 group-hover:text-pink-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800/50 text-pink-400 rounded-full text-sm border border-gray-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}