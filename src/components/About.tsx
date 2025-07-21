import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-16">
            <div className="text-gray-500 font-mono text-sm mb-2">~/about</div>
            <h2 className="text-3xl md:text-4xl font-mono text-white mb-8">
              who i am
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="text-gray-400 font-mono text-sm leading-relaxed space-y-4">
                <p>
                  full-stack developer with 5+ years building web applications. 
                  passionate about clean architecture and user experience.
                </p>
                <p>
                  i work with modern javascript frameworks, backend apis, 
                  and cloud infrastructure to deliver scalable solutions.
                </p>
                <p>
                  when not coding, you'll find me exploring new technologies, 
                  contributing to open source, or mentoring other developers.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-green-400 font-mono text-sm mb-4">current stack</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-400 font-mono text-xs">
                  <div>react</div>
                  <div>typescript</div>
                  <div>next.js</div>
                  <div>node.js</div>
                  <div>postgresql</div>
                  <div>docker</div>
                  <div>aws</div>
                  <div>tailwind</div>
                </div>
              </div>

              <div>
                <h3 className="text-green-400 font-mono text-sm mb-4">experience</h3>
                <div className="space-y-3 text-gray-400 font-mono text-xs">
                  <div className="flex justify-between">
                    <span>senior developer</span>
                    <span>2022-present</span>
                  </div>
                  <div className="flex justify-between">
                    <span>full-stack developer</span>
                    <span>2020-2022</span>
                  </div>
                  <div className="flex justify-between">
                    <span>frontend developer</span>
                    <span>2019-2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;