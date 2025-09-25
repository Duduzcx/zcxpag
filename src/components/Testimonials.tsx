import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("zcx-testimonials");
    if (saved) {
      setTestimonials(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.testimonial.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      testimonial: formData.testimonial.trim(),
      date: new Date().toLocaleDateString("pt-BR")
    };

    const updatedTestimonials = [newTestimonial, ...testimonials];
    setTestimonials(updatedTestimonials);
    localStorage.setItem("zcx-testimonials", JSON.stringify(updatedTestimonials));
    
    setFormData({ name: "", email: "", testimonial: "" });
    
    toast({
      title: "Obrigado!",
      description: "Seu depoimento foi enviado com sucesso."
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Depoimentos</span> dos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes falam sobre nosso trabalho
          </p>
        </div>


        {/* Lista de depoimentos */}
        {testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-hover">
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
                  <p className="text-gray-700">{testimonial.testimonial}</p>
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