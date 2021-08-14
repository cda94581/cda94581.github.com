<template>
	<div class="g-ytsubscribe" data-channelid="`${id}" data-layout="full" data-count="default">
		<p>
			<a href="`https://www.youtube.com/${id}?sub_confirmation=1`">Subscrib :></a>
			actually do what you want idrc.
		</p>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	id: string,
	fallback: string,
}>()
</script>