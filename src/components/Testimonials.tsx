import { motion } from "framer-motion";
import comentario1 from "@/assets/comentario1.JPG";
import comentario2 from "@/assets/comentario2.JPG";
import maria from "@/assets/maria.png";
import carlos from "@/assets/carlos.jpg";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <motion.span
              className="text-gradient"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            >
              Depoimentos
            </motion.span> dos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes falam sobre nosso trabalho
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <div className="mb-4">
              <img src={maria} alt="Foto de Maria S." loading="lazy" className="w-28 h-28 rounded-full object-cover border-4 border-primary/30 shadow" />
            </div>
            <p className="text-lg text-gray-700 italic mb-2">“Ótimo atendimento, site ficou lindo e rápido! Recomendo demais.”</p>
            <span className="font-semibold text-primary">Maria S.</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <div className="mb-4">
              <img src={carlos} alt="Foto de Carlos M." loading="lazy" className="w-28 h-28 rounded-full object-cover border-4 border-primary/30 shadow" />
            </div>
            <p className="text-lg text-gray-700 italic mb-2">“Profissionalismo e agilidade! Meu site ficou perfeito para meu negócio.”</p>
            <span className="font-semibold text-primary">Carlos M.</span>
          </div>
        </div>

        {/* Imagens dos comentários em destaque */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <img
            src={comentario1}
            alt="Comentário 1"
            loading="lazy"
            className="w-80 max-w-full rounded-2xl shadow-lg border-2 border-primary/20 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
          <img
            src={comentario2}
            alt="Comentário 2"
            loading="lazy"
            className="w-80 max-w-full rounded-2xl shadow-lg border-2 border-primary/20 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};