<script lang="ts">
    import type { Filter } from "../models/Filter";
    import { hexColor2rgb, goodContrastColor } from "../utils/colorUtils";
	import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition';
    import EditSvg from "../media/edit.svg";
    import EnabledSvg from "../media/eye.svg";
    import DisabledSvg from "../media/eye-closed.svg";
    import DeleteSvg from "../media/trash.svg";

	const dispatch = createEventDispatcher();

    export let filter: Filter;

    $: fgColor = filter.enabled ? goodContrastColor(hexColor2rgb(filter.color)) : "inherit";
    $: bgColor = filter.enabled ? filter.color : "transparent";

	function remove() {
		dispatch('remove', {
			id: filter.id
		});
	}

</script>

<div class="filter" style="background-color:{bgColor}; color:{fgColor};">
    <div class="filter-header">
        <button on:click={() => filter.enabled = !filter.enabled} >
            {#if filter.enabled}
                <EnabledSvg color="{fgColor}"/>
            {:else}
                <DisabledSvg color="{fgColor}"/>
            {/if}
        </button>
        <span class="name">{filter.description}</span>
        <span class="pattern">{filter.pattern}</span>
        <button on:click={() => filter.isEdited = !filter.isEdited} >
            <EditSvg color="{fgColor}"/>
        </button>
        <button on:click={remove}>
            <DeleteSvg color="{fgColor}"/>
        </button>
    </div>
    {#if filter.isEdited}
        <div class="filter-edit" transition:slide>
            <div class="filter-edit-line">
                <label for="description">Description</label>
                <input name="description" type="text" class="input-name" placeholder="filter descritption (optional)" bind:value={filter.description} />
                <label for="color">Color</label>
                <input name="color" class="color" type="color" bind:value={filter.color} /> 
            </div>
            <div class="filter-edit-line">
                <label for="pattern">Pattern</label>
                <input name="pattern" class="pattern" type="text"  placeholder="enter pattern" bind:value={filter.pattern} />
            </div>
            <button on:click={() => filter.isEdited = false} >Ok</button>
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
    .filter-edit {
        /* display: flex;
        text-align: left;
        align-items: center;
        justify-content: center;
        margin: 1em; */
    }
    .filter-edit-line {
        display: flex;
        text-align: left;
        align-items: center;
        justify-content: center;
        margin: 1em;
        /* padding: 0.3em; */
    }
    .name {
        width: 30%;
        font-style: italic;
        font-weight: bold;
        margin-left: 0.4em;
    }
    .color {
        width: 50px;
        height: 25px;
        margin: 0.1em 0.6em;
        padding: 0.1em;
    }
    .pattern {
        flex-grow: 2;
        margin: 0.1em 0.6em;
    }
    button {
        width: fit-content;
    }
    .filter-header button {
        visibility: hidden;
    }

</style>