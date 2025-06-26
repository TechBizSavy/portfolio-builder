'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Star } from 'lucide-react';
import Link from 'next/link';

interface Template {
  id: string;
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
  preview?: string;
}

interface TemplatePreviewProps {
  template: Template;
  showPreview?: boolean;
}

export function TemplatePreview({ template, showPreview = false }: TemplatePreviewProps) {
  const renderPreviewContent = () => {
    switch (template.id) {
      case 'dark-minimal':
        return (
          <div className="bg-slate-900 text-white p-4 rounded-lg min-h-[200px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">John Doe</h3>
                <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              </div>
              <p className="text-sm text-slate-300">Full Stack Developer</p>
              <div className="flex gap-2">
                <div className="w-12 h-2 bg-blue-500 rounded"></div>
                <div className="w-12 h-2 bg-green-500 rounded"></div>
                <div className="w-12 h-2 bg-purple-500 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-slate-700 rounded"></div>
                <div className="w-3/4 h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        );
      
      case 'light-dark-toggle':
        return (
          <div className="bg-white text-slate-900 p-4 rounded-lg min-h-[200px] border">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
              </div>
              <p className="text-sm text-slate-600">UI/UX Designer</p>
              <div className="flex gap-2">
                <div className="w-12 h-2 bg-pink-400 rounded"></div>
                <div className="w-12 h-2 bg-blue-400 rounded"></div>
                <div className="w-12 h-2 bg-green-400 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-slate-200 rounded"></div>
                <div className="w-2/3 h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        );
      
      case 'aesthetic-dark':
        return (
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 text-white p-4 rounded-lg min-h-[200px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Alex Chen</h3>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
              <p className="text-sm text-slate-300">Creative Developer</p>
              <div className="flex gap-2">
                <div className="w-12 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
                <div className="w-12 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                <div className="w-12 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-white/20 rounded backdrop-blur-sm"></div>
                <div className="w-4/5 h-2 bg-white/20 rounded backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="bg-slate-100 p-4 rounded-lg min-h-[200px] flex items-center justify-center">
            <p className="text-slate-500">Template Preview</p>
          </div>
        );
    }
  };

  if (!showPreview) {
    return (
      <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">{template.name}</h3>
            {template.popular && (
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <Star className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
          </div>
          
          <p className="text-slate-300 mb-4">{template.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {template.features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-white/10 text-slate-300">
                {feature}
              </Badge>
            ))}
          </div>
          
          <Link href={`/payment?template=${template.id}`}>
            <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
              <Eye className="w-4 h-4 mr-2" />
              Select Template
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return renderPreviewContent();
}