export class Lieu {
    constructor(
        private _id: number,
        private _ville: string,
    ) { }

    get id(){
        return this._id;
    }
    get ville(){
        return this._ville;
    }
}