(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("h1"),i=document.createElement("p"),n=document.createElement("img");t.textContent="Restaurant Page",i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque officiis soluta in error ad nulla voluptates, esse reiciendis est voluptatibus obcaecati distinctio provident maxime quia. Veniam officiis dicta omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati repellat inventore impedit aliquam est commodi blanditiis quo magni minus, repudiandae quae suntquaerat tempora dolores non voluptatibus eaque eius.",n.src="/src/images/logo.png",e.appendChild(t),e.appendChild(i),e.appendChild(n)},t=document.querySelectorAll("button"),i=document.querySelector("#content");document.body.append((e(),void t.forEach((t=>{t.addEventListener("click",(()=>{i.replaceChildren(),"menu"==t.id?function(){const e=document.querySelector("#content"),t=document.createElement("h1"),i=document.createElement("p"),n=document.createElement("img");t.textContent="Menu Page",i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque officiis soluta in error ad nulla voluptates, esse reiciendis est voluptatibus obcaecati distinctio provident maxime quia. Veniam officiis dicta omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati repellat inventore impedit aliquam est commodi blanditiis quo magni minus, repudiandae quae suntquaerat tempora dolores non voluptatibus eaque eius.",n.src="/src//images/food.avif",e.appendChild(t),e.appendChild(i),e.appendChild(n)}():"contact"==t.id?function(){const e=document.querySelector("#content"),t=document.createElement("h1"),i=document.createElement("p"),n=document.createElement("img");t.textContent="Contact Page",i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque officiis soluta in error ad nulla voluptates, esse reiciendis est voluptatibus obcaecati distinctio provident maxime quia. Veniam officiis dicta omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati repellat inventore impedit aliquam est commodi blanditiis quo magni minus, repudiandae quae suntquaerat tempora dolores non voluptatibus eaque eius.",n.src="/src/images/food.avif",e.appendChild(t),e.appendChild(i),e.appendChild(n)}():"home"==t.id&&e()}))}))))})();