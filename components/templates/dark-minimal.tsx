'use client';

import { Github, Linkedin, Twitter, ExternalLink, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  techStack: string;
  resumeUrl?: string;
  projects: Array<{
    title: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
  }>;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

interface DarkMinimalTemplateProps {
  data: PortfolioData;
}

export function DarkMinimalTemplate({ data }: DarkMinimalTemplateProps) {
  const techArray = data.techStack.split(',').map(tech => tech.trim());

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
            {data.title}
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            {data.bio}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {data.socials.github && (
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </a>
            )}
            {data.socials.linkedin && (
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
            )}
            {data.socials.twitter && (
              <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800">
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </Button>
              </a>
            )}
            {data.resumeUrl && (
              <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
                  <FileText className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techArray.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-700 text-white text-sm px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-600">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-600">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Lets Work Together</h2>
          <p className="text-xl text-slate-400 mb-12">
            Ready to bring your ideas to life? Lets connect and create something amazing.
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
}