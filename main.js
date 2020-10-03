/* The counter in About Page */
const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {
	const updCount = () => {
		const target = counter.getAttribute('data-target');
		const count = +counter.innerText;

		const score =parseInt(target / speed) ;

		if (count < target) {
			counter.innerText =parseInt( count + score);
			setTimeout(updCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	updCount();
});

///////////////////////////////////////////

let images = Array.from(document.querySelectorAll(".container img"));//catch all images

let lightBoxContainer = document.getElementById("lightBox-container");

let lightBoxItem = document.getElementById("lightBox-item");

let prevIcon = document.getElementById("prev");

let nextIcon = document.getElementById("next");

let closeIcon = document.getElementById("close");

let currentSlideIndex = 0;
let imageSrc;

for (let i = 0; i < images.length; i++) {

	images[i].addEventListener("click", openLightBoxContainer);

}

function openLightBoxContainer(eventInfo) {
	currentSlideIndex = images.indexOf(eventInfo.target);
	lightBoxContainer.style.display = "flex";
	imageSrc = eventInfo.target.src;
	lightBoxItem.style.backgroundImage = `url(${imageSrc})`;
}

function getNextimage() {
	currentSlideIndex++;
	if (currentSlideIndex == images.length) {
		currentSlideIndex = 0;
	}
	imageSrc = images[currentSlideIndex].src;
	lightBoxItem.style.backgroundImage = `url(${imageSrc})`;
}

nextIcon.addEventListener("click", getNextimage);

function getLastImage() {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = images.length - 1;
	}
	imageSrc = images[currentSlideIndex].src;
	lightBoxItem.style.backgroundImage = `url(${imageSrc})`;
}

prevIcon.addEventListener("click", getLastImage);

function closeLightBoxContainer() {
	lightBoxContainer.style.display = "none";
}

closeIcon.addEventListener("click", closeLightBoxContainer);
