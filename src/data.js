// Ikoner
import { FiMail } from "react-icons/fi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

// --- Bilder ---
// utbildning
import teknikum from "/images/Teknikum.jpg";
import ec from "/images/ec.jpg";
// erfarenhet
import atea from "/images/atea.jpg";
import abli from "/images/ABLI-AB.jpg";
import xedrix from "/images/xedrix.png";
//projekt
import trendfusion from "/images/trendFusionThumb.png";
import angularblog from "/images/AngularBlogThumb.png";

export const contactLinks = [
	{ url: "mailto:Johan.nyman.dev@gmail.com", icon: FiMail },
	{ url: "https://github.com/Nyman556", icon: BsGithub },
	{
		url: "https://www.linkedin.com/in/johan-nyman-b574831bb/",
		icon: BsLinkedin,
	},
];

export const EducationData = [
	{
		institution: "EC Yrkeshögskola",
		imgSrc: ec,
		logoAlt: "EC Yrkeshögskola logo",
		program: "Frontend Development",
		location: "Växjö",
		startDate: "mars 2023",
		endDate: "Pågående",
		graduation: "24 Jan 2025",
		courses: [
			{ name: "HTML och CSS", credits: 35 },
			{ name: "JavaScript 1", credits: 40 },
			{ name: "JavaScript 2", credits: 35 },
			{ name: "JavaScript 3", credits: 35 },
			{ name: "UX & UI", credits: 25 },
			{ name: "Backend-utveckling 1", credits: 30 },
			{ name: "Backend-utveckling 2", credits: 35 },
			{ name: "LIA 1 Frontendutveckling", credits: 60 },
			{ name: "Agila Projektmetoder 2", credits: 20 },
			{ name: "Examensarbete", credits: 20 },
			{ name: "LIA 1 Frontendutveckling", credits: 65 },
		],
	},
	{
		institution: "Teknikum",
		imgSrc: teknikum,
		logoAlt: "teknikum logo",
		program:
			"El- och energiprogrammet inriktning Dator- och kommunikationsteknik",
		location: "Växjö",
		startDate: "juni 2013",
		endDate: "juni 2016",
		courses: [
			{ name: "Nätverksteknologier", credits: 100 },
			{ name: "Nätverksadministration", credits: 100 },
			{
				name: "Administration av nätverks- och serverutrustning",
				credits: 100,
			},
			{ name: "Dator- och nätverksteknik", credits: 100 },
			{ name: "Datorsamordning och support", credits: 100 },
			{ name: "Engelska 5", credits: 100 },
			{ name: "Kommunikationsnät 1", credits: 100 },
			{ name: "Mekatronik 1", credits: 100 },
			{ name: "Nätverkssäkerhet", credits: 100 },
			{ name: "Datorteknik 1a", credits: 100 },
			{ name: "Elektronik och mikrodatorteknik", credits: 100 },
			{ name: "Elektromekanik", credits: 100 },
			{ name: "Energiteknik 1", credits: 100 },
			{ name: "Engelska 6", credits: 100 },
			{ name: "Gymnasiearbete", credits: 100 },
			{ name: "Historia 1a1", credits: 50 },
			{ name: "Matematik 1a", credits: 100 },
			{ name: "Naturkunskap 1a1", credits: 50 },
			{ name: "Nätverksteknik", credits: 100 },
			{ name: "Programmering 1", credits: 100 },
			{ name: "Religionskunskap 1", credits: 50 },
			{ name: "Samhällskunskap 1a1", credits: 50 },
			{ name: "Service och reparationsarbete", credits: 100 },
			{ name: "Svenska 1", credits: 100 },
			{ name: "Svenska 2", credits: 100 },
			{ name: "Idrott och hälsa 1", credits: 100 },
			{ name: "Svenska 3", credits: 100 },
		],
	},
];

export const ExperienceData = [
	{
		title: "Frontend Utvecklare - Praktik",
		imgSrc: xedrix,
		company: "XeDrix",
		location: " Växjö",
		startDate: "okt. 2024",
		endDate: "Pågående",
		tasks: [
			"Utvecklar och designar flera WordPress-sidor med fokus på både funktionalitet och visuell estetik.",
			"Skapar en automatiserad leadhanteringslösning som integrerar ett CRM-system för effektiv kundhantering.",
			"Bidrar till optimering av användargränssnittet baserat på användartester och feedback.",
		],
		tags: ["Wordpress", "PHP", "Analytics", "Design", "Figma"],
	},
	{
		title: "Fullstack Utvecklare - Praktik",
		imgSrc: abli,
		company: "Abli AB",
		location: " Växjö",
		startDate: "apr. 2024",
		endDate: "juni 2024",
		tasks: [
			"Deltog i utvecklingen av en ny plattform, inklusive implementation av nya funktioner och optimering av befintliga.",
			"Skapade wireframes och prototyper i Figma för att förbättra användarupplevelsen.",
			"Arbetade med backendutveckling i .NET och C#, med fokus på databasintegrering och API-utveckling.",
		],
		tags: ["Next.js", "React", "Typescript", "dotnet", "C#", "Design", "Figma"],
	},
	{
		title: "Tekniker",
		imgSrc: atea,
		company: "Atea Logistics",
		location: "Växjö",
		startDate: "juni 2016",
		endDate: "Pågående",
		tasks: [
			"Installation och konfigurering av teknisk hårdvara",
			"Konfigurering av mjukvara och firmware-uppdateringar",
			"Felsökning av teknisk utrustning",
			"Lagerarbete så som packning av hårdvara",
		],
		tags: [
			"Installation",
			"Konfigurering",
			"Teknisk Hårdvara",
			"Lagerarbete",
			"Support",
		],
	},
];

export const skillsData = [
	{
		category: "Språk",
		skills: ["javascript", "typescript", "c#", "PHP"],
		bgColor: "bg-blue-500",
	},
	{
		category: "Ramverk",
		skills: ["react", "nextJS", "vite", "angular", "expressJS", "tailwindCSS"],
		bgColor: "bg-green-500",
	},
	{
		category: "backend",
		skills: ["Node.js", ".NET", "REST API", "Firebase"],
		bgColor: "bg-purple-500",
	},
	{
		category: "Databaser",
		skills: ["postgres", "SQL", "mongoDB"],
		bgColor: "bg-red-500",
	},
	{
		category: "Metoder",
		skills: ["agilt", "Git"],
		bgColor: "bg-yellow-500",
	},
];

export const ProjectsData = [
	{
		title: "Trendfusion: React E-handel",
		features: [
			"Byggde en fullständig e-handelsapplikation med React för frontend och Strapi som headless CMS.",
			"Implementerade produktkatalog, filtrering, kundkorg och checkout-funktionalitet.",
			"Använde TailwindCSS för att skapa en modern och responsiv design.",
		],
		techStack: ["javascript", "react", "tailwindCSS", "strapi"],
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
