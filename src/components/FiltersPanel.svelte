<script lang="ts">
    import {flip} from "svelte/animate";
    import {dndzone} from "svelte-dnd-action";
    import { Filter as FilterType } from "../models/Filter";
    import { each } from "svelte/internal";
    import { filterStore } from "../stores/FilterStore";
    import Filter from './Filter.svelte';
    import AddSvg from "../media/add.svg";
    import FilterSvg from "../media/filter.svg";

    const { filters } = filterStore;
    let nextId = 5;
    const flipDurationMs = 100;
    const buttonSize = 25;

    function getRandomColor() {
        const color = Math.floor(Math.random()*16777215).toString(16);
        return "#" + color;
    }

    function addFilter() {
        nextId++;
        filters.update(filters => {
            return [...filters, new FilterType(nextId, "", "", false, false, getRandomColor(), true, true)];
        });
    }

    function removeFilter(event) {
        filters.update(filters => {
            return filters.filter(filter => (filter.id !== event.detail.id));
        });
	}

    function handleDndConsider(e) {
        filters.update(filters => {
            return e.detail.items;
        });
    }
    function handleDndFinalize(e) {
        filters.update(filters => {
            return e.detail.items;
        });
    }

</script>

<div class="filters">

    <h1>Line filters</h1>

    <button on:click={addFilter}>
        <AddSvg width="{buttonSize}" height="{buttonSize}"/>
    </button>
    <button>
        <FilterSvg width="{buttonSize}" height="{buttonSize}"/>
    </button>
</div>

<section use:dndzone="{{items: $filters, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
    {#each $filters as filter (filter.id)}
        <div animate:flip={{duration:flipDurationMs}}>
            <Filter filter={filter} on:remove={removeFilter}/>
        </div>
    {/each}
</section>

<style>
    .filters {
        display: flex;
    }
    h1 {
        flex-grow: 1;
    }
    button {
        width: fit-content;
    }
</style>