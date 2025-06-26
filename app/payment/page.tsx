'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Clock, CheckCircle, QrCode, Copy } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import Image from 'next/image';

const templates = {
  'dark-minimal': { name: 'Dark Minimal', price: '₹5' },
  'light-dark-toggle': { name: 'Light/Dark Toggle', price: '₹5' },
  'aesthetic-dark': { name: 'Aesthetic Dark', price: '₹5' }
};

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPaid, setIsPaid] = useState(false);
  
  const templateId = searchParams.get('template') as keyof typeof templates;
  const template = templates[templateId];

  if (!template) {
    return <div>Template not found</div>;
  }

  const handlePaymentConfirm = () => {
    setIsPaid(true);
    toast.success("Payment confirmed! Redirecting to form...");
    setTimeout(() => {
      router.push(`/generate?template=${templateId}`);
    }, 1500);
  };

  const copyUPIId = () => {
    navigator.clipboard.writeText('portfoliobuilder@upi');
    toast.success('UPI ID copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/templates">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Templates
              </Button>
            </Link>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Complete Your
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  {' '}Payment
                </span>
              </h1>
              <p className="text-xl text-slate-300">
                Secure your {template.name} template for just {template.price}
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Order Summary</CardTitle>
                  <CardDescription className="text-slate-300">
                    Review your template selection
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="text-white font-semibold">{template.name} Template</h3>
                      <p className="text-slate-300 text-sm">Complete Next.js portfolio template</p>
                    </div>
                    <div className="text-2xl font-bold text-emerald-400">{template.price}</div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">What's included:</h4>
                    <ul className="space-y-2">
                      {[
                        'Complete Next.js project files',
                        'Mobile responsive design',
                        'SEO optimized components',
                        'Easy customization',
                        '24/7 support access'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-lg">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-emerald-400 font-bold text-2xl">{template.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <QrCode className="w-6 h-6 mr-2" />
                    UPI Payment
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Scan the QR code with any UPI app to make payment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Real QR Code */}
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-xl shadow-lg">
                      <Image
                        src="/WhatsApp Image 2025-06-26 at 3.16.58 PM.jpeg"
                        alt="UPI QR Code for ₹5 Payment"
                        width={240}
                        height={240}
                        className="rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-white font-semibold mb-4">Scan to pay ₹5 with any UPI app</p>
                    <p className="text-slate-300 text-sm mb-4">
                      Use Google Pay, PhonePe, Paytm, or any UPI-enabled app
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Shield className="w-5 h-5 text-emerald-400" />
                      <span>Secure UPI payment processing</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Clock className="w-5 h-5 text-emerald-400" />
                      <span>Instant access after payment confirmation</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      onClick={handlePaymentConfirm}
                      disabled={isPaid}
                      className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-300"
                    >
                      {isPaid ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Payment Confirmed!
                        </>
                      ) : (
                        "I've Completed the Payment"
                      )}
                    </Button>
                    <p className="text-sm text-slate-400 text-center mt-2">
                      Click after making the ₹5 payment to continue
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h3 className="text-white font-semibold">Secure Payment</h3>
                  <p className="text-slate-300 text-sm">Your payment is processed securely via UPI</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h3 className="text-white font-semibold">Instant Access</h3>
                  <p className="text-slate-300 text-sm">Get your template immediately after payment</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h3 className="text-white font-semibold">Money Back</h3>
                  <p className="text-slate-300 text-sm">7-day money back guarantee</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}