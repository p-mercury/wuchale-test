<script lang="ts">
	import TestItem from "./test-item.svelte";

	let items = [{ text: {} }, { select: {} }, { checkbox: {} }] as any[];
</script>

{#each items as item}
	<TestItem {item} />
{/each}
