<template>
	<div class="yt-ttv">
		<iframe
			:src="`https://player.twitch.tv/?channel=${id}&parent=localhost`"
			frameborder="0"
			allowfullscreen="true"
			scrolling="no"
			class="yt-ttv"
		/>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	id: string
}>()
</script>