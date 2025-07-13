import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import { contactInfo } from '@/config/contact';

const Hero = () => {
  return (
    <section className="relative text-white py-20 lg:py-32 bg-gradient-to-br from-purple-900 via-purple-700 to-cyan-500">
      {/* Enhanced gradient overlays for depth and visual interest */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 via-purple-600/30 to-cyan-400/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-purple-700/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-600/10 to-cyan-500/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Simplifique a Gestão do Seu 
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent"> Comércio</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Soluções completas e intuitivas para otimizar suas vendas, estoque, 
            financeiro e muito mais. Comece seu teste gratuito hoje!
          </p>
          
          {/* Cartão de Destaque */}
          <Card className="mb-8 border-2 border-cyan-300/50 shadow-2xl max-w-2xl mx-auto" style={{ backgroundColor: '#58cef5' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Badge className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 text-sm font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  OFERTA ESPECIAL
                </Badge>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Fale com um Consultor e Experimente Grátis por 5 Dias
                </h3>
                <p className="text-gray-600 text-sm">
                  Sem compromisso • Sem taxa de setup • Suporte completo
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
              onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
            >
              Fale com um Consultor
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;