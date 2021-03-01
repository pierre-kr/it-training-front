import { Session } from './Session';

export class Formation {
    constructor(
        private _id: number,
        private _concernedPublic: string,
        private _contenu: string,
        private _description: string,
        private _lienTest: string,
        private _prerequis: string,
        private _reference: string,
        private _titre: string,
        private _theme: number,
        private _sessions: Session[]
    ) { }

    get id() {
        return this._id;
    }
    get concernedPublic() {
        return this._concernedPublic;
    }
    get contenu() {
        return this._contenu;
    }
    get description() {
        return this._description;
    }
    get lienTest() {
        return this._lienTest;
    }
    get prerequis() {
        return this._prerequis;
    }
    get reference() {
        return this._reference;
    }
    get titre() {
        return this._titre;
    }
    get theme() {
        return this._theme;
    }
    get sessions() {
        return this._sessions;
    }

}
