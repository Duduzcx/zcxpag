import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

export const Contact = () => {
  const openWhatsApp = () => {
  window.open("https://wa.me/5511921572675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site.", "_blank");
  };

  const openEmail = () => {
    window.open("mailto:zcxpages@gmail.com?subject=Interesse em criar um site&body=Olá! Gostaria de saber mais sobre a criação de um site.", "_blank");
  };

  const openInstagram = () => {
    window.open("https://instagram.com/zcxpages", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <motion.span
              className="text-gradient"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            >
              Contato
            </motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para começar seu projeto? Fale conosco agora mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Nossas informações</h3>
              
              <button 
                onClick={openWhatsApp}
                className="flex items-center space-x-4 w-full p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold group-hover:text-primary transition-colors">WhatsApp</p>
                  <p className="text-muted-foreground">(11) 92156-2675</p>
                </div>
              </button>

              <button 
                onClick={openEmail}
                className="flex items-center space-x-4 w-full p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold group-hover:text-primary transition-colors">Email</p>
                  <p className="text-muted-foreground">zcxpages@gmail.com</p>
                </div>
              </button>

              <button 
                onClick={openInstagram}
                className="flex items-center space-x-4 w-full p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold group-hover:text-primary transition-colors">Instagram</p>
                  <p className="text-muted-foreground">@zcxpages</p>
                </div>
              </button>

              <div className="flex items-center space-x-4 p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Localização</p>
                  <p className="text-muted-foreground">São Paulo - SP</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300" 
              onClick={openWhatsApp}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Informações adicionais */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-center">Fale conosco agora!</CardTitle>
                <CardDescription className="text-center">
                  Clique no botão do WhatsApp para conversar diretamente
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg" 
                  className="w-full transform hover:scale-105 transition-all duration-300" 
                  onClick={openWhatsApp}
                >
                  Iniciar conversa no WhatsApp
                </Button>
              </CardContent>
            </Card>
            
            <div className="text-center p-6 bg-secondary/30 rounded-lg transform hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2">Horário de atendimento</h4>
              <p className="text-muted-foreground">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 12h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};