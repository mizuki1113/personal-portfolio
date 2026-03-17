import { Link } from 'react-router';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <div className="inline-block px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-pink-400 text-sm mb-6 border border-pink-500/20">
                   Welcome to my portfolio
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="text-5xl md:text-7xl mb-6">
                  Hi, I'm <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Precious Gamalo</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                  Full Stack Developer & Quality Assurance Specialist
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <p className="text-lg text-gray-500 mb-8">
                  I am an aspiring Developer and Quality Assurance Specialist currently studying and developing my skills in web development, software testing, and building reliable, user-friendly applications using modern technologies.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                  >
                    View My Work
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-gray-700 text-white rounded-full hover:bg-gray-900/50 hover:border-pink-500/50 transition-all"
                  >
                    Get In Touch
                  </Link>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.6}>
                <div className="flex gap-4 mt-8">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-pink-400 hover:border-pink-500/50 border border-gray-800 transition-all"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-pink-400 hover:border-pink-500/50 border border-gray-800 transition-all"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-pink-400 hover:border-pink-500/50 border border-gray-800 transition-all"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.3} direction="left" className="order-first md:order-last flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-500 blur-3xl opacity-30"></div>
                <div className="relative text-9xl">💻</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl text-center mb-16">
              What I Do
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-pink-500/50 transition-all group">
                <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-all">
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-4">Frontend Development</h3>
                <p className="text-gray-400">
                  Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-pink-500/50 transition-all group">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-4">Backend Development</h3>
                <p className="text-gray-400">
                  Building robust APIs and server-side applications with Node.js, Express, and databases.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-pink-500/50 transition-all group">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-all">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-4">UI/UX Design</h3>
                <p className="text-gray-400">
                  Designing beautiful and intuitive user experiences with attention to detail and accessibility.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-400">
                Check out some of my recent work
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with payment integration',
                tags: ['React', 'Node.js', 'PostgreSQL'],
                emoji: '🛒',
              },
              {
                title: 'Mobile App Design',
                description: 'Modern mobile app with sleek UI and smooth animations',
                tags: ['React Native', 'TypeScript', 'Firebase'],
                emoji: '📱',
              },
              {
                title: 'Creative Dashboard',
                description: 'Analytics dashboard with real-time data visualization',
                tags: ['Vue.js', 'D3.js', 'Express'],
                emoji: '📊',
              },
            ].map((project, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-pink-500/50 transition-all group">
                  <div className="h-48 bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center text-6xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all"></div>
                    <span className="relative">{project.emoji}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl mb-2 group-hover:text-pink-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800/50 text-pink-400 rounded-full text-sm border border-gray-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                View All Projects
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}