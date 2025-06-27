import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SpaceBackground from '@/components/three/SpaceBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import ScrambledText from '@/components/ScrambledText';

// Store loading state in sessionStorage to persist between page navigations
const getInitialLoadingState = () => {
  // Check if we're coming back from a subpage
  const fromSubpage = sessionStorage.getItem('visitedSubpage') === 'true';
  
  // If we're coming from a subpage, don't show loading
  // Otherwise check if we've already loaded once in this session
  if (fromSubpage) {
    return false;
  } else {
    return true; // Always show loading on direct page load or refresh
  }
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(getInitialLoadingState);
  const location = useLocation();

  useEffect(() => {
    // Mark that we're on the main page now
    sessionStorage.setItem('visitedSubpage', 'false');
    // loading will be dismissed via scramble onComplete
  }, []);

  return (
    <div className="relative">
      {isLoading ? (
        <div className="fixed inset-0 bg-space-darker flex items-center justify-center z-50">
          <div className="text-center">
            <ScrambledText
              initialText="$/Alt-F17/"
              targetText="Felix Egan"
              className="text-4xl font-bold mb-4 font-mono"
              scrambleChars={["⣀","⣤","⣶","⣿","⠿","⠛","⠉"]}
              duration={4.5}
              speed={110}
              onComplete={() => setIsLoading(false)}
            />
             <div className="w-48 h-1 bg-space-dark mx-auto rounded-full overflow-hidden">
               <div className="h-full bg-[#3b82f6] animate-pulse"></div>
             </div>
           </div>
         </div>
      ) : (
        <>
          <SpaceBackground />
          <div className="relative z-10">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
