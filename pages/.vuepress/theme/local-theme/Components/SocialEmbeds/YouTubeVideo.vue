<template>
	<div class="yt-ttv">
		<iframe
			:src="`https://www.youtube.com/embed/${id}`"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			class="yt-ttv"
		/>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	id: string
}>()
</script>