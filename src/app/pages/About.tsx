import { Code2, Palette, Zap } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function About() {
  return (
    <div className="text-white">
      {/* About Header */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl mb-8">About Me</h1>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-400 text-lg">
              <FadeIn delay={0.1}>
                <p>
                  I'm a Computer Science student currently in my junior year, passionate about web development and software quality assurance. I enjoy building digital projects that are functional, user-friendly, and continuously improving as I learn more about modern technologies and best coding practices.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p>
                 I believe in the importance of clean code, good design, and proper testing to create reliable and efficient applications. As a student, I am constantly exploring new tools, learning new skills, and working on projects that help me grow as a future developer and QA specialist.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p>
                  I'm always excited to work on projects that challenge me to 
                  grow and learn something new.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.2} direction="left" className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-500 blur-3xl opacity-20"></div>
                <div className="relative text-9xl">🦖</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl mb-12">Skills & Technologies</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="text-pink-400" size={24} />
                  <h3 className="text-2xl">Developer</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800/50 text-pink-400 rounded-full text-sm border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="text-purple-400" size={24} />
                  <h3 className="text-2xl">Developer</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800/50 text-purple-400 rounded-full text-sm border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="text-green-400" size={24} />
                  <h3 className="text-2xl">Developer</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Git', 'Docker'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800/50 text-green-400 rounded-full text-sm border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl mb-12">Experience</h2>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-500/50">
                    2025
                  </div>
                  <div className="w-0.5 h-full bg-gray-800 mt-4"></div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 flex-1 mb-6">
                  <h3 className="text-2xl mb-2">Developer</h3>
                  <p className="text-pink-400 mb-4">at some team</p>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-500/50">
                    2025
                  </div>
                  <div className="w-0.5 h-full bg-gray-800 mt-4"></div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 flex-1 mb-6">
                  <h3 className="text-2xl mb-2">Developer</h3>
                  <p className="text-pink-400 mb-4">at some team</p>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-500/50">
                    2023
                  </div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 flex-1">
                  <h3 className="text-2xl mb-2">Developer</h3>
                  <p className="text-pink-400 mb-4">at some team</p>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}