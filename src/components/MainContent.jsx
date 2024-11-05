import React from "react";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Education from "./Sections/Education";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

function MainContent() {
	return (
		<main className=" p-20 pr-60">
			<About />
			<Skills />
			<Experience />
			<Education />
			<Projects />
		</main>
	);
}

export default MainContent;
