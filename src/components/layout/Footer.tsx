
import { Link } from 'react-scroll';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-space-darker py-8 border-4 border-space-accent/20">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer">
              <h2 className="text-xl font-bold text-white mb-4">
                Felix Egan
              </h2>
            </Link>
            <p className="text-space-text/70">
              Python Developer & ML Enthusiast based in Montreal, creating innovative solutions to real-world problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-space-text/70 hover:text-space-accent transition-colors cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-space-text/70 hover:text-space-accent transition-colors cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-space-text/70 hover:text-space-accent transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-space-text/70 hover:text-space-accent transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Alt-F17"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-space-darker border-4 border-space-accent/30 flex items-center justify-center text-space-accent hover:bg-space-accent hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/felix.idk.tbh"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-space-darker border-4 border-space-accent/30 flex items-center justify-center text-space-accent hover:bg-space-accent hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              <a 
                href="https://discord.com/users/707956607123718174"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-space-darker border-4 border-space-accent/30 flex items-center justify-center text-space-accent hover:bg-space-accent hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 9a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5h0l2-2h-2a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3c0 .5-.17 1-.45 1.36M7.5 14A1.5 1.5 0 0 1 6 12.5A1.5 1.5 0 0 1 7.5 11A1.5 1.5 0 0 1 9 12.5A1.5 1.5 0 0 1 7.5 14m3-4A1.5 1.5 0 0 1 9 8.5A1.5 1.5 0 0 1 10.5 7A1.5 1.5 0 0 1 12 8.5A1.5 1.5 0 0 1 10.5 10m6 8c2.67 0 8-1.33 8-4V9a7 7 0 0 0-7-7H11a7 7 0 0 0-7 7v7c0 2.67 5.33 4 8 4z"></path>
                </svg>
              </a>
              
              <a 
                href="mailto:felix.egan@icloud.com"
                className="w-10 h-10 rounded-full bg-space-darker border-4 border-space-accent/30 flex items-center justify-center text-space-accent hover:bg-space-accent hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 text-center text-space-text/60">
          <p>© {currentYear} Felix Egan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
