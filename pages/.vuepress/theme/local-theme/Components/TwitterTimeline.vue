<template>
	<div>
		<a class="twitter-timeline" data-width="220" data-height="440" :href="`https://twitter.com/${id}?ref_src=twsrc%5Etfw`">Tweets by {{id}}</a>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	id: string
}>()
</script>