<script lang="ts">
    import {flip} from "svelte/animate";
    import {dndzone} from "svelte-dnd-action";
    import { Filter as FilterType } from "../models/Filter";
    import { each } from "svelte/internal";
    import { filterStore } from "../stores/FilterStore";
    import Filter from './Filter.svelte';

    const { filters } = filterStore;
    let nextId = 5;
    const flipDurationMs = 100;

    function addFilter() {
        nextId++;
        filters.update(filters => {
            return [...filters, new FilterType(nextId, "", "", false, false, "#e0e0e0", true, true)];
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

<h1>Filters: 
    <button on:click={addFilter}><img src="/media/add.svg" alt="Add a filter"></button>
    <button><img src="/media/filter.svg" alt="Apply filters"></button>
</h1>

<section use:dndzone="{{items: $filters, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
    {#each $filters as filter (filter.id)}
        <div animate:flip={{duration:flipDurationMs}}>
            <Filter filter={filter} on:remove={removeFilter}/>
        </div>
    {/each}
</section>