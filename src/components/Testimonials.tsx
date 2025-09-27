import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const testimonialSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  testimonial: z.string().trim().min(10, "Depoimento deve ter pelo menos 10 caracteres").max(1000, "Depoimento muito longo")
});

interface Testimonial {
  id: string;
  name: string;
  email: string;
  testimonial: string;
  date: string;
}

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    testimonial: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Busca depoimentos da API Netlify
    fetch("/.netlify/functions/google-sheet")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(Array.isArray(data) ? data.reverse() : []);
      })
      .catch((err) => {
        console.error("Erro ao buscar depoimentos:", err);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const validatedData = testimonialSchema.parse(formData);
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        name: validatedData.name,
        email: validatedData.email,
        testimonial: validatedData.testimonial,
        date: new Date().toLocaleDateString("pt-BR"),
      };
      // Envia para a API Netlify
      const res = await fetch("/.netlify/functions/google-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTestimonial),
      });
      if (res.ok) {
        setTestimonials([newTestimonial, ...testimonials]);
        setFormData({ name: "", email: "", testimonial: "" });
        toast({
          title: "Obrigado!",
          description: "Seu depoimento foi enviado com sucesso."
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro ao enviar seu depoimento.",
          variant: "destructive"
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.issues[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro ao enviar seu depoimento.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
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

        {/* Formulário de depoimento */}
        <div className="max-w-2xl mx-auto mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle>Deixe seu depoimento</CardTitle>
              <CardDescription>
                Compartilhe sua experiência conosco
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="testimonial">Depoimento *</Label>
                  <Textarea
                    id="testimonial"
                    value={formData.testimonial}
                    onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                    placeholder="Conte-nos sobre sua experiência..."
                    rows={4}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full transform hover:scale-105 transition-all duration-300" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar depoimento"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Lista de depoimentos */}
        {testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="card-hover animate-fade-in" 
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.testimonial}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {testimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Seja o primeiro a deixar um depoimento!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};