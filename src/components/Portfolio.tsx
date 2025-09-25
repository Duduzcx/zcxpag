import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Pro P. Podologia",
    url: "https://propepodologia.com",
    description: "Site institucional para clínica de podologia com agendamento online"
  },
  {
    title: "Advocacia S.A.",
    url: "https://advocaciasa.netlify.app",
    description: "Landing page profissional para escritório de advocacia"
  },
  {
    title: "Sabor Nordestino",
    url: "https://sabornordestino.netlify.app", 
    description: "E-commerce para produtos típicos nordestinos"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que já desenvolvemos para nossos clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-none">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  Ver projeto
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};