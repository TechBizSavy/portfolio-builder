'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Check, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TemplatePreview } from '@/components/template-preview';

const templates = [
  {
    id: 'dark-minimal',
    name: 'Dark Minimal',
    description: 'Clean, professional dark theme with elegant typography and minimalist design principles',
    features: ['Dark Mode Only', 'Minimal Design', 'Fast Loading', 'Clean Typography', 'Mobile Optimized'],
    price: '₹5',
    popular: false,
    preview: '/api/placeholder/600/400'
  },
  {
    id: 'light-dark-toggle',
    name: 'Light/Dark Toggle',
    description: 'Versatile theme with seamless light/dark mode switching and modern UI components',
    features: ['Theme Toggle', 'Responsive Design', 'Modern UI', 'Smooth Animations', 'Accessibility'],
    price: '₹5',
    popular: true,
    preview: '/api/placeholder/600/400'
  },
  {
    id: 'aesthetic-dark',
    name: 'Aesthetic Dark',
    description: 'Premium dark theme with magical UI elements, advanced animations, and stunning visuals',
    features: ['Magical UI', 'Advanced Animations', 'Premium Look', 'Interactive Elements', 'Glass Effects'],
    price: '₹5',
    popular: false,
    preview: '/api/placeholder/600/400'
  }
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">
                Choose Your
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  {' '}Template
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Select from our professionally designed templates to create your perfect portfolio
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {template.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full ${
                  template.popular ? 'ring-2 ring-blue-500/50' : ''
                }`}>
                  <CardHeader>
                    <div className="relative rounded-lg overflow-hidden mb-4 bg-slate-800/50 aspect-video">
                      <TemplatePreview template={template} showPreview={true} />
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-white text-xl">{template.name}</CardTitle>
                      <div className="text-2xl font-bold text-emerald-400">{template.price}</div>
                    </div>
                    
                    <CardDescription className="text-slate-300 text-base leading-relaxed">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Features:</h4>
                      <ul className="space-y-1">
                        {template.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-300">
                            <Check className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Link href={`/payment?template=${template.id}`}>
                        <Button 
                          className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                            template.popular 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-purple-500/25' 
                              : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white'
                          }`}
                        >
                          Select This Template
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              What You Get With Every Template
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                'Complete Next.js Project',
                'Mobile Responsive Design',
                'SEO Optimized'
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}