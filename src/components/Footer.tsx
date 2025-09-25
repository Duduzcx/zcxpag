import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511921562675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site.", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para ter um site que gera resultados? 🚀
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Clique no botão abaixo e fale comigo agora mesmo.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-4 h-auto"
            onClick={openWhatsApp}
          >
            Quero meu site agora
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">ZcxPages</h3>
              <p className="text-white/80 mb-6 max-w-md">
                Transformamos suas ideias em sites profissionais que vendem. 
                Landing pages, sites institucionais e e-commerce de alta qualidade.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Portfólio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Redes sociais */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="space-y-4">
                <button 
                  onClick={() => window.open("https://instagram.com/zcxpages", "_blank")}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@zcxpages</span>
                </button>
                <button 
                  onClick={() => window.open("https://facebook.com/zcxpagesoficial", "_blank")}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <Facebook className="h-5 w-5" />
                  <span>/zcxpagesoficial</span>
                </button>
                <button 
                  onClick={() => window.open("https://tiktok.com/@zcxpages", "_blank")}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="text-lg">🎵</span>
                  <span>@zcxpages</span>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60">
              © 2025 ZcxPages – Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};