function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

const bodyColor = () => {
	document.body.style.backgroundColor = getRandomHexColor();
	color.textContent = `${getRandomHexColor()}`;

	console.log(getRandomHexColor());
};

changeColor.addEventListener("click", bodyColor);