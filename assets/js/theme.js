//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and Preferences

let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');

const enableDark = () => {
	document.documentElement.classList.add('darktheme');
	localStorage.setItem('darkTheme', 'enabled');
	themeToggle.innerHTML = `<i id="themeIcon" class="ph ph-sun"></i>`;
};

const disableDark = () => {
	document.documentElement.classList.remove('darktheme');
	localStorage.setItem('darkTheme', 'disabled');
	themeToggle.innerHTML = `<i id="themeIcon" class="ph ph-moon"></i>`;
};

const initTheme = () => {
	let isDark = false;
	
	if (darkTheme === 'enabled') {
		isDark = true;
	} else if (darkTheme === 'disabled') {
		isDark = false;
	} else {
		if (CONFIG.autoChangeTheme) {
			if (CONFIG.changeThemeByOS) {
				isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			} else if (CONFIG.changeThemeByHour && !CONFIG.changeThemeByOS) {
				const date = new Date();
				const hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString();
				const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
				const currentTime = hours + ':' + minutes;
				if (currentTime >= CONFIG.hourDarkThemeActive) {
					isDark = true;
				} else if (currentTime >= CONFIG.hourDarkThemeInactive) {
					isDark = false;
				}
			}
		}
	}
	
	if (isDark) {
		document.documentElement.classList.add('notransition');
		enableDark();
		document.documentElement.classList.remove('notransition');
	} else {
		disableDark();
	}
};

initTheme();

themeToggle.addEventListener('click', () => {
	if (document.documentElement.classList.contains('darktheme')) {
		disableDark();
	} else {
		enableDark();
	}
});

if (CONFIG.imageBackground) {
	document.body.classList.add('withImageBackground');
}
