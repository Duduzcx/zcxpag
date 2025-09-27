import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

export const Hero = () => {
  const openWhatsApp = () => {
  window.open("https://wa.me/5511921572675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site.", "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Destaque do site"
  className="absolute inset-0 w-full h-full object-cover object-center left-0 top-0 -z-10"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
  style={{ minHeight: '100%', minWidth: '100%', left: 0, right: 0, margin: '0 auto' }}
        initial={{ filter: 'blur(0px) brightness(1)', y: 0 }}
        animate={{
          filter: [
            'blur(0px) brightness(1)',
            'blur(2.5px) brightness(1.08)',
            'blur(0px) brightness(1)'
          ],
          y: [0, -4, 0, 4, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white animate-fade-in">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: [1, 1, 1, 1, 1, 1],
            y: [0, -6, 0, 6, 0]
          }}
          transition={{
            times: [0, 0.2, 0.5, 0.8, 1],
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          Transforme suas ideias em{" "}
          <motion.span
            className="text-gradient"
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            sites profissionais
          </motion.span>{" "}
          que vendem!
        </motion.h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200 animate-slide-up" style={{animationDelay: '0.4s'}}>
          Landing pages, sites institucionais e lojas virtuais criados sob medida 
          para destacar o seu negócio online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <motion.button
            type="button"
            className="bg-primary hover:bg-primary-dark text-lg px-8 py-4 h-auto rounded-md font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/60 transform transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: [
              '0 4px 24px 0 rgba(56,135,246,0.18)',
              '0 8px 32px 0 rgba(56,135,246,0.28)',
              '0 4px 24px 0 rgba(56,135,246,0.18)'
            ] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            onClick={openWhatsApp}
          >
            Quero meu site agora
          </motion.button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 bg-transparent text-white hover:bg-white hover:text-primary hover:border-white text-lg px-8 py-4 h-auto transition-all duration-300 transform hover:scale-105"
            onClick={scrollToServices}
          >
            Ver serviços
          </Button>
          {/* Seta removida, mantendo apenas a da parte inferior */}
        </div>
      </div>
      
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bottom-16" onClick={scrollToServices}>
        <ArrowDown className="h-8 w-8 text-white/70 hover:text-white transition-colors" />
      </div>
    </section>
  );
};