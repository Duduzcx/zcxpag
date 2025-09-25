import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

export const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511921562675?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site.", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para começar seu projeto? Fale conosco agora mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Nossas informações</h3>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-muted-foreground">(11) 92156-2675</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">contato@zcxpages.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-muted-foreground">@zcxpages</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
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
              className="w-full sm:w-auto" 
              onClick={openWhatsApp}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Informações adicionais */}
          <div className="space-y-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">Fale conosco agora!</CardTitle>
                <CardDescription className="text-center">
                  Clique no botão do WhatsApp para conversar diretamente
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg" 
                  className="w-full" 
                  onClick={openWhatsApp}
                >
                  Iniciar conversa no WhatsApp
                </Button>
              </CardContent>
            </Card>
            
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
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