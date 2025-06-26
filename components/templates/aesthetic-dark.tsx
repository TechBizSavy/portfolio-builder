'use client';

import { Github, Linkedin, Twitter, ExternalLink, Mail, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

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

interface AestheticDarkTemplateProps {
  data: PortfolioData;
}

export function AestheticDarkTemplate({ data }: AestheticDarkTemplateProps) {
  const techArray = data.techStack.split(',').map(tech => tech.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for Work
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              {data.name}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
              {data.title}
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              {data.bio}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {data.socials.github && (
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-white/20 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </a>
            )}
            {data.socials.linkedin && (
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-white/20 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
            )}
            {data.socials.twitter && (
              <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-white/20 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white">
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </Button>
              </a>
            )}
            {data.resumeUrl && (
              <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Arsenal
            </h2>
          </motion.div>
          
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10">
            <div className="flex flex-wrap justify-center gap-4">
              {techArray.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white text-sm px-6 py-3 border border-white/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Work
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Let's Create Magic
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Ready to turn your wildest ideas into reality? Let's build something extraordinary together.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}