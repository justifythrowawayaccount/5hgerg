import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Globe, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with payment processing, inventory management, and admin dashboard. Built with modern technologies for scalability.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'fullstack',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Globe,
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative workspace with real-time updates, file sharing, and team analytics. Features drag-and-drop interface and notifications.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets'],
      category: 'frontend',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code,
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with custom charts, reporting, and export functionality. Handles large datasets with optimized performance.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'D3.js'],
      category: 'fullstack',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Database,
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      category: 'mobile',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Smartphone,
    },
    {
      id: 5,
      title: 'API Gateway Service',
      description: 'Microservices orchestration with authentication, rate limiting, and monitoring. Deployed using containerization and Kubernetes.',
      tech: ['Node.js', 'Redis', 'Docker', 'Kubernetes'],
      category: 'backend',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Database,
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Multi-platform social media management tool with scheduling, analytics, and engagement tracking across various platforms.',
      tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
      category: 'frontend',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Globe,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 font-mono text-sm">projects.json</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-mono text-white mb-6">
              Featured <span className="text-cyan-400">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, 
              from concept to deployment.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <project.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-mono text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-cyan-400 font-mono text-xs rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-mono text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;