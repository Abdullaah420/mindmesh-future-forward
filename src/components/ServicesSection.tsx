import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Globe, 
  Brain, 
  MessageSquare, 
  Eye, 
  Puzzle, 
  Smartphone,
  Code2,
  Cpu
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Web Development',
      description: 'Beautiful, fast, responsive websites and web applications tailored to your business needs.',
      features: ['Modern React/Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'Responsive Design'],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Transform your business with intelligent AI-powered features and automation.',
      features: ['Chatbots & NLP', 'Computer Vision', 'Predictive Analytics', 'Smart Automation'],
      gradient: 'from-secondary to-accent'
    },
    {
      icon: Cpu,
      title: 'System Integrations',
      description: 'Seamlessly connect your existing tools and build custom solutions that work together.',
      features: ['API Development', 'Third-party Integration', 'Database Solutions', 'Cloud Services'],
      gradient: 'from-accent to-primary'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span>What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three core capabilities that power modern digital success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-orbitron text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-3xl md:text-4xl font-orbitron font-bold neon-text">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;