import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { User, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: User, label: 'Happy Clients', value: '30+' },
    { icon: MapPin, label: 'Countries Served', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23ffffff\" fill-opacity=\"0.02\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 font-mono text-sm">about.js</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-mono text-white mb-6">
              const <span className="text-green-400">developer</span> = {'{'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left column - About text */}
            <div className="space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="font-mono text-sm text-gray-400 mb-4">// Personal info</div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-gray-300">
                    <span className="text-cyan-400">name:</span> <span className="text-green-400">"justifydev"</span>,
                  </div>
                  <div className="text-gray-300">
                    <span className="text-cyan-400">role:</span> <span className="text-green-400">"Full-Stack Developer"</span>,
                  </div>
                  <div className="text-gray-300">
                    <span className="text-cyan-400">passion:</span> <span className="text-green-400">"Building digital experiences"</span>,
                  </div>
                  <div className="text-gray-300">
                    <span className="text-cyan-400">focus:</span> <span className="text-green-400">"Clean code & scalable solutions"</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="font-mono text-sm text-gray-400 mb-4">// Background</div>
                <div className="text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    I'm a passionate full-stack developer with 5+ years of experience 
                    building modern web applications. I specialize in creating scalable, 
                    user-focused solutions using cutting-edge technologies.
                  </p>
                  <p>
                    My journey spans from crafting pixel-perfect frontends to architecting 
                    robust backend systems. I believe in writing clean, maintainable code 
                    and delivering exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Stats and skills */}
            <div className="space-y-6">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-gray-800 border border-gray-700 rounded-lg p-4 text-center hover:border-green-400 transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <stat.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-mono font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Current stack */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="font-mono text-sm text-gray-400 mb-4">// Current stack</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'React', 'TypeScript', 'Next.js', 'Node.js',
                    'PostgreSQL', 'Docker', 'AWS', 'Tailwind'
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 font-mono">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Closing bracket */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-mono text-white">
              {'}'}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;