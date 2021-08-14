import { defineClientAppEnhance } from '@vuepress/client';
import TwitchChannel from './Components/TwitchChannel.vue';
import TwitterFollow from './Components/TwitterFollow.vue';
import TwitterTimeline from './Components/TwitterTimeline.vue';
import YouTubeVideo from './Components/YouTubeVideo.vue';
import css from './Styles/css.css';

export default defineClientAppEnhance(({ app, router, siteData }) => {
	app.component('TwitchChannel', TwitchChannel);
	app.component('TwitterFollow', TwitterFollow);
	app.component('TwitterTimeline', TwitterTimeline);
	app.component('YouTubeVideo', YouTubeVideo);
});