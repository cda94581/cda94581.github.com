import DefaultTheme from 'vitepress/theme';
import TwitchChannel from './Components/TwitchChannel.vue';
import TwitterFollow from './Components/TwitterFollow.vue';
import TwitterTimeline from './Components/TwitterTimeline.vue';
import YouTubeVideo from './Components/YouTubeVideo.vue';
import css from './Styles/css.css';

export default {
	...DefaultTheme,
	enhanceApp({ app, router, siteData }) {
		app.component('TwitchChannel', TwitchChannel);
		app.component('TwitterFollow', TwitterFollow);
		app.component('TwitterTimeline', TwitterTimeline);
		app.component('YouTubeVideo', YouTubeVideo);
	}
}