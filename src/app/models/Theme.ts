import { Formation } from './Formation'

export class Theme {
    constructor(
        private _id: number,
        private _nom: string,
        private _idParent: number,
        private _formations: Formation[]
    ){}

    get id(): number {
        return this._id;
    }

    get nom(): string {
        return this._nom;
    }

    get formations(): Formation[] {
        return this._formations;
    }
    get idParent(){
        return this._idParent;
    }
}
