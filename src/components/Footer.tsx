import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MindMeshLogo from './MindMeshLogo';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Globe,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        'Web Development',
        'AI Integration',
        'Mobile Apps',
        'System Integration',
        'Consulting'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'Contact',
        'Blog'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Case Studies',
        'Documentation',
        'Support',
        'Privacy Policy',
        'Terms of Service'
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="relative bg-card/30 border-t border-border backdrop-blur-sm">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-full neon-border"
      >
        <ArrowUp className="w-4 h-4" />
      </Button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <MindMeshLogo size="md" />
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses through innovative web development and AI solutions. 
              Building the future, one project at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@mindmesh.dev</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="border-border hover:border-primary/50 hover:bg-primary/10"
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-orbitron font-semibold text-lg mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="font-orbitron font-semibold text-2xl mb-4">
              Stay <span className="gradient-text">Connected</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for the latest updates, insights, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/50 border-border focus:border-primary"
              />
              <Button 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground neon-border"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 MindMesh. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by the MindMesh team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-secondary/5 rounded-full blur-xl"></div>
      </div>
    </footer>
  );
};

export default Footer;