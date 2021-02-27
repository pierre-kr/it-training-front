export class Session {
    constructor(
        private _id: number,
        private _reference: string
    ) { }
    get id() {
        return this.id;
    }
    get reference() {
        return this.reference;
    }
}