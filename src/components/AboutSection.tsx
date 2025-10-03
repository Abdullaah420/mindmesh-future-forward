import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To bridge the gap between innovative technology and business success through custom AI-powered solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'A future where every business harnesses the power of AI and modern web technologies to achieve unprecedented growth.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, ensuring scalable and future-proof solutions for our clients.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with our clients as partners to understand their unique challenges and create tailored solutions.'
    }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'Founder & CEO',
      expertise: 'Full-Stack Development, AI Strategy',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead AI Engineer',
      expertise: 'Machine Learning, Computer Vision',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Marcus Johnson',
      role: 'Senior Frontend Developer',
      expertise: 'React, UX/UI Design',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Data Science Director',
      expertise: 'NLP, Predictive Analytics',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <Users className="w-4 h-4 text-secondary" />
            <span>About MindMesh</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Where Innovation</span> Meets Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just write code—we architect digital experiences that transform industries. 
            Backed by published research and real-world impact, we're developers who push boundaries.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-orbitron font-semibold">Built on Research, Proven by Results</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">We're not your average dev shop.</strong> Born from academic research and battle-tested in production, 
                  MindMesh bridges the gap between theoretical excellence and practical business impact. Our team has published peer-reviewed papers 
                  in leading tech journals while delivering 100+ real-world projects.
                </p>
                <p>
                  From startups to enterprises, we've engineered solutions that don't just work—they scale, evolve, and drive measurable growth. 
                  <strong className="text-foreground"> Every line of code is backed by expertise. Every project is a testament to what's possible when innovation meets execution.</strong>
                </p>
              </div>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl opacity-20 absolute inset-4 blur-xl"></div>
              <Card className="relative bg-card/50 border-border backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-orbitron font-bold neon-text mb-2">100+</div>
                      <div className="text-sm text-muted-foreground">Projects Delivered</div>
                    </div>
                    <div>
                      <div className="text-3xl font-orbitron font-bold neon-text mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-orbitron font-bold neon-text mb-2">4</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-orbitron font-bold neon-text mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-orbitron font-semibold text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group bg-card/50 border-border hover:border-secondary/50 transition-all duration-300 backdrop-blur-sm text-center p-6"
              >
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-secondary rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <h4 className="font-orbitron font-semibold text-lg mb-3 group-hover:text-secondary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-orbitron font-semibold text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="group bg-card/50 border-border hover:border-accent/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                <div className="aspect-square bg-gradient-accent opacity-20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-accent/60" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="font-orbitron font-semibold text-lg mb-1 group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;