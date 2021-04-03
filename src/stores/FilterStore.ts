import { derived, writable, Writable } from "svelte/store";
import { Filter } from "../models/Filter";

class FilterStore {
    constructor(
        public filters: Writable<Filter[]> = writable<Filter[]>([
            new Filter(1, "f1", "aaa", "#B1D7E6"),
            new Filter(2, "f2", "bbb", "#909090"),
            new Filter(3, "f3", "ccc", "#0080f0"),
            new Filter(4, "f4", "ddd", "#F8FF2B")
        ])) {
        }

        
}

// Export a singleton
export const filterStore = new FilterStore();
