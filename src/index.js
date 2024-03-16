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

document.body.append(component());

// Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at the behavior of this student’s live preview site for visual inspiration.

// Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

// Write the tab-switching logic inside of index.js. You should have event listeners for each button in the header navbar that wipes out the current contents of div#content and then runs the correct ‘tab module’ to populate it with the new contents again.
