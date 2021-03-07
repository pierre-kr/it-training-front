export class Theme {
    constructor(
        private _id:number,
        private _nom:string
    ){}

    get id():number {
        return this._id
    }

    get nom():string {
        return this._nom
    }
}