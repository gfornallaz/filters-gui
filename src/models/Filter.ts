
class Filter {

    constructor(
        public id: number,
        public description: string,
        public pattern: string,
        public isRegex: boolean,
        public isCaseSensitive: boolean,
        public color: string,
        public enabled: boolean = true,
        public isEdited: boolean = false,
        public hits: number = 0
    ) {}

}

export { Filter };
//export default { Filter };
