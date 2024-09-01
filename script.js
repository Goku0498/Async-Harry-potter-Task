let background = document.createElement("div");
background.className = "background";

let content = document.createElement("div");
content.className = "content";

let homepage = document.createElement("div");
homepage.innerHTML = `
  <h1>Welcome to Potterpedia</h1>
  <p>Potterpedia is your gateway to the enchanting world of Harry Potter. Dive deep into the magical universe created by J.K. Rowling, where you can explore detailed profiles of every beloved character, from the students of Hogwarts to the esteemed members of its staff. Whether you're curious about Harry, Hermione, Dumbledore, or Snape, you'll find all the information you need right here.</p>
  <p>But that's not all—Potterpedia also serves as a comprehensive guide to the spells that define the wizarding world. Discover the secrets behind iconic incantations, learn the stories of how they were created, and understand their effects and uses.</p>
  <p>Whether you're a seasoned Potterhead or a newcomer to the series, Potterpedia is your ultimate resource for everything related to the characters and magic of Harry Potter. Join us, and let the magic unfold!</p>`;
homepage.className = "homepage";

let character = document.createElement("div");
character.innerHTML = `<a href="student.html"><button class="buttons">Students</button></a>
<a href="staffs.html"><button class="buttons">Staffs</button></a>
<a href="spell.html"><button class="buttons">Spells</button></a>`
character.className = "character";

content.appendChild(homepage);
content.appendChild(character);

document.body.append(background);
document.body.append(content);
