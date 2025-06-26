// No "use client" here - this is a SERVER COMPONENT

import PreviewClient from '@/components/previewclient';

export function generateStaticParams() {
  return [
    { template: 'dark-minimal' },
    { template: 'light-dark-toggle' },
    { template: 'aesthetic-dark' }
  ];
}

export default function PreviewPage() {
  return <PreviewClient />;
}
