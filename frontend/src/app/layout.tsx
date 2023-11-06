import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StereoAI',
  description: 'StereoAI Dashboard',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
