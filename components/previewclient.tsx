'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Eye,
  Code,
  Share2
} from 'lucide-react';

import { DarkMinimalTemplate } from '@/components/templates/dark-minimal';
import { LightDarkToggleTemplate } from '@/components/templates/light-dark-toggle';
import { AestheticDarkTemplate } from '@/components/templates/aesthetic-dark';

import { PortfolioData } from '@/types/portfolio';

export default function previewclient() {
  const params = useParams();
  const templateId = params.template as string;
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('portfolioData');
    if (data) {
      setPortfolioData(JSON.parse(data));
    }
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      toast.success('Portfolio download started!');
      setTimeout(() => {
        toast.success('Portfolio downloaded successfully!');
        setIsDownloading(false);
      }, 2000);
    } catch (error) {
      toast.error('Download failed. Please try again.');
      setIsDownloading(false);
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success('Portfolio URL copied to clipboard!');
  };

  const renderTemplate = () => {
    switch (templateId) {
      case 'dark-minimal':
        return <DarkMinimalTemplate data={portfolioData} />;
      case 'light-dark-toggle':
        return <LightDarkToggleTemplate data={portfolioData!} />;
      case 'aesthetic-dark':
        return <AestheticDarkTemplate data={portfolioData!} />;
      default:
        return <DarkMinimalTemplate data={portfolioData!} />;
    }
  };

  if (!portfolioData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Portfolio data not found</h1>
          <Link href="/templates">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Go back to Templates
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
        <div className="px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/generate">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Edit
              </Button>
            </Link>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={handleShare}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>

              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
              >
                {isDownloading ? (
                  <>
                    <Download className="w-4 h-4 mr-2 animate-bounce" />
                    Preparing...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download Code
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Template */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl"
        >
          {renderTemplate()}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Your Portfolio is Ready!</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Download the complete Next.js project and deploy it anywhere
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Complete Next.js Project</h3>
                    <p className="text-slate-300 text-sm">
                      Get all source files including components, styles, and configuration
                    </p>
                  </div>
                  <div className="text-center">
                    <ExternalLink className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Deploy Anywhere</h3>
                    <p className="text-slate-300 text-sm">
                      Compatible with Vercel, Netlify, and other hosting platforms
                    </p>
                  </div>
                  <div className="text-center">
                    <Eye className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Fully Customizable</h3>
                    <p className="text-slate-300 text-sm">
                      Modify colors, layout, and content to match your style
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold"
                  >
                    {isDownloading ? (
                      <>
                        <Download className="w-5 h-5 mr-2 animate-bounce" />
                        Preparing Download...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 mr-2" />
                        Download Portfolio
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
