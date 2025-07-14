
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail } from 'lucide-react';
import { contactInfo, getWhatsAppLink } from '@/config/contact';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Configure com suas credenciais do EmailJS
      const serviceId = 'YOUR_SERVICE_ID'; // Substitua pelo seu Service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Substitua pelo seu Template ID  
      const publicKey = 'YOUR_PUBLIC_KEY'; // Substitua pela sua Public Key

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Equipe',
      }, publicKey);

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de conhecer mais sobre o MTeC Sistemas e solicitar uma demonstração.";
    window.open(getWhatsAppLink(message), '_blank');
  };

  const handleDemoRequest = () => {
    const message = "Olá! Gostaria de solicitar uma demonstração do MTeC Sistemas.";
    window.open(getWhatsAppLink(message), '_blank');
  };

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
            Fale <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Conosco</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed animate-fade-in delay-300">
            Estamos prontos para atender você. Envie sua mensagem ou entre em contato pelos canais abaixo.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Envie sua Mensagem</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Assunto *
                        </label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Assunto da mensagem"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Digite sua mensagem aqui..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3"
                      disabled={isLoading}
                    >
                      {isLoading ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações de Contato</h2>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                        <a 
                          href={contactInfo.links.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600 transition-colors"
                        >
                          {contactInfo.phone.display}
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Atendimento rápido e direto via WhatsApp para suporte e vendas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                        <a 
                          href={contactInfo.links.email}
                          className="text-gray-600 hover:text-cyan-600 transition-colors"
                        >
                          {contactInfo.email.contact}
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Envie sua mensagem por e-mail e receba uma resposta detalhada.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Horário de Atendimento</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><span className="font-medium">{contactInfo.businessHours.weekdays}:</span> {contactInfo.businessHours.weekdaysTime}</p>
                      <p><span className="font-medium">{contactInfo.businessHours.saturday}:</span> {contactInfo.businessHours.saturdayTime}</p>
                      <p><span className="font-medium">{contactInfo.businessHours.sunday}:</span> {contactInfo.businessHours.sundayTime}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone className="mr-2" size={16} />
                  Chamar no WhatsApp
                </Button>
                <Button 
                  onClick={handleDemoRequest}
                  variant="outline" 
                  className="w-full border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                >
                  Solicitar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Encontre respostas rápidas para as dúvidas mais comuns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Como funciona o teste gratuito?</h3>
                <p className="text-gray-600">
                  Você tem acesso completo ao sistema por 5 dias, sem compromisso. 
                  Nossa equipe te ajuda na configuração inicial.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quanto tempo leva a implantação?</h3>
                <p className="text-gray-600">
                  A implantação é rápida e personalizada. Em média, leva de 3 a 7 dias úteis, 
                  dependendo da complexidade do seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Preciso de equipamentos especiais?</h3>
                <p className="text-gray-600">
                  Não! O sistema funciona 100% na nuvem. Você só precisa de um computador 
                  com internet e pode acessar de qualquer lugar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Como é o suporte técnico?</h3>
                <p className="text-gray-600">
                  Oferecemos suporte humanizado via WhatsApp, e-mail e telefone. 
                  Nossa equipe está sempre pronta para ajudar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
