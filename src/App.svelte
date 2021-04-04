<script lang="ts">
	// import {HsvPicker} from 'svelte-color-picker';
	import FiltersPanel from './components/FiltersPanel.svelte';
</script>

<main>
	<FiltersPanel />
</main>

<style>
	main {
		/* text-align: center; */
		padding: 1em;
		/* max-width: 240px; */
		/* margin: 0 auto; */
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>