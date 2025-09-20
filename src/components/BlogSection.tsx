import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Web Development: Trends to Watch in 2024',
      excerpt: 'Explore how artificial intelligence is revolutionizing web development, from automated coding to intelligent user experiences.',
      category: 'AI & Development',
      author: 'Alex Rodriguez',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      title: 'Building Scalable Microservices with Node.js and Docker',
      excerpt: 'Learn best practices for creating robust, scalable microservices architecture using modern containerization techniques.',
      category: 'Backend Development',
      author: 'Sarah Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Computer Vision Applications in Real-World Business Solutions',
      excerpt: 'Discover practical applications of computer vision technology and how it\'s transforming industries from retail to healthcare.',
      category: 'Computer Vision',
      author: 'Dr. Emily Watson',
      date: '2024-01-10',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Optimizing React Applications for Maximum Performance',
      excerpt: 'Advanced techniques for improving React app performance, including code splitting, lazy loading, and state optimization.',
      category: 'Frontend Development',
      author: 'Marcus Johnson',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Natural Language Processing: From Chatbots to Content Analysis',
      excerpt: 'Understanding NLP applications in modern business, from customer service automation to advanced text analytics.',
      category: 'NLP & AI',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      readTime: '9 min read',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Securing Modern Web Applications: A Comprehensive Guide',
      excerpt: 'Essential security practices for protecting web applications against modern threats and vulnerabilities.',
      category: 'Security',
      author: 'Alex Rodriguez',
      date: '2024-01-03',
      readTime: '11 min read',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Development', 'Backend Development', 'Frontend Development', 'Computer Vision', 'NLP & AI', 'Security'];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <BookOpen className="w-4 h-4 text-secondary" />
            <span>Insights & Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Tech</span> Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with our latest insights on technology trends, development best practices, and industry innovations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className={`border-border hover:border-primary/50 hover:bg-primary/10 ${
                category === 'All' ? 'bg-primary/20 border-primary/50' : ''
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.title} className="mb-12 bg-card/50 border-border backdrop-blur-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto bg-gradient-primary opacity-20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/60" />
                </div>
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
                >
                  Featured
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 border-primary/50 text-primary">
                  {post.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-fit border-primary/50 hover:bg-primary/10 group"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card 
              key={post.title} 
              className="group bg-card/50 border-border hover:border-secondary/50 transition-all duration-300 hover-glow backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Image */}
              <div className="aspect-video bg-gradient-secondary opacity-20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-secondary/60" />
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="font-orbitron text-lg leading-tight group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-secondary/50 hover:bg-secondary/10 group"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to stay updated with our latest insights?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8 py-4 neon-border hover-glow"
            >
              Subscribe to Newsletter
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-card/50 backdrop-blur-sm px-8 py-4"
            >
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;