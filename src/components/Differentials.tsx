import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { contactInfo } from '@/config/contact';

const Differentials = () => {
  const differentials = [
    'Implantação simples e rápida',
    'Atendimento humanizado via WhatsApp',
    'Planos acessíveis e escaláveis',
    'Sistema 100% em nuvem',
    'Integração completa',
    'Personalização sob demanda'
  ];

  return (
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
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                    onClick={() => window.open(contactInfo.links.whatsappWithMessage, '_blank')}
                  >
                    Começar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;