import React, { useRef, useEffect, FormEvent } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { FaGithub, FaInstagram, FaDiscord, FaEnvelope, FaPaypal, FaCoffee } from 'react-icons/fa';

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  const socials = [
    { name: 'GitHub', username: '@Alt-F17', url: 'https://github.com/Alt-F17', icon: 'github' },
    { name: 'Instagram', username: '@felix.idk.tbh', url: 'https://instagram.com/felix.idk.tbh', icon: 'instagram' },
    { name: 'Discord', username: 'Alt_F17', url: 'https://discord.com/users/707956607123718174', icon: 'discord' },
    { name: 'Email', username: 'felix.egan@icloud.com', url: 'mailto:felix.egan@icloud.com', icon: 'email' }
  ];

  const handleSubmit = (e: FormEvent) => {
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
                        {social.icon === 'github' && <FaGithub className="w-5 h-5 text-space-accent" />}
                        {social.icon === 'instagram' && <FaInstagram className="w-5 h-5 text-space-accent" />}
                        {social.icon === 'discord' && <FaDiscord className="w-5 h-5 text-space-accent" />}
                        {social.icon === 'email' && <FaEnvelope className="w-5 h-5 text-space-accent" />}
                      </div>
                      
                      <div>
                        <h4 className="text-space-text font-medium">{social.name}</h4>
                        <p className="text-space-text/70 text-sm">{social.username}</p>
                      </div>
                      
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
                  <FaPaypal className="w-5 h-5 mr-2 text-space-accent" />
                   <span className="mr-2">PayPal:</span>
                   <span className="text-space-accent">@Felix Egan</span>
                 </a>
                <a
                   href="https://www.buymeacoffee.com/alt-f17"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center text-space-text hover:text-space-accent transition-colors"
                 >
                  <FaCoffee className="w-5 h-5 mr-2 text-space-accent" />
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
