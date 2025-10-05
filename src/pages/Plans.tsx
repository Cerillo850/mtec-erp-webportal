import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { contactInfo } from '@/config/contact';

const Plans = () => {
  const plans = [
    {
      name: 'BRONZE',
      price: 'R$ 149,00',
      period: '/mês',
      users: '2 usuários',
      features: [
        'Cadastros Básicos',
        'Compras (Notas de Entrada, Cotações, Ordens de Compras)',
        'Estoque (Cadastro de Produtos/Serviços, Movimentações)',
        'PDV (Frente de Caixa)',
        'Nota Fiscal Eletrônica'
      ],
      services: ['Implantação personalizada', 'Suporte técnico do sistema', 'Treinamento'],
      popular: false
    },
    {
      name: 'SILVER',
      price: 'R$ 199,00',
      period: '/mês',
      users: '3 usuários',
      additionalUser: 'R$ 25,00 por usuário adicional',
      features: [
        'Todas as funcionalidades do Bronze',
        'Financeiro Avançado',
        'Financeiro Básico',
        'Vendas (Pedidos/Orçamentos)',
        'Ordens de Serviço'
      ],
      services: ['Implantação personalizada', 'Suporte técnico do sistema', 'Treinamento'],
      popular: false
    },
    {
      name: 'GOLD',
      price: 'R$ 249,00',
      period: '/mês',
      users: '5 usuários',
      additionalUser: 'R$ 25,00 por usuário adicional',
      features: [
        'Todas as funcionalidades do Silver'
      ],
      services: ['Implantação personalizada', 'Suporte técnico do sistema', 'Treinamento'],
      popular: true
    },
    {
      name: 'PREMIUM',
      price: 'R$ 299,00',
      period: '/mês',
      users: '7 usuários',
      additionalUser: 'R$ 25,00 por usuário adicional',
      features: [
        'Todas as funcionalidades do Gold',
        'Emissores NFSe Inclusos'
      ],
      services: ['Implantação personalizada', 'Suporte técnico do sistema', 'Treinamento'],
      popular: false
    },
    {
      name: 'PLATINUM',
      price: 'A partir de R$ 399,00',
      period: '/mês',
      users: '10 usuários',
      additionalUser: 'Para mais usuários, consulte nosso comercial',
      features: [
        'Cadastros Básicos',
        'Compras (Notas de Entrada, Cotações, Ordens de Compras)',
        'Estoque (Cadastro de Produtos/Serviços, Movimentações e Outros)',
        'Financeiro Avançado',
        'Financeiro Básico',
        'Nota Fiscal Eletrônica',
        'PDV (Frente de Caixa)',
        'Vendas (Pedidos/Orçamentos e Ordens de Serviço)',
        'Emissores NFSe Inclusos'
      ],
      services: ['Implantação personalizada', 'Suporte técnico do sistema', 'Treinamento'],
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: 'Implantação Personalizada',
      description: 'Configuração e adaptação do sistema às suas necessidades específicas.'
    },
    {
      title: 'Suporte Técnico Especializado',
      description: 'Atendimento rápido e eficiente para suas dúvidas e problemas.'
    },
    {
      title: 'Suporte Técnico de Automação Comercial',
      description: 'Serviço avulso sob consulta para automação comercial.'
    },
    {
      title: 'Treinamento',
      description: 'Capacitação da sua equipe para o uso completo do sistema.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] text-white py-16 overflow-hidden">
        {/* Banner Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/mtec-banner-preview.png" 
            alt="MTEC Sistemas ERP Banner" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900/50"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-cyan-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 left-1/2 w-40 h-40 border border-purple-300/10 rounded-full animate-pulse delay-1000"></div>
          
          {/* Hexagonal Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-8 h-8 bg-cyan-400 transform rotate-45"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-purple-400 transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-cyan-300 transform rotate-45"></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Escolha o Plano Ideal para o Seu <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Negócio</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed animate-fade-in delay-300">
            Conheça nossos planos flexíveis e encontre a solução perfeita para a gestão do seu comércio.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full flex items-center">
                      <Star size={16} className="mr-1" />
                      <span className="text-sm font-semibold">Popular</span>
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.users}</p>
                  {plan.additionalUser && (
                    <p className="text-xs text-gray-500 mt-1">{plan.additionalUser}</p>
                  )}
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Funcionalidades:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Serviços Inclusos:</h4>
                    <ul className="space-y-2">
                      {plan.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start text-sm text-gray-600">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Potencialize Seu Negócio com Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serviços especializados para garantir o máximo aproveitamento do seu sistema MTeC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-20 h-20 border border-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-32 w-16 h-16 border border-purple-400/20 rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experimente Grátis por 5 Dias!
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Descubra na prática como o MTeC Sistemas pode revolucionar a gestão do seu comércio. 
            Sem compromisso!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white px-8 py-3 shadow-lg"
            onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
          >
            Iniciar Teste Gratuito
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Plans;
