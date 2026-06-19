// ┌─┐┌─┐┌┐┐┌─┐┌─┐┌─┐
// └─┐│ │││││ ┬├┤ └─┐
// └─┘└─┘┘└┘└─┘└─┘└─┘
// A minimal, premium startpage
// Edit this file to personalize your startpage.

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Arthur',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Bom Dia,',
	greetingAfternoon: 'Boa Tarde,',
	greetingEvening: 'Boa Noite,',
	greetingNight: 'Boa noite,',

	// Layout
	layout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'f23324aebe1f463075ae77510ab48727', // Get your API key from https://openweathermap.org/
	weatherIcons: 'OneDark', // 'OneDark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'C' or 'F'
	language: 'pt_br', // More languages at https://openweathermap.org/current#multi
	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '0.0',
	defaultLongitude: '0.0',

	// Auto-change theme
	autoChangeTheme: true,

	// Auto-change by OS
	changeThemeByOS: true,

	// Auto-change by hour (24hr format, hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Teams',
			icon: 'microsoft-teams-logo',
			link: 'https://teams.microsoft.com/v2/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'envelope-simple',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'YouTube',
			icon: 'youtube-logo',
			link: 'https://youtube.com/',
		},
		{
			id: '4',
			name: 'Reddit',
			icon: 'hash',
			link: 'https://reddit.com/',
		},
		{
			id: '5',
			name: 'Claude',
			icon: 'robot',
			link: 'https://claude.ai/new',
		},
		{
			id: '6',
			name: 'Discord',
			icon: 'discord-logo',
			link: 'https://discord.com/app',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Spotify',
			icon: 'spotify-logo',
			link: 'https://open.spotify.com/',
		},
		{
			id: '2',
			name: 'Steam',
			icon: 'steam-logo',
			link: 'https://store.steampowered.com/',
		},
		{
			id: '3',
			name: 'UFPR',
			icon: 'graduation-cap',
			link: 'https://ufprvirtual.ufpr.br/',
		},
		{
			id: '4',
			name: 'Teams',
			icon: 'microsoft-teams-logo',
			link: 'https://teams.microsoft.com/v2/',
		},
		{
			id: '5',
			name: 'WhatsApp',
			icon: 'chat-circle',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '6',
			name: 'Sofifa',
			icon: 'soccer-ball',
			link: 'https://sofifa.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	firstlistsContainer: [
		{
			icon: 'graduation-cap',
			id: '1',
			links: [
				{
					name: 'Canva',
					link: 'https://www.canva.com/',
				},
				{
					name: 'UFPR',
					link: 'https://ufprvirtual.ufpr.br/',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com/',
				},
				{
					name: 'WhatsApp',
					link: 'https://web.whatsapp.com/',
				},
			],
		},
		{
			icon: 'game-controller',
			id: '2',
			links: [
				{
					name: 'Steam',
					link: 'https://store.steampowered.com/',
				},
				{
					name: 'Fitgirl',
					link: 'https://fitgirl-repacks.site/',
				},
				{
					name: 'Spotify',
					link: 'https://open.spotify.com/',
				},
				{
					name: 'Sofifa',
					link: 'https://sofifa.com/',
				},
			],
		},
	],

	secondListsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'YouTube Music',
					link: 'https://music.youtube.com/',
				},
				{
					name: 'SoundCloud',
					link: 'https://soundcloud.com/',
				},
				{
					name: 'Bandcamp',
					link: 'https://bandcamp.com/',
				},
				{
					name: 'Last.fm',
					link: 'https://last.fm/',
				},
			],
		},
		{
			icon: 'bookmark',
			id: '2',
			links: [
				{
					name: 'Pocket',
					link: 'https://getpocket.com/',
				},
				{
					name: 'Notion',
					link: 'https://notion.so/',
				},
				{
					name: 'Trello',
					link: 'https://trello.com/',
				},
				{
					name: 'Todoist',
					link: 'https://todoist.com/',
				},
			],
		},
	],
};
