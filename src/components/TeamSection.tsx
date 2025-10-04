import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Github } from 'lucide-react';
import {IMAGES} from '../images/images';

const TeamSection = () => {
  const team = [
    {
      name: 'Abdullah Ibrahim',
      role: 'CEO & Co-Founder',
      expertise: 'Full-Stack Development',
      image: IMAGES.abdullah,
      bio: 'Expert in building scalable web applications with 10+ years of experience.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Omar Faiz',
      role: 'Co-Founder & CTO',
      expertise: 'Machine Learning',
      image: IMAGES.omar,
      bio: 'Specializes in integrating AI solutions into production environments.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Noman Jaffar',
      role: 'Co-Founder & Head of Data Science',
      expertise: 'Data Analytics',
      image: IMAGES.noman,
      bio: 'Transforms complex data into actionable business insights.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
   
  ];

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm mb-4">
            <span className="text-primary">👥</span>
            <span>Meet the Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            The Minds Behind <span className="gradient-text">MindMesh</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of engineers, researchers, and innovators passionate about 
            building the future of web and AI technologies.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-primary/10">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-orbitron font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <Badge variant="secondary" className="text-xs">
                    {member.expertise}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary/50 hover:bg-primary/10"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary/50 hover:bg-primary/10"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
