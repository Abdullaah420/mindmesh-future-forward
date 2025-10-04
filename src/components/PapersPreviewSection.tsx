import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PapersPreviewSection = () => {
  const navigate = useNavigate();
  
  const featuredPapers = [
    {
      title: 'Optimizing Neural Networks for Real-Time Web Applications',
      authors: 'Rodriguez, A., Chen, S., Watson, E.',
      year: '2024',
      category: 'Machine Learning',
      citations: 45
    },
    {
      title: 'A Framework for Scalable AI Integration in Enterprise Systems',
      authors: 'Chen, S., Rodriguez, A.',
      year: '2023',
      category: 'AI Systems',
      citations: 78
    },
    {
      title: 'Predictive Analytics for E-Commerce: A Case Study',
      authors: 'Watson, E., Johnson, M.',
      year: '2023',
      category: 'Data Science',
      citations: 112
    }
  ];

  return (
    <section id="research" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span>Published Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Research & <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to innovation is backed by peer-reviewed research and contributions 
            to the advancement of web development and AI technologies.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredPapers.map((paper, index) => (
            <Card 
              key={index}
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
            >
              <CardHeader>
                <Badge variant="secondary" className="mb-3 w-fit">
                  {paper.category}
                </Badge>
                <h3 className="text-lg font-orbitron font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {paper.title}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="line-clamp-1">{paper.authors}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{paper.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{paper.citations} citations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/publications')}
            className="border-primary/50 hover:bg-primary/10 group"
          >
            View All Publications
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PapersPreviewSection;
