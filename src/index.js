import pageLoad from "./page-load";

function component() {
	// Load homepage content
	component.append(pageLoad());
}
document.body.append(component());
