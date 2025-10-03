import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send,
  Clock,
  Globe,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@mindmesh.dev',
      link: 'mailto:hello@mindmesh.dev'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Innovation District, SF 94105',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM PST',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Let's Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Start a conversation with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input 
                  id="company" 
                  placeholder="Your Company" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Project Discussion" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  className="bg-background/50 border-border focus:border-primary min-h-32"
                />
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold neon-border hover-glow"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="group bg-card/50 border-border hover:border-secondary/50 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 mx-auto bg-gradient-secondary rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <h4 className="font-orbitron font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-accent/10 border-accent/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="font-orbitron font-semibold text-lg mb-2">
                  Quick Chat on WhatsApp
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant responses to your questions
                </p>
                <Button 
                  variant="outline" 
                  className="border-accent/50 hover:bg-accent/10"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-orbitron font-semibold text-lg mb-4 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-4">
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
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-primary/10 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-orbitron font-semibold text-lg mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to our newsletter for the latest tech insights and updates.
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="your@email.com" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                  <Button 
                    variant="outline" 
                    className="border-primary/50 hover:bg-primary/10"
                  >
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;