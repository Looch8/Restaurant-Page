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

//  create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.

// Now remove everything inside div#content from the HTML (so you still have the <header> and <nav> with an empty <div id="content"> below it) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js. -->
