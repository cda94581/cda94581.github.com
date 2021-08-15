const { path } = require('@vuepress/utils');

module.exports = {
	lang: 'en-US',
	title: 'cda94581\'s Website',
	description: 'cda94581, hobby YouTuber, Programmer, Add-on Developer; Technical Minecraft Know-how, Minecraft Let\'s Plays, and more.',
	base: '/',
	head: [
		[ 'link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		[ 'script', { async: {}, src: "https://platform.twitter.com/widgets.js", charset: 'utf-8' }],
		[ 'script', { src: 'https://apis.google.com/js/platform.js' }],
	],

	theme: path.resolve(__dirname, './theme/local-theme/index.js'),

	themeConfig: {
		logo: '/images/logo.png',

		markdown: {
			lineNumbers: true
		},

		repo: 'cda94581/website-rewrite',
		docsRepo: 'https://github.com/cda94581/website-rewrite',
		docsBranch: 'source',
		docsDir: 'pages',
		editLink: true,
		editLinkText: 'View Source on GitHub',
		editLinkPattern: ':repo/blob/:branch/:path',
		lastUpdated: true,
		contributors: false,

		navbar: [
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