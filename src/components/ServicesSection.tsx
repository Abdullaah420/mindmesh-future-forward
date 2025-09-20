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
      title: 'Custom Websites & Web Apps',
      description: 'Responsive, fast, and scalable web solutions built with modern technologies.',
      features: ['React/Next.js', 'E-commerce', 'Progressive Web Apps', 'Custom CMS'],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI and machine learning algorithms.',
      features: ['Predictive Analytics', 'Recommendation Systems', 'Data Processing', 'Model Training'],
      gradient: 'from-secondary to-accent'
    },
    {
      icon: MessageSquare,
      title: 'Chatbots & NLP',
      description: 'Conversational AI and natural language processing for enhanced user experiences.',
      features: ['Custom Chatbots', 'Voice Assistants', 'Text Analysis', 'Language Translation'],
      gradient: 'from-accent to-primary'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for various industries.',
      features: ['Object Detection', 'Facial Recognition', 'OCR Solutions', 'Quality Control'],
      gradient: 'from-primary to-accent'
    },
    {
      icon: Puzzle,
      title: 'System Integrations',
      description: 'Seamless integration of existing systems and third-party services.',
      features: ['API Development', 'Database Migration', 'Legacy Modernization', 'Cloud Services'],
      gradient: 'from-secondary to-primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile applications with native performance.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'PWA Development'],
      gradient: 'from-accent to-secondary'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Comprehensive</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver cutting-edge technology solutions that drive business growth.
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