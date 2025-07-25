import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { contactInfo } from '@/config/contact';

const SystemPreview = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veja o Sistema em Ação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interface moderna, intuitiva e completa para gerenciar todos os aspectos do seu negócio
          </p>
        </div>
        
        {/* Enhanced 3D angled container */}
        <div className="relative max-w-6xl mx-auto" style={{ perspective: '2500px' }}>
          {/* Multiple sophisticated background layers for enhanced depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 to-purple-600/25 rounded-[3rem] blur-3xl opacity-80 transform rotate-3 scale-110 translate-y-12 translate-x-8"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-indigo-600/20 rounded-[3rem] blur-2xl opacity-60 transform -rotate-4 scale-115 translate-x-6 translate-y-8"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-[3rem] blur-xl opacity-50 transform rotate-2 scale-105 -translate-y-6 translate-x-4"></div>
          
          {/* Main 3D angled image container with more pronounced angle */}
          <div 
            className="relative transform transition-all duration-700 ease-out hover:scale-[1.02] hover:rotate-x-[10deg] hover:rotate-y-[-7deg]"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(12deg) rotateY(-8deg) rotateZ(2deg)',
            }}
          >
            <Card className="relative border-0 overflow-hidden group bg-white/95 backdrop-blur-md shadow-2xl">
              {/* Enhanced sophisticated shadow layers matching the stronger 3D angle */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl"></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl transform translate-y-8 translate-x-4"></div>
              <div className="absolute -inset-16 bg-gradient-to-br from-cyan-600/12 via-purple-600/12 to-blue-600/12 rounded-[3rem] blur-3xl transform translate-y-12 translate-x-8"></div>
              <div className="absolute -inset-24 bg-gradient-to-br from-gray-900/8 to-gray-600/8 rounded-[4rem] blur-[4rem] transform translate-y-16 translate-x-12"></div>
              
              <CardContent className="relative p-10 lg:p-16">
                {/* Premium 3D frame effect with stronger perspective */}
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/40"
                  style={{
                    boxShadow: `
                      0 45px 90px -20px rgba(0, 0, 0, 0.4),
                      0 25px 50px -12px rgba(0, 0, 0, 0.3),
                      0 10px 20px -5px rgba(0, 0, 0, 0.15),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.25)
                    `
                  }}
                >
                  {/* Enhanced inner shadow border with stronger 3D effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/70 via-transparent to-gray-900/20 pointer-events-none z-10"></div>
                  
                  {!imageLoaded && !imageError && (
                    <Skeleton className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300" />
                  )}
                  
                  {imageError ? (
                    <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Dashboard MTeC Sistemas</h3>
                        <p className="text-gray-500">Interface completa de gestão empresarial</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/b9a09e54-a0e8-4cf6-b4fa-4ee1f0c106dc.png"
                        alt="Dashboard MTeC Sistemas - Interface completa mostrando faturamento, vendas, calendário, gráficos de performance, alertas de estoque e gestão financeira integrada"
                        className={`w-full h-auto rounded-2xl transition-all duration-700 transform ${
                          imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                        style={{ 
                          minHeight: '400px', 
                          backgroundColor: '#f8f9fa',
                          boxShadow: `
                            0 35px 70px -15px rgba(0, 0, 0, 0.5), 
                            0 18px 36px -10px rgba(0, 0, 0, 0.4),
                            0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                            0 3px 6px 0 rgba(255, 255, 255, 0.15) inset
                          `
                        }}
                        onLoad={() => {
                          console.log('Dashboard image loaded successfully');
                          setImageLoaded(true);
                        }}
                        onError={() => {
                          console.error('Failed to load dashboard image');
                          setImageError(true);
                        }}
                        loading="lazy"
                        width="1200"
                        height="800"
                      />
                      
                      {/* Enhanced 3D reflection effect with stronger perspective */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/15 rounded-2xl pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/8 to-transparent rounded-2xl pointer-events-none"></div>
                      
                      {/* Enhanced zoom indicator with stronger 3D effect */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div 
                          className="bg-white/95 backdrop-blur-md rounded-full p-4 transform scale-0 group-hover:scale-100 transition-all duration-300 border border-white/40"
                          style={{
                            boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.3)'
                          }}
                        >
                          <ZoomIn className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Enhanced description section */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Dashboard completo com visão geral de vendas, estoque, financeiro e muito mais
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Faturamento em Tempo Real', 'Controle de Estoque', 'Agenda Integrada', 'Gráficos de Performance'].map((feature, index) => (
                <Badge key={index} variant="secondary" className="bg-gradient-to-r from-cyan-50 to-purple-50 text-cyan-700 border-cyan-200/50 px-4 py-2 font-medium shadow-sm">
                  {feature}
                </Badge>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cyan-500/50 text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
            >
              Solicitar Demonstração
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemPreview;