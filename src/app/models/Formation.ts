import { Session } from "./Session"

export class Formation {
    constructor(
        private _id: number,
        private _audience:string,
        private _contenu:string,
        private _description:string,
        private _lienTest:string,
        private _prerequis:string,
        private _reference: string,
        private _titre:string,
        private _theme:number,
        private _sessions: Session[]
    ) { }

    get id() : number{
        return this._id
    }

    get audience() : string{
        return this._audience
    }

    get contenu() : string{
        return this._contenu
    }

    get description() : string{
        return this._description
    }

    get lienTest() : string{
        return this._lienTest
    }

    get prerequis() : string{
        return this._prerequis
    }

    get reference() : string{
        return this._reference
    }

    get titre() : string{
        return this._titre
    }

    get theme() : number{
        return this._theme
    }

    get sessions() : Session[]{
        return this._sessions
    }
}