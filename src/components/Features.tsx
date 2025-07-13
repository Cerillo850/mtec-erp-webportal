import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
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

  return (
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
  );
};

export default Features;