<script lang="ts">
	let { item }: { item: any } = $props();
</script>

<div class="tool-item">
	{#if item.text}
		<svg class="icon" inline-src="test" />Text
	{:else if item.number}
		<svg class="icon" inline-src="test" />Number
	{:else if item.file}
		<svg class="icon" inline-src="test" />File
	{:else if item.select}
		<svg class="icon" inline-src="test" />Select
	{:else}
		<svg class="icon" inline-src="test" />Checkbox
	{/if}
</div>

<style lang="scss">
	svg {
		width: 2rem;
		height: 2rem;
	}
</style>
