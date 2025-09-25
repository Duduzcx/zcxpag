import { Check } from "lucide-react";

const benefits = [
  "Design moderno e personalizado",
  "Sites responsivos (funcionam em celular, tablet e PC)",
  "Entrega rápida e suporte dedicado", 
  "Conexão direta com WhatsApp, Instagram e redes sociais",
  "Planos acessíveis para diferentes negócios"
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="text-gradient">ZcxPages</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas com qualidade e agilidade para seu negócio
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-card border card-hover">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};