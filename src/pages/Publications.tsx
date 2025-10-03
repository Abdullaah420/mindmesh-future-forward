import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ExternalLink, Calendar, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Publications = () => {
  const publications = [
    {
      title: 'Optimizing Neural Networks for Real-Time Web Applications',
      authors: 'Rodriguez, A., Chen, S., Watson, E.',
      journal: 'Journal of Web Intelligence and Applications',
      year: '2024',
      category: 'Machine Learning',
      abstract: 'This paper explores novel approaches to deploying efficient neural network models in production web environments, achieving 40% faster inference times while maintaining accuracy.',
      link: '#',
      citations: 45
    },
    {
      title: 'A Framework for Scalable AI Integration in Enterprise Systems',
      authors: 'Chen, S., Rodriguez, A.',
      journal: 'International Conference on Software Engineering (ICSE)',
      year: '2023',
      category: 'AI Systems',
      abstract: 'We present a comprehensive framework for integrating AI capabilities into existing enterprise architectures with minimal disruption and maximum scalability.',
      link: '#',
      citations: 78
    },
    {
      title: 'Predictive Analytics for E-Commerce: A Case Study',
      authors: 'Watson, E., Johnson, M.',
      journal: 'ACM Transactions on Intelligent Systems',
      year: '2023',
      category: 'Data Science',
      abstract: 'Analysis of machine learning techniques for customer behavior prediction in e-commerce platforms, demonstrating 65% improvement in conversion rates.',
      link: '#',
      citations: 112
    },
    {
      title: 'Micro-Frontend Architecture Patterns for Modern Web Applications',
      authors: 'Johnson, M., Rodriguez, A.',
      journal: 'IEEE Software',
      year: '2022',
      category: 'Software Architecture',
      abstract: 'Comprehensive study of micro-frontend patterns and their impact on development velocity, maintainability, and system performance in large-scale applications.',
      link: '#',
      citations: 89
    },
    {
      title: 'Natural Language Processing for Business Intelligence Dashboards',
      authors: 'Watson, E., Chen, S.',
      journal: 'Conference on Natural Language Processing',
      year: '2022',
      category: 'NLP',
      abstract: 'Novel approach to enabling natural language queries in business intelligence tools, reducing time-to-insight by 70% for non-technical users.',
      link: '#',
      citations: 134
    },
    {
      title: 'Security Patterns in AI-Powered Web Applications',
      authors: 'Rodriguez, A., Johnson, M., Chen, S.',
      journal: 'Journal of Cybersecurity',
      year: '2021',
      category: 'Security',
      abstract: 'Identification and mitigation strategies for security vulnerabilities unique to AI-integrated web applications, with practical implementation guidelines.',
      link: '#',
      citations: 67
    }
  ];

  const categories = ['All', 'Machine Learning', 'AI Systems', 'Data Science', 'Software Architecture', 'NLP', 'Security'];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Research & Publications</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Published</span> Research
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team contributes to the advancement of technology through peer-reviewed research, 
              sharing insights from real-world implementations and innovative solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-text mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-text mb-2">525+</div>
                <div className="text-sm text-muted-foreground">Citations</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-text mb-2">4</div>
                <div className="text-sm text-muted-foreground">Research Areas</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-text mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Latest Paper</div>
              </CardContent>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary/20 transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Publications Grid */}
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card 
                key={index}
                className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3">
                        {pub.category}
                      </Badge>
                      <h3 className="text-xl md:text-2xl font-orbitron font-semibold mb-3 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{pub.authors}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{pub.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{pub.citations} citations</span>
                        </div>
                      </div>
                      <p className="text-sm italic text-muted-foreground mb-2">
                        {pub.journal}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10 shrink-0"
                    >
                      View Paper
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-primary/10 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-12">
                <h3 className="text-3xl font-orbitron font-bold mb-4">
                  Collaborate with Us
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Interested in research collaboration or consulting on your technical challenges? 
                  We're always open to working with innovative teams and organizations.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-10 py-6 neon-border"
                >
                  Contact Research Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Publications;