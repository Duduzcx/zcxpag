import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
        {/* Título */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Por que escolher a{" "}
            <motion.span
              className="text-gradient"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            >
              ZcxPages
            </motion.span>?
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oferecemos soluções completas com qualidade e agilidade para seu negócio
          </motion.p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-card border card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Ícone animado */}
                <motion.div
                  className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, 12, 0],
                    rotate: [0, 0, 0],
                    scale: [1, 1.15, 1],
                    opacity: [1, 1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Check className="h-5 w-5 text-white" />
                </motion.div>

                {/* Texto */}
                <p className="text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
