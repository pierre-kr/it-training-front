export class Theme {
    constructor(
        private _id: number,
        private _nom: string,
        private _idParent: number
    ) { }

    get id() {
        return this._id;
    }
    get nom() {
        return this._nom;
    }
    get idParent(){
        return this._idParent;
    }
}