document.getElementById("colorswap").addEventListener("change", function() {
	document.body.classList.toggle("dark");
});

const CenaModeSwitch = document.getElementById("colorswap");
const audio = document.getElementById("myAudio");

CenaModeSwitch.addEventListener("change", function() {
	if (this.checked) {
		audio.play();
		audio.loop = true;
		audio.volume = 0.4;
	} else {
		audio.pause();
		audio.loop = false;
	}
});

let button = document.querySelector(".btn-primary");
button.addEventListener("mouseenter", enterMouse);
button.addEventListener("mouseleave", leaveMouse);

function enterMouse() {
	button.textContent = "Send your worst message";
}

function leaveMouse() {
	button.textContent = "";
	const messages = [
		"Come on, don't be shy!",
		"Don't be shy, your message rocks!",
		"You can do it! We believe in you!",
		"Take a deep breath you sissy and hit send!",
		"Your message is going to be amazing, we just know it!",
		"The boxing world needs to know your message!",
	];
	const randomInsults = Math.floor(Math.random() * messages.length);
	button.textContent = messages[randomInsults];
}


let form = document.getElementById("message-form");
let note = document.getElementById("message");
let checkbox = document.getElementById("important");
let messageHistory = document.getElementById("message-history");
let nameInput = document.getElementById("name");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	let h3 = document.createElement("h3");
	let p = document.createElement("p");
	let name = document.createElement("nametag");
	name.textContent = nameInput.value + ": ";
	p.textContent = note.value;

	if (checkbox.checked) {
		h3.classList.add("important");
		p.classList.add("important");
	}
	h3.append(name);
	messageHistory.append(h3, p, document.createElement("hr"));

	note.value = "";
	nameInput.value = "";
	checkbox.checked = false;
});