import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { contactInfo } from '@/config/contact';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Transformar a Gestão do Seu Negócio?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Entre em contato conosco e descubra como o MTeC Sistemas pode 
          impulsionar seu comércio.
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
          onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
        >
          Solicitar Demonstração Gratuita
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default CTA;