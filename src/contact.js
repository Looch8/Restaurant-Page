import food from "./images/food.avif";

function contact() {
	const CONTENT = document.querySelector("#content");

	const contactHeader = document.createElement("h1");
	const contactDescription = document.createElement("p");
	const contactImage = document.createElement("img");

	contactHeader.textContent = "Contact Page";
	contactDescription.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque officiis soluta in error ad nulla voluptates, esse reiciendis est voluptatibus obcaecati distinctio provident maxime quia. Veniam officiis dicta omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati repellat inventore impedit aliquam est commodi blanditiis quo magni minus, repudiandae quae suntquaerat tempora dolores non voluptatibus eaque eius.";
	contactImage.src = food;
	CONTENT.appendChild(contactHeader);
	CONTENT.appendChild(contactDescription);
	CONTENT.appendChild(contactImage);
}

export default contact;
