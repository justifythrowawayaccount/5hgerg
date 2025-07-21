import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-16">
            <div className="text-gray-500 font-mono text-sm mb-2">~/contact</div>
            <h2 className="text-3xl md:text-4xl font-mono text-white mb-8">
              let's work together
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="text-gray-400 font-mono text-sm leading-relaxed">
                <p className="mb-4">
                  interested in collaborating? i'm always open to discussing 
                  new projects and opportunities.
                </p>
                <p>
                  whether you need a full application built from scratch or 
                  help scaling an existing system, let's talk.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail size={16} className="text-green-400" />
                  <span className="text-gray-400 font-mono text-sm">hello@justifydev.com</span>
                </div>
                
                <div className="flex space-x-6 pt-4">
                  <a
                    href="https://github.com/justifydev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/justifydev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-gray-800 p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="name"
                    className="w-full bg-black border border-gray-800 px-4 py-3 text-white font-mono text-sm placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email"
                    className="w-full bg-black border border-gray-800 px-4 py-3 text-white font-mono text-sm placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="message"
                    className="w-full bg-black border border-gray-800 px-4 py-3 text-white font-mono text-sm placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full border border-green-400 text-green-400 py-3 px-6 font-mono text-sm hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>send message</span>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;