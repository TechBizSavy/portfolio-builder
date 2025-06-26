'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Plus, Trash2, User, Briefcase, Code, ExternalLink, FileText, Share2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const portfolioSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  bio: z.string().min(20, 'Bio must be at least 20 characters'),
  techStack: z.string().min(3, 'Please add at least one technology'),
  resumeUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  projects: z.array(z.object({
    title: z.string().min(3, 'Project title is required'),
    description: z.string().min(10, 'Project description is required'),
    githubUrl: z.string().url('Please enter a valid GitHub URL').optional().or(z.literal('')),
    liveUrl: z.string().url('Please enter a valid live URL').optional().or(z.literal(''))
  })).min(1, 'At least one project is required'),
  socials: z.object({
    github: z.string().url('Please enter a valid GitHub URL').optional().or(z.literal('')),
    linkedin: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
    twitter: z.string().url('Please enter a valid Twitter URL').optional().or(z.literal('')),
    website: z.string().url('Please enter a valid website URL').optional().or(z.literal(''))
  })
});

type PortfolioForm = z.infer<typeof portfolioSchema>;

export default function GeneratePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const templateId = searchParams.get('template');
  const [isGenerating, setIsGenerating] = useState(false);

  const { register, control, handleSubmit, formState: { errors } } = useForm<PortfolioForm>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      projects: [{ title: '', description: '', githubUrl: '', liveUrl: '' }],
      socials: { github: '', linkedin: '', twitter: '', website: '' }
    }
  });

  const { fields: projectFields, append: appendProject, remove: removeProject } = useFieldArray({
    control,
    name: 'projects'
  });

  const onSubmit = async (data: PortfolioForm) => {
    setIsGenerating(true);
    try {
      // Store form data in localStorage for preview
      const portfolioData = { ...data, templateId };
      localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
      
      toast.success('Portfolio generated successfully!');
      
      // Redirect to preview
      setTimeout(() => {
        router.push(`/preview/${templateId}`);
      }, 1000);
    } catch (error) {
      toast.error('Failed to generate portfolio. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!templateId) {
    return <div>Template not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/payment?template=${templateId}`}>
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Payment
              </Button>
            </Link>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Build Your
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  {' '}Portfolio
                </span>
              </h1>
              <p className="text-xl text-slate-300">
                Fill in your details to generate your professional portfolio
              </p>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Personal Information
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Tell us about yourself
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="John Doe"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      />
                      {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-white">Professional Title *</Label>
                      <Input
                        id="title"
                        {...register('title')}
                        placeholder="Full Stack Developer"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      />
                      {errors.title && <p className="text-red-400 text-sm">{errors.title.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-white">Bio *</Label>
                    <Textarea
                      id="bio"
                      {...register('bio')}
                      placeholder="Tell us about your background, experience, and what drives you as a professional..."
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    />
                    {errors.bio && <p className="text-red-400 text-sm">{errors.bio.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="techStack" className="text-white">Tech Stack *</Label>
                    <Input
                      id="techStack"
                      {...register('techStack')}
                      placeholder="React, Node.js, TypeScript, Python, AWS"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    />
                    <p className="text-sm text-slate-400">Separate technologies with commas</p>
                    {errors.techStack && <p className="text-red-400 text-sm">{errors.techStack.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resumeUrl" className="text-white">Resume URL</Label>
                    <Input
                      id="resumeUrl"
                      {...register('resumeUrl')}
                      placeholder="https://example.com/resume.pdf"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    />
                    {errors.resumeUrl && <p className="text-red-400 text-sm">{errors.resumeUrl.message}</p>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Projects
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Showcase your best work
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {projectFields.map((field, index) => (
                    <div key={field.id} className="space-y-4 p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-semibold">Project {index + 1}</h4>
                        {projectFields.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeProject(index)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-white">Project Title *</Label>
                          <Input
                            {...register(`projects.${index}.title`)}
                            placeholder="My Awesome Project"
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                          />
                          {errors.projects?.[index]?.title && (
                            <p className="text-red-400 text-sm">{errors.projects[index]?.title?.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label className="text-white">Description *</Label>
                          <Input
                            {...register(`projects.${index}.description`)}
                            placeholder="Brief description of your project"
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                          />
                          {errors.projects?.[index]?.description && (
                            <p className="text-red-400 text-sm">{errors.projects[index]?.description?.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-white">GitHub URL</Label>
                          <Input
                            {...register(`projects.${index}.githubUrl`)}
                            placeholder="https://github.com/username/project"
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                          />
                          {errors.projects?.[index]?.githubUrl && (
                            <p className="text-red-400 text-sm">{errors.projects[index]?.githubUrl?.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label className="text-white">Live URL</Label>
                          <Input
                            {...register(`projects.${index}.liveUrl`)}
                            placeholder="https://myproject.com"
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                          />
                          {errors.projects?.[index]?.liveUrl && (
                            <p className="text-red-400 text-sm">{errors.projects[index]?.liveUrl?.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => appendProject({ title: '', description: '', githubUrl: '', liveUrl: '' })}
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Project
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Social Links
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Connect with your audience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white">GitHub Profile</Label>
                      <Input
                        {...register('socials.github')}
                        placeholder="https://github.com/username"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      />
                      {errors.socials?.github && <p className="text-red-400 text-sm">{errors.socials.github.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">LinkedIn Profile</Label>
                      <Input
                        {...register('socials.linkedin')}
                        placeholder="https://linkedin.com/in/username"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      />
                      {errors.socials?.linkedin && <p className="text-red-400 text-sm">{errors.socials.linkedin.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Twitter Profile</Label>
                      <Input
                        {...register('socials.twitter')}
                        placeholder="https://twitter.com/username"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      />
                      {errors.socials?.twitter && <p className="text-red-400 text-sm">{errors.socials.twitter.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Personal Website</Label>
                      <Input
                        {...register('socials.website')}
                        placeholder="https://yourwebsite.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      />
                      {errors.socials?.website && <p className="text-red-400 text-sm">{errors.socials.website.message}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <Button
                type="submit"
                disabled={isGenerating}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                    Generating Portfolio...
                  </>
                ) : (
                  <>
                    <Code className="w-5 h-5 mr-2" />
                    Generate My Portfolio
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}