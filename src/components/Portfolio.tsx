import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import advocaciaImg from "@/assets/advocacia.JPG";
import portifolioImg from "@/assets/portifolio.JPG";
import propeImg from "@/assets/prope.JPG";
import sabornordestinoImg from "@/assets/sabornordestino.JPG";
import barberproImg from "@/assets/barberpro.JPG";
import { motion } from "framer-motion";

const projects = [
	{
		title: "ZcxPages Portfolio",
		url: "https://zcxpages.netlify.app",
		description: "Nosso portfólio oficial com exemplos de projetos e design moderno",
	},
	{
		title: "Pro P. Podologia",
		url: "https://propepodologia.com",
		description: "Site institucional para clínica de podologia com agendamento online",
	},
	{
		title: "Advocacia S.A.",
		url: "https://advocaciasa.netlify.app",
		description: "Landing page profissional para escritório de advocacia",
	},
	{
		title: "Sabor Nordestino",
		url: "https://sabornordestino.netlify.app",
		description: "Restaurante de comidas típicas nordestinas.",
	},
	{
		title: "BarberPro",
		url: "https://barberproo.netlify.app",
		description: "Loja online que vende produtos para barbearias profissionais.",
	},
];

export const Portfolio = () => {
	return (
		<section id="portfolio" className="py-20 bg-secondary/50">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Nosso{" "}
									<motion.span
										className="text-gradient"
										animate={{ scale: [1, 1.07, 1] }}
										transition={{ duration: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
									>
										Portfólio
									</motion.span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Conheça alguns dos projetos que já desenvolvemos para nossos clientes
					</p>
				</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{projects.map((project, index) => {
										// Atribui a imagem local respectiva
										let bgImage: string | undefined = undefined;
										if (project.title === "ZcxPages Portfolio") bgImage = portifolioImg;
										if (project.title === "Pro P. Podologia") bgImage = propeImg;
										if (project.title === "Advocacia S.A.") bgImage = advocaciaImg;
										if (project.title === "Sabor Nordestino") bgImage = sabornordestinoImg;
										if (project.title === "BarberPro") bgImage = barberproImg;
										return (
																	<motion.div
																		key={index}
																		initial={{ opacity: 0, y: 40, scale: 0.96 }}
																		whileInView={{ opacity: 1, y: 0, scale: 1 }}
																		whileTap={{ scale: 0.96 }}
																		transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
																		viewport={{ once: true, amount: 0.2 }}
																		className="relative"
																	>
												<Card
													className="card-hover border-none flex flex-col justify-center items-center p-6 min-h-[260px] transition-all duration-700 ease-in-out relative overflow-hidden group"
													style={{
														background: bgImage ? `url('${bgImage}') center/cover no-repeat` : undefined,
														color: bgImage ? '#fff' : undefined,
													}}
												>
													{bgImage && <div className="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/40 transition-all duration-500" />}
													<motion.div
														className="relative z-10 w-full"
														whileHover={{ scale: 1.03, rotate: -1 }}
														transition={{ type: "spring", stiffness: 200, damping: 15 }}
													>
														<CardHeader className="backdrop-blur-sm bg-black/60 rounded-lg p-4 shadow-lg">
															<CardTitle className="text-xl text-white drop-shadow-md">{project.title}</CardTitle>
															<CardDescription className="text-base text-white/90 drop-shadow-md">
																{project.description}
															</CardDescription>
														</CardHeader>
														<CardContent>
															<Button
																variant="outline"
																className="w-full transform hover:scale-105 transition-all duration-300 bg-primary text-white border-none hover:bg-white hover:text-primary focus:bg-white focus:text-primary"
																onClick={() => window.open(project.url, "_blank")}
															>
																Ver projeto
																<ExternalLink className="ml-2 h-4 w-4" />
															</Button>
														</CardContent>
													</motion.div>
												</Card>
											</motion.div>
										);
									})}
				</div>
			</div>
		</section>
	);
};