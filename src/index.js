import pageLoad from "./page-load";
import menu from "./menu";
import contact from "./contact";

const buttons = document.querySelectorAll("button");
const CONTENT = document.querySelector("#content");

function component() {
	// Load homepage content
	pageLoad();

	// Render following modules based on button click
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			CONTENT.replaceChildren();
			if (button.id == "menu") {
				menu();
			} else if (button.id == "contact") {
				contact();
			} else if (button.id == "home") {
				pageLoad();
			}
		});
	});
}

component();
