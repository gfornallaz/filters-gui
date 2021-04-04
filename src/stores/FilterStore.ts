import { derived, writable, Writable } from "svelte/store";
import { Filter } from "../models/Filter";

class FilterStore {
    constructor(
        public filters: Writable<Filter[]> = writable<Filter[]>([
            new Filter(1, "f1 very long long description", "aaa", false, false, "#85FFC0", true, true, 5),
            new Filter(2, "f2 long description", "bbb bbb", false, true, "#FFA3A3", false, false, 2345),
            new Filter(3, "f3 desc", "ccc cccccc cccc", false, true, "#0080f0"),
            new Filter(4, "f4", "ddd ddddddddddddd ddd d dd", true, false, "#F8FF2B")
        ])) {
        }

        
}

// Export a singleton
export const filterStore = new FilterStore();
