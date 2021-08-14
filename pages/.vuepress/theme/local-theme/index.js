const { path } = require('@vuepress/utils');

const localTheme = {
	name: 'local-theme',
	extends: '@vuepress/theme-default',
	clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js')
}

module.exports = localTheme;