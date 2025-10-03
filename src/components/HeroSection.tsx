import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Brain, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4 text-accent" />
            <span>We Build the Future of Web + AI</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
              We Build <span className="gradient-text">Intelligent</span>
              <br />
              <span className="neon-text">Web Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
              MindMesh transforms businesses with custom web development and AI integration. From sleek websites to powerful AI tools—we deliver solutions that work.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <span className="text-primary font-semibold">✓</span>
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <span className="text-primary font-semibold">✓</span>
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <span className="text-primary font-semibold">✓</span>
                <span>4 Years Excellence</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-10 py-6 text-lg neon-border hover-glow group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-card/50 backdrop-blur-sm px-10 py-6 text-lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;