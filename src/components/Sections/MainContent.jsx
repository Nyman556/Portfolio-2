import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function MainContent() {
	return (
		<main className="pt-20">
			<About />
			<Skills />
			<Experience />
			<Education />
			<Projects />
		</main>
	);
}

export default MainContent;
