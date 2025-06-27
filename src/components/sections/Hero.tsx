import { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="section h-screen flex items-center relative">
      <div className="container-padding max-w-5xl mx-auto">
        <div 
          ref={textRef} 
          className="opacity-0 transform translate-y-4 transition-all duration-1000 border-4 border-[#3b82f6]/20 p-8 rounded-lg bg-space-darker/50 backdrop-blur-sm"
        >
          <p className="text-[#3b82f6] mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Felix Egan
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-space-text/80">
            Python Developer & ML Enthusiast
          </h2>
          <p className="max-w-2xl text-lg mb-8 text-space-text/70">
            I'm an 18-year-old developer passionate about creating innovative solutions to real-world problems. 
            Currently studying Science, Computer Science, and Mathematics at Dawson College in Montreal and working on various projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-[#3b82f6] hover:bg-[#3b82f6]/80 text-white"
              size="lg"
            >
              <Link to="projects" spy={true} smooth={true} duration={800} offset={-100}>
                View My Projects
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white"
              size="lg"
            >
              <Link to="contact" spy={true} smooth={true} duration={800} offset={-100}>
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" spy={true} smooth={true} duration={800} offset={-100} className="cursor-pointer">
          <ArrowDown className="h-6 w-6 text-[#3b82f6]" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
