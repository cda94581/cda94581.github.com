module.exports = {
	lang: 'en-US',
	title: 'cda94581\'s Website',
	description: 'cda94581, hobby YouTuber, Programmer, Add-on Developer; Technical Minecraft Know-how, Minecraft Let\'s Plays, and more.',
	base: '/website-rewrite/',
	head: [
		['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		['script', { async: {}, src: "https://platform.twitter.com/widgets.js", charset: 'utf-8' }]
	],

	themeConfig: {
		logo: '/images/logo.png',

		markdown: {
			lineNumbers: true
		},

		repo: 'cda94581/website-rewrite',
		docsRepo: 'https://github.com/cda94581/website-rewrite',
		docsBranch: 'source',
		docsDir: 'pages',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		editLinkPattern: ':repo/blob/:branch/:path',
		lastUpdated: true,
		contributors: false,

		nav: [
			{
				text: 'About',
				link: '/about'
			},
			{
				text: 'Let\'s Plays',
				link: '/lets-plays'
			},
			{
				text: 'Downloads',
				link: '/downloads'
			},
			{
				text: 'Videos, Tutorials & Assets',
				link: '/videos'
			},
			{
				text: 'Unrelated to Content',
				link: '/unrelated'
			}
		],
		sidebar: 'auto'
	},
}