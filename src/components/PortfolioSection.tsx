import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'EcoTrack AI',
      category: 'AI/ML Platform',
      description: 'Advanced sustainability tracking platform with AI-powered insights for carbon footprint optimization.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      problem: 'Companies struggle to track and optimize their environmental impact',
      solution: 'AI-powered analytics platform with real-time monitoring and actionable insights',
      results: '40% reduction in client carbon footprints, 500+ companies onboarded'
    },
    {
      title: 'MedChat Pro',
      category: 'Healthcare Chatbot',
      description: 'HIPAA-compliant medical chatbot with NLP for patient triage and appointment scheduling.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'NLP', 'Node.js', 'MongoDB'],
      problem: 'Healthcare providers overwhelmed with routine patient inquiries',
      solution: 'Intelligent chatbot for 24/7 patient support and automated triage',
      results: '80% reduction in call volume, 95% patient satisfaction rate'
    },
    {
      title: 'RetailVision',
      category: 'Computer Vision',
      description: 'Smart retail analytics using computer vision for inventory management and customer behavior analysis.',
      image: '/api/placeholder/600/400',
      tags: ['Python', 'OpenCV', 'React', 'PostgreSQL'],
      problem: 'Retailers lack real-time insights into inventory and customer patterns',
      solution: 'CV-powered analytics for automated inventory and behavior tracking',
      results: '60% inventory accuracy improvement, 25% sales increase'
    },
    {
      title: 'FinanceFlow',
      category: 'Web Application',
      description: 'Comprehensive financial management platform with AI-driven investment recommendations.',
      image: '/api/placeholder/600/400',
      tags: ['Vue.js', 'Python', 'Machine Learning', 'Stripe'],
      problem: 'Small businesses need accessible financial planning tools',
      solution: 'All-in-one financial platform with AI investment guidance',
      results: '10,000+ users, $50M+ in managed investments'
    },
    {
      title: 'SmartFactory',
      category: 'IoT Integration',
      description: 'Industrial IoT platform connecting manufacturing equipment with predictive maintenance AI.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'IoT', 'Predictive ML', 'Azure'],
      problem: 'Manufacturing downtime costs due to unexpected equipment failures',
      solution: 'IoT sensors with AI-powered predictive maintenance alerts',
      results: '70% reduction in unplanned downtime, $2M+ cost savings'
    },
    {
      title: 'EduMentor AI',
      category: 'Education Platform',
      description: 'Personalized learning platform with AI tutoring and adaptive curriculum recommendations.',
      image: '/api/placeholder/600/400',
      tags: ['React Native', 'NLP', 'Recommendation AI', 'Firebase'],
      problem: 'Students need personalized learning experiences at scale',
      solution: 'AI-powered adaptive learning with personalized tutoring',
      results: '85% improvement in learning outcomes, 50,000+ students'
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <Eye className="w-4 h-4 text-accent" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Success</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative projects that have transformed businesses across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-glow backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-primary opacity-20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-primary/60" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-card/80 text-foreground">
                    {project.category}
                  </Badge>
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
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-secondary/50 hover:bg-secondary/10"
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