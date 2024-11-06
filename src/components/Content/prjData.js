import trendfusion from "/images/trendFusionThumb.png";
import angularblog from "/images/AngularBlogThumb.png";

export const ProjectsData = [
	{
		title: "Trendfusion: React E-handel",
		features: [
			"Byggde en fullständig e-handelsapplikation med React för frontend och Strapi som headless CMS.",
			"Implementerade produktkatalog, filtrering, kundkorg och checkout-funktionalitet.",
			"Använde TailwindCSS för att skapa en modern och responsiv design.",
		],
		techStack: ["javascript", "strapi", "react", "tailwindCSS"],
		githubLink: "https://github.com/Nyman556/React-ecommerce",
		liveDemoLink: "",
		image: trendfusion,
	},
	{
		title: "Angular Blogg-projekt",
		features: [
			"Ett bloggprojekt byggt som del av ett skolarbete. Projektet har två olika vyer: användar- och adminvy",
			"Användarvyn visar blogginlägg med information som titel, författare, datum och innehåll, och låter användare navigera mellan olika inlägg.",
			"Adminvyn ger administratörer möjlighet att skapa nya inlägg och är skyddad för att endast behöriga ska kunna hantera innehållet.",
		],
		techStack: ["typescript", "angular", "daisyui"],
		githubLink: "https://github.com/Nyman556/Angular-blog",
		liveDemoLink: "",
		image: angularblog,
	},
];
