<script lang="ts">
	import { getUserStatusName } from "@wuchale-test/library/enum/user-status";
</script>

<h1><svg inline-src="test" /> Hello world</h1>
<span>User status: {getUserStatusName(1)}</span>

<style lang="scss">
	h1 {
		color: green;
	}
	svg {
		width: 2rem;
		height: 2rem;
	}
</style>
