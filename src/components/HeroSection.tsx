import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Brain, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/20 rounded-full float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent/20 rounded-full float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary/20 rounded-full float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4 text-accent" />
            <span>We Build the Future of Web + AI</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
              <span className="gradient-text">Transform</span> Your
              <br />
              Digital <span className="neon-text">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-inter">
              Custom websites, AI integrations, and cutting-edge solutions that propel your business into the future.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 text-lg neon-border hover-glow group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-card/50 backdrop-blur-sm px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Code className="w-5 h-5 text-primary" />
              <span>Custom Development</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Brain className="w-5 h-5 text-secondary" />
              <span>AI Integration</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-5 h-5 text-accent" />
              <span>Future-Ready</span>
            </div>
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