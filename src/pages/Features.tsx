
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { contactInfo } from '@/config/contact';

const Features = () => {
  const modules = [
    {
      title: 'Dashboard ERP: Decisões Baseadas em Dados',
      description: 'Gráficos e relatórios completos para uma visão estratégica do seu negócio.',
      benefits: ['Visão clara do desempenho', 'Identificação de oportunidades', 'Agilidade na tomada de decisões'],
      icon: '📊',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Vendas: Otimize Seu Processo Comercial',
      description: 'Orçamentos e pedidos, PDV, Backoffice de Vendas, catálogo online.',
      benefits: ['Agilidade nas vendas', 'Controle de pedidos', 'Aumento da produtividade'],
      icon: '💼',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Serviços: Gestão Integrada de Ponta a Ponta',
      description: 'Emissão de NFS-e, ordens de serviços, gestão de técnicos.',
      benefits: ['Organização de serviços', 'Controle de equipes', 'Emissão fiscal simplificada'],
      icon: '🔧',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Estoque: Controle Total e Inteligente',
      description: 'Gestão de múltiplos depósitos, tabelas de preço, movimentações, catálogo.',
      benefits: ['Redução de perdas', 'Otimização de compras', 'Inventário preciso'],
      icon: '📦',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Compras: Eficiência na Aquisição',
      description: 'Ordem de compra, nota de entrada, alerta de estoque, leilão de fornecedores.',
      benefits: ['Melhores negociações', 'Controle de custos', 'Abastecimento inteligente'],
      icon: '🛒',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Financeiro: Sua Saúde Financeira no Controle',
      description: 'Lançamentos financeiros, cobranças integradas, remessas, boletos, bancos.',
      benefits: ['Fluxo de caixa organizado', 'Redução de inadimplência', 'Conciliação bancária'],
      icon: '💰',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Fiscal: Emissão de Documentos Simplificada',
      description: 'Emissão de NF-e, NFS-e, MDF-e, NFC-e, CF-e SAT e CT-e.',
      benefits: ['Conformidade fiscal', 'Agilidade na emissão', 'Redução de erros'],
      icon: '📄',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'PDV Online: Vendas Rápidas e Integradas',
      description: 'PDV Online para vendas no balcão, com gestão integrada de pedidos, estoque e financeiro.',
      benefits: ['Agilidade no atendimento', 'Controle de caixa', 'Integração total'],
      icon: '💳',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 overflow-hidden">
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
            Todas as Ferramentas que Seu Comércio <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Precisa</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed animate-fade-in delay-300">
            Explore os módulos do MTeC Sistemas e veja como cada funcionalidade foi pensada 
            para otimizar sua operação.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {modules.map((module, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {module.icon}
                      </div>
                      <h3 className="text-xl font-bold">{module.title}</h3>
                    </div>
                    <p className="text-white/90">{module.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Principais Benefícios:</h4>
                    <ul className="space-y-2">
                      {module.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo Integrado em Uma Única Plataforma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não perca tempo alternando entre sistemas. Com o MTeC Sistemas, 
              toda a gestão do seu negócio acontece em um só lugar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cadastre</h3>
              <p className="text-sm text-gray-600">Produtos, clientes e fornecedores</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Venda</h3>
              <p className="text-sm text-gray-600">PDV integrado ao estoque</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Emita</h3>
              <p className="text-sm text-gray-600">Notas fiscais automaticamente</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Controle</h3>
              <p className="text-sm text-gray-600">Financeiro e relatórios</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-20 h-20 border border-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-32 w-16 h-16 border border-purple-400/20 rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Experimentar?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Veja na prática como cada funcionalidade pode transformar a gestão do seu negócio. 
            Teste grátis por 5 dias!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
            >
              Iniciar Teste Gratuito
            </button>
            <button 
              className="border border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
            >
              Ver Demonstração
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
