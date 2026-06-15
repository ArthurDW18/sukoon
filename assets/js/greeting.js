// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │  ├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings with a typewriter effect followed by a paused period

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

let greetingText = '';
if (hour >= 23 || hour < 6) {
	greetingText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
	greetingText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
	greetingText = gree3 + name;
} else {
	greetingText = gree4 + name;
}

const typeWriter = (element, text, speed = 40) => {
	element.innerHTML = '<span id="greeting-text"></span>';
	const textSpan = document.getElementById('greeting-text');
	
	let i = 0;
	const type = () => {
		if (i < text.length) {
			const char = text.charAt(i);
			textSpan.innerText += char;
			i++;
			
			// Natural human speed variations (jitter)
			let delay = speed + (Math.random() * 16 - 8);
			
			// Add natural pauses at punctuation marks
			if (char === ',' || char === '!' || char === '.') {
				delay = 300;
			}
			
			setTimeout(type, delay);
		} else {
			// Finished typing the greeting and name:
			// Pause for 350ms, then append a single period "."
			setTimeout(() => {
				textSpan.innerText += '.';
			}, 350);
		}
	};
	
	type();
};

typeWriter(document.getElementById('greetings'), greetingText, 40);
