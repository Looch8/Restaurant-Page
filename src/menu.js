function menu() {
	const CONTENT = document.querySelector("#content");

	const menuHeader = document.createElement("h1");
	const menuDescription = document.createElement("p");
	const menuImage = document.createElement("img");

	menuHeader.textContent = "Menu Page";
	menuDescription.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque officiis soluta in error ad nulla voluptates, esse reiciendis est voluptatibus obcaecati distinctio provident maxime quia. Veniam officiis dicta omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati repellat inventore impedit aliquam est commodi blanditiis quo magni minus, repudiandae quae suntquaerat tempora dolores non voluptatibus eaque eius.";
	menuImage.src = "/src//images/food.avif";
	CONTENT.appendChild(menuHeader);
	CONTENT.appendChild(menuDescription);
	CONTENT.appendChild(menuImage);
}

export default menu;
