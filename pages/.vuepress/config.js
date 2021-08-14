module.exports = {
	lang: 'en-US',
	title: 'cda94581\'s Website',
	description: 'cda94581, hobby YouTuber, Programmer, Add-on Developer; Technical Minecraft Know-how, Minecraft Let\'s Plays, and more.',
	base: '/website-rewrite/',
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/images/logo.png' }]
	],

	themeConfig: {
		logo: '/images/logo.png',
		notFound: [
			'Uh oh, I broke something, or you made a typo.'
		],

		repo: 'cda94581/website-rewrite',
		docsRepo: 'https://github.com/cda94581/website-rewrite',
		docsBranch: 'source',
		docsDir: 'pages',
		editLink: true,
		editLinkText: 'View Source',
		editLinkPattern: ':repo/blob/:branch/:path',
		lastUpdated: true,
		contributors: false,

		navbar: [
			{
				text: 'About',
				link: '/about/'
			},
			{
				text: 'Let\'s Plays',
				link: '/lets-plays/'
			},
			{
				text: 'Downloads',
				link: '/downloads/'
			},
			{
				text: 'Videos, Tutorials & Assets',
				link: '/videos/'
			},
			{
				text: 'Unrelated to Content',
				link: '/unrelated/'
			}
		],
		sidebar: 'auto'
	},
}