<script lang="ts">
    import type { Filter } from "../models/Filter";
    import { hexColor2rgb, goodContrastColor } from "../utils/colorUtils";
	import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition';

	const dispatch = createEventDispatcher();

    export let filter: Filter;
    export let editMode: boolean = false;

    let fgColor: string;
    $: fgColor = goodContrastColor(hexColor2rgb(filter.color));

	function remove() {
		dispatch('remove', {
			id: filter.id
		});
	}

</script>

<div class="filter" style="background-color:{filter.color}; color:{fgColor};">
    <div class="filter-header">
        <button ><img src="/media/eye.svg" alt="Enable/disable filter"></button>
        <span class="name">{filter.name}</span>
        <input class="color" type="color" bind:value={filter.color} /> 
        <input class="regex" type="text"  placeholder="Regex" bind:value={filter.regex} />
        <button on:click={() => editMode = !editMode} ><img src="/media/edit.svg" alt="Modify filter"></button>
        <button on:click={remove}><img src="/media/trash.svg" alt="Remove the filter"></button>
    </div>
    {#if editMode}
        <div class="filter-edit" transition:slide>
            <label for="name">Name</label>
            <input type="text" class="input-name" placeholder="filter name" bind:value={filter.name} />
            <button on:click={() => editMode = false} >Ok</button>
        </div>
    {/if}
</div>

<style>
    .filter {
        border-radius: 10px;
    }
    .filter-header {
        display: flex;
        text-align: left;
        align-items: center;
        justify-content: center;
        margin: 0.1em;
    }
    .filter-header:hover button {
        visibility: visible;
    }
    .filter-edit{
        display: flex;
        text-align: left;
        align-items: center;
        justify-content: center;
        margin: 1em;
    }
    .name {
        width: 10%;
        font-style: italic;
        margin-left: 0.4em;
    }
    .color {
        width: 50px;
        height: 25px;
        margin: 0.1em 0.6em;
        padding: 0.1em;
    }
    .regex {
        margin: 0.1em 0.6em;
    }
    button {
        width: fit-content;
    }
    .filter-header button {
        visibility: hidden;
    }

</style>