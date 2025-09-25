import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511921562675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site.", "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
          Transforme suas ideias em{" "}
          <span className="text-gradient">sites profissionais</span>{" "}
          que vendem!
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200 animate-slide-up" style={{animationDelay: '0.4s'}}>
          Landing pages, sites institucionais e lojas virtuais criados sob medida 
          para destacar o seu negócio online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-300"
            onClick={openWhatsApp}
          >
            Quero meu site agora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 bg-transparent text-white hover:bg-white hover:text-primary hover:border-white text-lg px-8 py-4 h-auto transition-all duration-300 transform hover:scale-105"
            onClick={scrollToServices}
          >
            Ver serviços
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToServices}>
        <ArrowDown className="h-8 w-8 text-white/70 hover:text-white transition-colors" />
      </div>
    </section>
  );
};