import { defineClientAppEnhance } from '@vuepress/client';
import TwitchChannel from './Components/SocialEmbeds/TwitchChannel.vue';
import TwitterFollow from './Components/SocialEmbeds/TwitterFollow.vue';
import TwitterTimeline from './Components/SocialEmbeds/TwitterTimeline.vue';
import YouTubeVideo from './Components/SocialEmbeds/YouTubeVideo.vue';
import css from './Styles/css.css';

export default defineClientAppEnhance(({ app, router, siteData }) => {
	app.component('TwitchChannel', TwitchChannel);
	app.component('TwitterFollow', TwitterFollow);
	app.component('TwitterTimeline', TwitterTimeline);
	app.component('YouTubeVideo', YouTubeVideo);
});