import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, TrendingUp, ShoppingCart, Settings } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Landing Pages de alta conversão",
    description: "Páginas criadas para captar clientes e gerar vendas.",
    emoji: "💻"
  },
  {
    icon: TrendingUp,
    title: "Sites institucionais",  
    description: "Apresente sua marca com credibilidade e estilo.",
    emoji: "📈"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce e catálogos online",
    description: "Venda seus produtos de forma simples e prática.",
    emoji: "🛒"
  },
  {
    icon: Settings,
    title: "Manutenção e otimização",
    description: "Suporte contínuo para manter seu site sempre atualizado.",
    emoji: "🔧"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Serviços <span className="text-gradient">Oferecidos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em desenvolvimento web para fazer seu negócio crescer online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-none">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.emoji}</div>
                <service.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};