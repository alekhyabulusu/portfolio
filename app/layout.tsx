import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL } from './site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: 'Alekhya Bulusu | Data Scientist & ML Engineer',
  description:
    'Masters student at Northeastern University specializing in RAG architectures, Gaussian Processes, and scalable ML pipelines. Building data-driven solutions with LangChain, PyTorch, and modern NLP frameworks.',
  keywords: [
    'Data Scientist',
    'ML Engineer',
    'RAG',
    'LangChain',
    'Python',
    'Northeastern University',
    'Alekhya Bulusu',
    'Machine Learning',
    'NLP',
  ],
  authors: [{ name: 'Alekhya Bulusu' }],
  openGraph: {
    title: 'Alekhya Bulusu | Data Scientist & ML Engineer',
    description:
      'Masters student at Northeastern University specializing in RAG architectures and scalable ML pipelines.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
