import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, TrendingUp, ShoppingCart, Settings } from "lucide-react";

const services = [
	{
		icon: Monitor,
		title: "Landing Pages de alta conversão",
		description: "Páginas criadas para captar clientes e gerar vendas.",
	},
	{
		icon: TrendingUp,
		title: "Sites institucionais",
		description: "Apresente sua marca com credibilidade e estilo.",
	},
	{
		icon: ShoppingCart,
		title: "E-commerce e catálogos online",
		description: "Venda seus produtos de forma simples e prática.",
	},
	{
		icon: Settings,
		title: "Manutenção e otimização",
		description: "Suporte contínuo para manter seu site sempre atualizado.",
	},
];

export const Services = () => {
	return (
		<section id="services" className="py-20 bg-secondary/50 animate-fade-in">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
						Serviços{" "}
						<span className="text-gradient">Oferecidos</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
						Soluções completas em desenvolvimento web para fazer seu negócio crescer
						online
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<Card
							key={index}
							className="card-hover border-none flex flex-col justify-center items-center p-6 min-h-[260px] transition-all duration-700 ease-in-out opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-in-out_forwards]"
							style={{ animationDelay: `${0.2 * (index + 1)}s` }}
						>
							<CardHeader className="text-center pb-4 flex flex-col items-center justify-center">
								<service.icon className="h-10 w-10 text-blue-500 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
								<CardTitle className="text-xl text-center animate-slide-up">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-center text-base animate-fade-in">
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