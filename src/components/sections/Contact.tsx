import { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  const socials = [
    { name: 'GitHub', username: '@Alt-F17', url: 'https://github.com/Alt-F17', icon: 'github' },
    { name: 'Instagram', username: '@felix.idk.tbh', url: 'https://instagram.com/felix.idk.tbh', icon: 'instagram' },
    { name: 'Discord', username: 'Alt-F17', url: 'https://discord.com/users/707956607123718174', icon: 'discord' },
    { name: 'Email', username: 'felix.egan@icloud.com', url: 'mailto:felix.egan@icloud.com', icon: 'email' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    if (socialRef.current) observer.observe(socialRef.current);
    if (supportRef.current) observer.observe(supportRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (socialRef.current) observer.unobserve(socialRef.current);
      if (supportRef.current) observer.unobserve(supportRef.current);
    };
  }, []);

  return (
    <section id="contact" className="section pb-24">
      <div className="container-padding max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="text-space-accent">/</span> Contact
        </h2>
        <p className="section-subtitle">Let's get in touch</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-5xl mx-auto">
          <div 
            ref={contactRef}
            className="opacity-0 transform translate-y-4 transition-all duration-1000 md:col-span-3 w-full"
          >
            <Card className="bg-space-darker border-[#3b82f6]/20 border-4 w-full h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-6">Send me a message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-space-dark border-space-accent/30 focus:border-space-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-space-dark border-space-accent/30 focus:border-space-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="I'd like to talk about..."
                      required
                      className="min-h-[150px] bg-space-dark border-space-accent/30 focus:border-space-accent"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-space-accent hover:bg-space-accent/80 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div 
            ref={socialRef}
            className="opacity-0 transform translate-y-4 transition-all duration-1000 delay-200 md:col-span-1 w-full"
          >
            <Card className="bg-space-darker border-[#3b82f6]/20 border-4 h-full w-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-6">Connect with me</h3>
                
                <div className="space-y-6">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 border-4 border-space-accent/20 rounded-md hover:bg-space-accent/10 transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-full bg-space-accent/20 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-space-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {social.icon === 'github' && (
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          )}
                          {social.icon === 'instagram' && (
                            <>
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </>
                          )}
                          {social.icon === 'discord' && (
                            <path d="M18 9a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5h0l2-2h-2a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3c0 .5-.17 1-.45 1.36M7.5 14A1.5 1.5 0 0 1 6 12.5A1.5 1.5 0 0 1 7.5 11A1.5 1.5 0 0 1 9 12.5A1.5 1.5 0 0 1 7.5 14m3-4A1.5 1.5 0 0 1 9 8.5A1.5 1.5 0 0 1 10.5 7A1.5 1.5 0 0 1 12 8.5A1.5 1.5 0 0 1 10.5 10m6 8c2.67 0 8-1.33 8-4V9a7 7 0 0 0-7-7H11a7 7 0 0 0-7 7v7c0 2.67 5.33 4 8 4z"></path>
                          )}
                          {social.icon === 'mail' && (
                            <>
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </>
                          )}
                        </svg>
                      </div>
                      
                      <div>
                        <h4 className="text-space-text font-medium">{social.name}</h4>
                        <p className="text-space-text/70 text-sm">{social.username}</p>
                      </div>
                      
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-space-accent ml-auto" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14m-7-7 7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support My Work Section */}
        <div 
          ref={supportRef}
          className="opacity-0 transform translate-y-4 transition-all duration-1000 delay-400 mt-6 max-w-5xl mx-auto"
        >
          <Card className="bg-space-darker border-[#3b82f6]/20 border-4 w-full">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Support My Work</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <a 
                  href="https://paypal.me/altf17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-space-text hover:text-space-accent transition-colors"
                >
                  <span className="mr-2">PayPal:</span>
                  <span className="text-space-accent">@Felix Egan</span>
                </a>
                <a 
                  href="https://www.buymeacoffee.com/alt-f17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-space-text hover:text-space-accent transition-colors"
                >
                  <span className="mr-2">Buy Me A Coffee:</span>
                  <span className="text-space-accent">@alt-f17</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
