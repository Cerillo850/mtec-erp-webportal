
export const contactInfo = {
  company: {
    name: "MTeC Sistemas",
    tagline: "Simplificando a gestão de pequenas e médias empresas através de soluções tecnológicas acessíveis, intuitivas e eficientes."
  },
  phone: {
    display: "(45) 9 98213552",
    whatsapp: "45998213552", // Formato para links do WhatsApp (sem espaços, parênteses ou traços)
    raw: "+5545998213552" // Formato completo com código do país
  },
  email: {
    contact: "contato@mtecsistemas.com.br",
    support: "suporte@mtecsistemas.com.br" // Caso queira separar emails no futuro
  },
  address: {
    street: "", // Adicionar se houver endereço físico
    city: "",
    state: "",
    zipCode: "",
    full: "" // Endereço completo formatado
  },
  businessHours: {
    weekdays: "Segunda a Sexta",
    weekdaysTime: "das 9h às 18h",
    saturday: "Sábado",
    saturdayTime: "das 9h às 12h",
    sunday: "Domingo",
    sundayTime: "Fechado"
  },
  socialMedia: {
    // Adicionar quando houver redes sociais
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: ""
  },
  links: {
    // Gera links funcionais automaticamente
    whatsapp: "https://wa.me/45998213552",
    whatsappWithMessage: "https://wa.me/45998213552?text=Olá! Gostaria de conhecer mais sobre o MTeC Sistemas.",
    email: "mailto:contato@mtecsistemas.com.br",
    emailWithSubject: "mailto:contato@mtecsistemas.com.br?subject=Interesse no MTeC Sistemas"
  }
};

// Função helper para formatar telefone
export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
};

// Função helper para validar email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função helper para gerar link do WhatsApp com mensagem personalizada
export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || "Olá! Gostaria de conhecer mais sobre o MTeC Sistemas.";
  return `https://wa.me/${contactInfo.phone.whatsapp}?text=${encodeURIComponent(message)}`;
};
