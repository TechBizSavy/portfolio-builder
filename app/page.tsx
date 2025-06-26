'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Palette, Zap, Download, Eye, Star, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { TemplatePreview } from '@/components/template-preview';

const templates = [
  {
    id: 'dark-minimal',
    name: 'Dark Minimal',
    description: 'Clean, professional dark theme with elegant typography',
    features: ['Dark Mode Only', 'Minimal Design', 'Fast Loading'],
    preview: '/api/placeholder/400/300'
  },
  {
    id: 'light-dark-toggle',
    name: 'Light/Dark Toggle',
    description: 'Versatile theme with seamless light/dark mode switching',
    features: ['Theme Toggle', 'Responsive', 'Modern UI'],
    preview: '/api/placeholder/400/300'
  },
  {
    id: 'aesthetic-dark',
    name: 'Aesthetic Dark',
    description: 'Premium dark theme with magical UI elements and animations',
    features: ['Magical UI', 'Animations', 'Premium Look'],
    preview: '/api/placeholder/400/300'
  }
];

const stats = [
  { icon: Users, value: '1000+', label: 'Portfolios Created' },
  { icon: Star, value: '4.9/5', label: 'User Rating' },
  { icon: Zap, value: '< 5min', label: 'Setup Time' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Portfolio Builder
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Your Dream
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                {' '}Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create stunning, professional portfolios in under 5 minutes. Choose from beautiful templates, 
              customize with your content, and deploy instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
                <stat.icon className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-semibold">{stat.value}</span>
                <span className="text-slate-300">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/templates">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Portfolio Builder?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to create a professional online presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Beautiful Templates',
                description: 'Choose from carefully crafted, modern portfolio templates designed by professionals.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Built with Next.js for optimal performance and seamless user experience.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Download,
                title: 'Export Ready',
                description: 'Download your complete Next.js project and deploy anywhere you want.',
                color: 'from-emerald-500 to-teal-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Perfect Template
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Professional templates designed to showcase your skills and experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <TemplatePreview template={template} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/templates">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                View All Templates
                <Eye className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your Portfolio?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of professionals whove built their dream portfolios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold">
                  Start Building
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Eye className="mr-2 w-5 h-5" />
                View Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}