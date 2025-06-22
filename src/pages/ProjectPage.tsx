import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SpaceBackground from '@/components/three/SpaceBackground';
import { Button } from '@/components/ui/button';

// This is just a placeholder for future project detail pages
const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    // Set flag that we've visited a subpage
    sessionStorage.setItem('visitedSubpage', 'true');
  }, []);

  return (
    <div className="relative">
      <SpaceBackground />
      <div className="relative z-10">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="bg-space-darker bg-opacity-70 backdrop-blur-md rounded-lg p-8 border-4 border-[#3b82f6]/20">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Project: {projectId}</h1>
              <p className="mb-8 text-space-text/70">
                This is a placeholder for the {projectId} project page. In a real implementation, this would display specific project details.
              </p>
              
              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Project Details</h2>
                <p className="mb-4">
                  This page would contain detailed information about the project, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-space-text/80 ml-4">
                  <li>Project overview and purpose</li>
                  <li>Technologies used</li>
                  <li>Challenges and solutions</li>
                  <li>Screenshots or demos</li>
                  <li>Implementation details</li>
                </ul>
              </div>
              
              <Button 
                className="bg-[#3b82f6] hover:bg-[#3b82f6]/80 text-white"
                onClick={() => window.history.back()}
              >
                Back to Portfolio
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
