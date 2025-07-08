
import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '@/config/contact';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="ml-2 text-xl font-bold">{contactInfo.company.name}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {contactInfo.company.tagline}
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">WhatsApp:</span>{' '}
                <a 
                  href={contactInfo.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {contactInfo.phone.display}
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">E-mail:</span>{' '}
                <a 
                  href={contactInfo.links.email}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {contactInfo.email.contact}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-cyan-400 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/planos" className="text-gray-300 hover:text-cyan-400 transition-colors">Planos</Link></li>
              <li><Link to="/funcionalidades" className="text-gray-300 hover:text-cyan-400 transition-colors">Funcionalidades</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-cyan-400 transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>{contactInfo.businessHours.weekdays}</p>
              <p>{contactInfo.businessHours.weekdaysTime}</p>
              <p className="mt-2">{contactInfo.businessHours.saturday}</p>
              <p>{contactInfo.businessHours.saturdayTime}</p>
              <p className="mt-2">{contactInfo.businessHours.sunday}</p>
              <p>{contactInfo.businessHours.sundayTime}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {contactInfo.company.name} © 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
