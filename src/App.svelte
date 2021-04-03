<script lang="ts">
	// import {HsvPicker} from 'svelte-color-picker';
	import FiltersPanel from './components/FiltersPanel.svelte';
 

    export let name: string;

	function colorCallback(rgba: { detail: any; }) {
		console.log(rgba.detail)
	}
</script>

<main>
	<h1>Hello {name}!</h1>

	<FiltersPanel />

	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<!-- <HsvPicker on:colorChange={colorCallback} startColor={"#FBFBFB"}/> -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>