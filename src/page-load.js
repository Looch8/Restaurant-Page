function pageLoad() {
	const content = document.querySelector("#content");

	const H1 = document.createElement("h1");
	const P = document.createElement("p");
	const IMG = document.createElement("img");

	H1.textContent = "Restaurant Page";
	P.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque officiis soluta in error ad nulla voluptates, esse reiciendis est voluptatibus obcaecati distinctio provident maxime quia. Veniam officiis dicta omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati repellat inventore impedit aliquam est commodi blanditiis quo magni minus, repudiandae quae suntquaerat tempora dolores non voluptatibus eaque eius.";
	IMG.src = "/src/logo.png";
	content.appendChild(H1);
	content.appendChild(P);
	content.appendChild(IMG);
}

export default pageLoad;
