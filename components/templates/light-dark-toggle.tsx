'use client';

import { useState } from 'react';
import { Github, Linkedin, Twitter, ExternalLink, Mail, FileText, Sun, Moon } from 'lucide-react';
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

interface LightDarkToggleTemplateProps {
  data: PortfolioData;
}

export function LightDarkToggleTemplate({ data }: LightDarkToggleTemplateProps) {
  const [isDark, setIsDark] = useState(false);
  const techArray = data.techStack.split(',').map(tech => tech.trim());

  const toggleTheme = () => setIsDark(!isDark);

  const themeClasses = isDark
    ? 'bg-slate-900 text-white'
    : 'bg-white text-slate-900';

  const cardClasses = isDark
    ? 'bg-slate-800 border-slate-700'
    : 'bg-white border-slate-200';

  const sectionClasses = isDark
    ? 'bg-slate-800/50'
    : 'bg-slate-100/50';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="sm"
          className={isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {data.name}
          </h1>
          <p className={`text-xl md:text-2xl mb-8 font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {data.title}
          </p>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed mb-12 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {data.bio}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {data.socials.github && (
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className={isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}>
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </a>
            )}
            {data.socials.linkedin && (
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className={isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}>
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
            )}
            {data.socials.twitter && (
              <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className={isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}>
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </Button>
              </a>
            )}
            {data.resumeUrl && (
              <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className={isDark ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}>
                  <FileText className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={`px-6 py-16 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techArray.map((tech, index) => (
              <Badge key={index} variant="secondary" className={`text-sm px-4 py-2 ${isDark ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-800'}`}>
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
              <Card key={index} className={`${cardClasses} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className={isDark ? 'text-white' : 'text-slate-900'}>{project.title}</CardTitle>
                  <CardDescription className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className={isDark ? 'border-slate-600 hover:bg-slate-600' : 'border-slate-300 hover:bg-slate-100'}>
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className={isDark ? 'border-slate-600 hover:bg-slate-600' : 'border-slate-300 hover:bg-slate-100'}>
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
      <section className={`px-6 py-20 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className={`text-xl mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Ready to bring your ideas to life? Let's connect and create something amazing.
          </p>
          <Button size="lg" className={isDark ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}>
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
}