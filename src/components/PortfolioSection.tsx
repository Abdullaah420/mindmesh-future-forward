import React, { useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Eye } from 'lucide-react';
import {IMAGES} from '../images/images';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Guide Connect',
      category: 'Travel Platform',
      description: 'All-in-one travel assistant for booking flights, hotels, car rentals and creating personalized itineraries with smart recommendations.',
      image: IMAGES.guideConnection,
      tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Machine Learning', 'Recommendation AI', 'GenAI', 'Data Science'],
      problem: 'Travelers waste time switching between multiple booking sites and dealing with inconsistent trip data.',
      solution: 'Unified travel platform that aggregates bookings, manages itineraries, offers ML-powered personalized recommendations, and handles payments and rentals in one place.',
      results: 'Reduced booking time by ~60%, increased conversion by 30%, and onboarded thousands of active users.',
      url: 'https://example.com/guide-connect'
    },
    {
      title: 'Fizzi',
      category: 'Consumer Web App',
      description: 'A playful, responsive soda & beverage web app for discovering flavors, customizing bottles and placing local delivery or subscription orders.',
      image: IMAGES.fizzi,
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      problem: 'No modern, engaging web experience exists for discovering craft sodas and managing recurring beverage orders.',
      solution: 'Interactive storefront with product discovery, user reviews, subscriptions, easy checkout and admin dashboard for managing inventory & promos.',
      results: 'Increased repeat orders by 45% and average order value by 20% for pilot stores.',
      url: 'https://example.com/fizzi'
    },
    {
      title: 'Lilly',
      category: 'Healthcare AI',
      description: 'AI-driven drug information assistant for clinical staff: enter a drug name and receive an authoritative, well-formatted report with citations and PDF export.',
      image: IMAGES.lilly,
      tags: ['Python', 'FastAPI', 'MongoDB', 'OpenAI', 'Pandas', 'AWS', 'NLP', 'GenAI', 'Data Science'],
      problem: 'Clinical staff spend too much time searching scattered sources for reliable drug monographs and up-to-date safety data.',
      solution: 'Automated aggregation and structured summarization from credible medical sources, with citation links, structured UI and one-click PDF export for staff use.',
      results: 'Reduced research time per query by ~80% and improved medication information accuracy in pilot clinics.',
      url: 'https://example.com/lilly'
    },
    {
      title: 'AEZEN',
      category: 'AI CRM & Support',
      description: 'AI-powered CRM with chatbot, ticketing, voice/AI calls, workflows and omnichannel integrations — trainable assistant that grows from intern to pro.',
      image: IMAGES.aezen,
      tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Rasa', 'Redis', 'Conversational AI', 'NLP', 'GenAI'],
      problem: 'Brands struggle to scale consistent, fast customer support across many channels while keeping costs down.',
      solution: 'All-in-one support platform combining intelligent chatbots, ticketing, automation workflows, social integrations, and training pipelines for the assistant.',
      results: 'Cut first-response times by ~70%, reduced support costs by 50%, and increased customer satisfaction in deployed pilots.',
      url: 'https://example.com/aezen'
    },
    {
      title: 'SmartFactory',
      category: 'IoT Integration',
      description: 'Industrial IoT platform connecting manufacturing equipment with predictive maintenance AI.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'IoT', 'Predictive ML', 'Azure'],
      problem: 'Manufacturing downtime costs due to unexpected equipment failures',
      solution: 'IoT sensors with AI-powered predictive maintenance alerts',
      results: '70% reduction in unplanned downtime, $2M+ cost savings',
      url: ''
    },
    {
      title: 'EduMentor AI',
      category: 'Education Platform',
      description: 'Personalized learning platform with AI tutoring and adaptive curriculum recommendations.',
      image: '/api/placeholder/600/400',
      tags: ['React Native', 'NLP', 'Recommendation AI', 'Firebase'],
      problem: 'Students need personalized learning experiences at scale',
      solution: 'AI-powered adaptive learning with personalized tutoring',
      results: '85% improvement in learning outcomes, 50,000+ students',
      url: ''
    }
  ];

  // Only opens URL if it's a real non-example http(s) URL.
  const handleCardClick = useCallback((url?: string) => {
    if (!url) return;
    // treat example.com as dummy placeholder that should NOT open
    const valid = /^https?:\/\/(?!example\.com)(.+)/i.test(url);
    if (valid) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // placeholder/dummy URL — do nothing
    }
  }, []);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="text-center px-6 py-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">100+</div>
            <div className="text-sm md:text-base text-muted-foreground mt-1">Projects Completed</div>
          </div>
          <div className="text-center px-6 py-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">50+</div>
            <div className="text-sm md:text-base text-muted-foreground mt-1">Happy Clients</div>
          </div>
          <div className="text-center px-6 py-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">24/7</div>
            <div className="text-sm md:text-base text-muted-foreground mt-1">Support Available</div>
          </div>
          <div className="text-center px-6 py-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">98%</div>
            <div className="text-sm md:text-base text-muted-foreground mt-1">Client Satisfaction</div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <Eye className="w-4 h-4 text-accent" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Client Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects. Real impact. Real results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(project.url)}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(project.url); }}
              role="button"
            >
              {/* Project Image - updated to show images cleanly, responsive and professional */}
              <div className="relative overflow-hidden">
                {/* Responsive height ensures consistent appearance on different screens */}
                <div className="w-full h-44 sm:h-56 md:h-64 lg:h-72 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/api/placeholder/600/400'; }}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* subtle overlay for readable text/badge without dimming the image */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-white/40 opacity-90"></div>

                  {/* decorative code icon (keeps original intent, but subtle) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Code className="w-16 h-16 text-primary/60 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-card/80 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="font-orbitron text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-border bg-background/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="space-y-3 mb-6 text-sm">
                  <div>
                    <span className="text-primary font-medium">Problem:</span>
                    <span className="text-muted-foreground ml-2">{project.problem}</span>
                  </div>
                  <div>
                    <span className="text-secondary font-medium">Solution:</span>
                    <span className="text-muted-foreground ml-2">{project.solution}</span>
                  </div>
                  <div>
                    <span className="text-accent font-medium">Results:</span>
                    <span className="text-muted-foreground ml-2">{project.results}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    onClick={(e) => { e.stopPropagation(); handleCardClick(project.url); }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-secondary/50 hover:bg-secondary/10"
                    onClick={(e) => { e.stopPropagation(); /* placeholder - add case study URL later */ }}
                  >
                    Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your own success story?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 neon-border hover-glow"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
