import React from 'react';
import Hero from '@/components/Hero';
import SystemPreview from '@/components/SystemPreview';
import Features from '@/components/Features';
import Differentials from '@/components/Differentials';
import CTA from '@/components/CTA';

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <SystemPreview />
      <Features />
      <Differentials />
      <CTA />
    </div>
  );
};

export default Home;
