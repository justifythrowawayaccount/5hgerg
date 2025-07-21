import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'e-commerce platform',
      description: 'full-stack marketplace with payment processing, inventory management, and admin dashboard',
      tech: ['react', 'node.js', 'postgresql', 'stripe'],
      github: '#',
      live: '#',
    },
    {
      title: 'task management system',
      description: 'collaborative workspace with real-time updates, file sharing, and team analytics',
      tech: ['next.js', 'typescript', 'prisma', 'websockets'],
      github: '#',
      live: '#',
    },
    {
      title: 'analytics dashboard',
      description: 'data visualization platform with custom charts, reporting, and export functionality',
      tech: ['vue.js', 'python', 'fastapi', 'd3.js'],
      github: '#',
      live: '#',
    },
    {
      title: 'api gateway service',
      description: 'microservices orchestration with authentication, rate limiting, and monitoring',
      tech: ['node.js', 'redis', 'docker', 'kubernetes'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="work" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-16">
            <div className="text-gray-500 font-mono text-sm mb-2">~/work</div>
            <h2 className="text-3xl md:text-4xl font-mono text-white mb-8">
              selected projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white font-mono text-lg">{project.title}</h3>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-green-400 font-mono text-xs border border-green-400 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;