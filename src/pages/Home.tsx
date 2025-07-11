
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Check, ArrowRight, Sparkles, ZoomIn } from 'lucide-react';
import { contactInfo } from '@/config/contact';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const features = [
    {
      title: 'ERP Completo',
      description: 'Gestão integrada de todas as áreas do seu negócio em uma única plataforma.',
      icon: '🏢'
    },
    {
      title: 'Vendas Integradas', 
      description: 'PDV, Pedidos e Orçamentos conectados ao seu estoque e financeiro.',
      icon: '💳'
    },
    {
      title: 'Emissão de Notas',
      description: 'NF-e, NFS-e, NFC-e, CT-e e todos os documentos fiscais necessários.',
      icon: '📄'
    },
    {
      title: 'Controle de Estoque',
      description: 'Múltiplos depósitos, tabelas de preço e controle inteligente.',
      icon: '📦'
    },
    {
      title: 'Gestão Financeira',
      description: 'Lançamentos, cobranças, boletos e conciliação bancária.',
      icon: '💰'
    },
    {
      title: 'Ordem de Serviço',
      description: 'Gestão completa de técnicos e serviços prestados.',
      icon: '🔧'
    }
  ];

  const differentials = [
    'Implantação simples e rápida',
    'Atendimento humanizado via WhatsApp',
    'Planos acessíveis e escaláveis',
    'Sistema 100% em nuvem',
    'Integração completa',
    'Personalização sob demanda'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Simplifique a Gestão do Seu 
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Comércio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Soluções completas e intuitivas para otimizar suas vendas, estoque, 
              financeiro e muito mais. Comece seu teste gratuito hoje!
            </p>
            
            {/* Cartão de Destaque */}
            <Card className="mb-8 border-2 border-cyan-400/50 shadow-2xl max-w-2xl mx-auto" style={{ backgroundColor: '#58cef5' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 text-sm font-semibold">
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

      {/* System Preview Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja o Sistema em Ação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interface moderna, intuitiva e completa para gerenciar todos os aspectos do seu negócio
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
            <Card className="relative border-0 shadow-2xl overflow-hidden group">
              <CardContent className="p-0 relative">
                {!imageLoaded && !imageError && (
                  <Skeleton className="w-full h-96 rounded-lg" />
                )}
                
                {imageError ? (
                  <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📊</div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Dashboard MTeC Sistemas</h3>
                      <p className="text-gray-500">Interface completa de gestão empresarial</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      src="/lovable-uploads/b9a09e54-a0e8-4cf6-b4fa-4ee1f0c106dc.png"
                      alt="Dashboard MTeC Sistemas - Interface completa mostrando faturamento, vendas, calendário, gráficos de performance, alertas de estoque e gestão financeira integrada"
                      className={`w-full h-auto rounded-lg transition-all duration-500 group-hover:scale-105 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ minHeight: '400px', backgroundColor: '#f8f9fa' }}
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
                    
                    {/* Overlay com zoom indicator */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced description */}
          <div className="text-center mt-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 mb-4 text-lg">
                Dashboard completo com visão geral de vendas, estoque, financeiro e muito mais
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {['Faturamento em Tempo Real', 'Controle de Estoque', 'Agenda Integrada', 'Gráficos de Performance'].map((feature, index) => (
                  <Badge key={index} variant="secondary" className="bg-cyan-50 text-cyan-700 border-cyan-200">
                    {feature}
                  </Badge>
                ))}
              </div>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Um Ecossistema Completo para o Sucesso do Seu Negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como o MTeC Sistemas integra todas as áreas da sua empresa 
              em uma plataforma única e intuitiva.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Seus Diferenciais, Nosso Compromisso
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Escolha a MTeC Sistemas e experimente um novo padrão de excelência 
                em gestão empresarial.
              </p>
              <div className="space-y-4">
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{differential}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent mb-2">
                      5 Dias
                    </div>
                    <p className="text-gray-600 mb-6">Teste grátis completo</p>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                      Começar Agora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default Home;
