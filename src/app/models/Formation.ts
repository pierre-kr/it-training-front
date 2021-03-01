export class Formation {
    constructor(
        public id: number,
        public concernedPublic:string,
        public contenu:string,
        public description:string,
        public lienTest:string,
        public prerequis:string,
        public reference: string,
        public titre:string,
        public theme:number
    ) { }
}