
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: 'Compromisso com o cliente',
      description: 'Colocamos as necessidades do cliente no centro de tudo que fazemos.',
      icon: '🤝'
    },
    {
      title: 'Simplicidade com eficiência',
      description: 'Entregamos soluções diretas, fáceis de usar e que geram resultados reais.',
      icon: '⚡'
    },
    {
      title: 'Transparência e ética',
      description: 'Valorizamos relações honestas, claras e duradouras.',
      icon: '🎯'
    },
    {
      title: 'Inovação constante',
      description: 'Buscamos melhorar continuamente, ouvindo o mercado e evoluindo nossos produtos.',
      icon: '🚀'
    },
    {
      title: 'Parceria e proximidade',
      description: 'Atuamos lado a lado com nossos clientes e parceiros para gerar valor mútuo.',
      icon: '🤲'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">MTeC Sistemas</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Somos uma empresa especializada em soluções tecnológicas para pequenas e médias empresas, 
            oferecendo sistemas de gestão que simplificam processos e impulsionam resultados.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-600">
                  Simplificar a gestão de pequenas e médias empresas por meio de soluções tecnológicas 
                  acessíveis, intuitivas e eficientes, que impulsionam o crescimento e a organização dos negócios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
                <p className="text-gray-600">
                  Ser referência nacional em sistemas de gestão para PMEs, reconhecida pela inovação, 
                  excelência no suporte e proximidade com o cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">E</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excelência</h3>
                <p className="text-gray-600">
                  Buscamos a excelência em tudo que fazemos, desde o desenvolvimento de produtos 
                  até o atendimento ao cliente, sempre superando expectativas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os valores que guiam nossa empresa e definem como nos relacionamos 
              com clientes, parceiros e colaboradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conheça Nossa Solução
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Descubra como nossos valores se refletem em cada funcionalidade 
            do sistema MTeC e como podemos ajudar seu negócio a crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Ver Funcionalidades
            </button>
            <button className="border border-gray-300 text-gray-900 bg-white hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Falar Conosco
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
