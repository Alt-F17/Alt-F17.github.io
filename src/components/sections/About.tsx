import { useRef, useEffect } from 'react';

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container-padding max-w-5xl mx-auto">
        <h2 className="section-title relative">
          <span className="text-[#3b82f6]">/</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div 
            ref={textRef}
            className="lg:col-span-7 opacity-0 transform translate-y-4 transition-all duration-1000 border-4 border-[#3b82f6]/20 p-6 rounded-lg bg-space-darker"
          >
            <p className="text-lg mb-6">
              I'm Felix, a software developer with a passion for creating fun, new solutions to real-world problems. 
              I love making fun projects that help people and aim to make the world more innovative, efficient, and technologically accessible to all.
            </p>
            <p className="text-lg mb-6">
              Currently studying Science, Computer Science, and Mathematics at Dawson College in Montreal, 
              I'm helping the next generation of developers through mentorship and events like DawsHacks.
            </p>
            <p className="text-lg mb-6">
              My journey in programming began in 2019, where I discovered my passion for coding through Python during the pandemic. 
              Since then, I've expanded my skills to web development, machine learning, MCP orchestration, and cybersecurity.
            </p>
            <p className="text-lg">
              When I'm not coding, I'm probably rock climbing, making music, creating content on my social media page, or riding through the city on my OneWheel. 
              I believe that tech can create a positive change in the world and I am committed to using my skills to contribute to that vision.
            </p>
          </div>
          
          <div 
            ref={imageRef}
            className="lg:col-span-5 opacity-0 transform translate-y-4 transition-all duration-1000 delay-200"
          >
            <div className="relative">
              <div className="aspect-square rounded-md bg-space-darker border-4 border-[#3b82f6]/20 p-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-[#3b82f6]/30">
                      <img src="pfp.JPEG" alt="Felix Egan" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="mt-4 text-xl font-medium">Felix Egan</h3>
                    <p className="text-space-text/70">Montreal, Canada</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-md border-4 border-[#3b82f6]"></div>
            </div>
            
            <div className="mt-8 space-y-2 border-4 border-[#3b82f6]/20 p-4 rounded-lg bg-space-darker">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#3b82f6]">age:</span>
                <span>18</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#3b82f6]">education:</span>
                <span>Dawson College</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#3b82f6]">focus:</span>
                <span>Python, Machine Learning</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#3b82f6]">hobbies:</span>
                <span>Rock Climbing, Music, Writing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
