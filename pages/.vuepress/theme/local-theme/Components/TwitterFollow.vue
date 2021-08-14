<template>
	<div>
		<a :href="`https://twitter.com/${id}?ref_src=twsrc%5Etfw`" class="twitter-follow-button" data-show-count="false">Follow @{{id}}</a>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	id: string
}>()
</script>