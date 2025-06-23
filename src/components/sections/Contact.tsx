import { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Coffee } from 'lucide-react';

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
      <div className="container-padding max-w-5xl mx-auto">
        <h2 className="section-title">
          <span className="text-space-accent">/</span> Contact
        </h2>
        <p className="section-subtitle">Let's get in touch</p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
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
            className="opacity-0 transform translate-y-4 transition-all duration-1000 delay-200 md:col-span-2 w-full"
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
                        {social.icon === 'github' && (
                          <svg className="w-5 h-5 text-space-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        )}
                        {social.icon === 'instagram' && (
                          <>
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </>
                        )}
                        {social.icon === 'discord' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-space-accent"
                            viewBox="0 0 71 55"
                          >
                            <path d="M60.104 4.552a58.992 58.992 0 0 0-14.885-4.745.264.264 0 0 0-.279.131c-.645 1.119-1.364 2.578-1.872 3.752-6.25-.942-12.479-.942-18.591 0-.508-1.174-1.227-2.633-1.872-3.752a.276.276 0 0 0-.279-.131A58.88 58.88 0 0 0 10.896 4.55a.249.249 0 0 0-.132.093C2.095 18.619-.635 32.29.204 45.797a.286.286 0 0 0 .09.198A59.718 59.718 0 0 0 23.24 51.19c.257-.354.485-.727.684-1.121a41.7 41.7 0 0 1-6.18-3 41.47 41.47 0 0 0 3.973-1.884c7.382 3.422 15.31 3.422 22.68 0a41.327 41.327 0 0 0 3.975 1.884 41.7 41.7 0 0 1-6.18 3c.2.394.429.767.684 1.121a59.716 59.716 0 0 0 22.18-5.195.286.286 0 0 0 .09-.198c.84-13.5-1.89-27.172-10.764-41.152a.249.249 0 0 0-.132-.093zM23.725 37.005c-3.847 0-6.993-3.515-6.993-7.841 0-4.326 3.111-7.841 6.993-7.841 3.888 0 7.028 3.515 6.993 7.841 0 4.326-3.111 7.841-6.993 7.841zm23.603 0c-3.847 0-6.993-3.515-6.993-7.841 0-4.326 3.111-7.841 6.993-7.841 3.888 0 7.028 3.515 6.993 7.841 0 4.326-3.105 7.841-6.993 7.841z"/>
                          </svg>
                        )}
                        {social.icon === 'email' && <Mail className="w-5 h-5 text-space-accent" />}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2 text-space-accent"
                  >
                    <path d="M22 6.41c-.26 1.36-1.14 2.47-2.36 3.06-.22.08-.43.13-.64.15l.78 7.6c.02.21.03.42.03.63 0 2.3-1.88 4.17-4.18 4.17h-2.3c-1.12 0-2.13-.75-2.37-1.84l-.07-.34-1.78-15.64c-.02-.2-.03-.41-.03-.61 0-2.3 1.88-4.17 4.18-4.17h3.84c2.01 0 3.7 1.48 4.07 3.45l.14.66c.11.43.16.88.16 1.32 0 .46-.04.92-.12 1.36zM14.07 16.8c.18 1.2 1.21 2.06 2.42 2.06h2.3c.41 0 .75-.33.75-.74s-.34-.74-.75-.74h-2.29c-.71 0-1.23-.5-1.33-1.23l-.01-.07-.37-3.61c-.06-.66-.64-1.15-1.31-1.15h-1.28l-1.3 11.42h-2.56l1.3-11.42h3.02l1.49 12.53h2.56l1.3-11.42h-1.73c-.32 0-.6.21-.66.53l-.01.07z" />
                  </svg>
                   <span className="mr-2">PayPal:</span>
                   <span className="text-space-accent">@Felix Egan</span>
                </a>
                <a
                  href="https://www.buymeacoffee.com/alt-f17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-space-text hover:text-space-accent transition-colors"
                >
                  <Coffee className="w-5 h-5 mr-2 text-space-accent" />
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
