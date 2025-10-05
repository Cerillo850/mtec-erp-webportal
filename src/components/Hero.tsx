import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, TrendingUp, Users, Shield, Zap, BarChart3, Settings } from 'lucide-react';
import { contactInfo } from '@/config/contact';

const Hero = () => {
  return (
    <section className="relative text-white py-12 lg:py-16 overflow-hidden">
      {/* Banner Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/mtec-banner-preview.png" 
          alt="MTEC Sistemas ERP Banner" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-20 h-20 border border-purple-400/20 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 border border-cyan-300/20 -rotate-12 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-purple-300/20 rotate-45 animate-bounce"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <TrendingUp className="absolute top-32 left-[10%] w-8 h-8 text-cyan-400/30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <Users className="absolute top-48 right-[15%] w-6 h-6 text-purple-400/30 animate-pulse" style={{ animationDelay: '1s', animationDuration: '2s' }} />
          <Shield className="absolute bottom-48 left-[20%] w-7 h-7 text-cyan-300/30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }} />
          <Zap className="absolute bottom-32 right-[25%] w-5 h-5 text-purple-300/30 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
          <BarChart3 className="absolute top-60 left-[70%] w-6 h-6 text-cyan-400/30 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />
          <Settings className="absolute bottom-60 right-[60%] w-5 h-5 text-purple-400/30 animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '2s' }} />
        </div>

        {/* Animated Circles */}
        <div className="absolute top-20 right-20">
          <div className="relative">
            <div className="w-64 h-64 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            <div className="absolute inset-8 border border-cyan-300/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title with Enhanced Typography */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Badge className="mx-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-1">
                <Sparkles className="w-3 h-3 mr-2" />
                TECNOLOGIA AVANÇADA
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block animate-fade-in">Simplifique a Gestão do Seu</span>
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Comércio Digital
              </span>
            </h1>
          </div>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Soluções completas e intuitivas para otimizar suas vendas, estoque, 
            financeiro e muito mais. Transforme seu negócio com tecnologia de ponta.
          </p>
          
          {/* Premium Offer Card */}
          <Card className="mb-12 border-0 shadow-2xl max-w-2xl mx-auto relative overflow-hidden animate-fade-in backdrop-blur-xl" style={{ animationDelay: '0.9s' }}>
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 via-purple-900/60 to-slate-800/80 backdrop-blur-xl"></div>
            
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 p-[2px] rounded-lg">
              <div className="absolute inset-[2px] bg-slate-900/50 rounded-lg"></div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur-lg opacity-50"></div>
            
            <CardContent className="relative p-8">
              <div className="flex items-center justify-center mb-6">
                <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 text-sm font-semibold shadow-lg border-0">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  OFERTA ESPECIAL LIMITADA
                </Badge>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                  Consultoria Gratuita + 5 Dias de Teste
                </h3>
                <p className="text-gray-300 text-base mb-6">
                  Sem compromisso • Setup gratuito • Suporte especializado 24/7
                </p>
                
                {/* Feature List */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                    Implementação gratuita
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    Treinamento incluído
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                    Migração de dados
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    Suporte prioritário
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
              onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center">
                Fale com um Especialista
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <div className="opacity-60">
              <div className="text-2xl font-bold text-cyan-300">500+</div>
              <div className="text-sm text-gray-400">Empresas Atendidas</div>
            </div>
            <div className="opacity-60">
              <div className="text-2xl font-bold text-purple-300">99.9%</div>
              <div className="text-sm text-gray-400">Uptime Garantido</div>
            </div>
            <div className="opacity-60">
              <div className="text-2xl font-bold text-cyan-300">24/7</div>
              <div className="text-sm text-gray-400">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;