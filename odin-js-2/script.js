const content =  document.querySelector(".content");

const paragrath_1 = document.createElement("p")
const paragrath_2 = document.createElement("p")
const header_1 = document.createElement("h1")
const header_3 = document.createElement("h3")
const div = document.createElement("div")


paragrath_1.style.color = 'red'
paragrath_1.textContent = 'Hey I’m red!'
header_3.style.color = 'blue'
header_3.textContent = 'I’m a blue h3!'
div.setAttribute('style', 'border: 1px solid black; background: pink;');
header_1.textContent = 'I’m in a div'
paragrath_2.textContent = 'ME TOO!'

content.appendChild(paragrath_1);
content.appendChild(header_3);
content.appendChild(div);

div.appendChild(header_1)
div.appendChild(paragrath_2);
