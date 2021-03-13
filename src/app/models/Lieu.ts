export class Lieu {
    constructor(
        private _id: number,
        private _numero: string,
        private _rue: string,
        private _codepostal: string,
        private _ville: string
    ){}

    get id(): number{
        return this._id;
    }

    get numero(): string{
        return this._numero;
    }

    get rue(): string{
        return this._rue;
    }

    get codepostal(): string{
        return this._codepostal;
    }

    get ville(): string{
        return this._ville;
    }
}
