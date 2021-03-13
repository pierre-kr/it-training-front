import { Lieu } from './Lieu';
import { Formateur } from './Formateur';
import { Formation } from './Formation';

export class Session {
    constructor(
        private _id: number,
        private _dateDebut: string,
        private _dateFin: string,
        private _duree: number,
        private _validationSession: boolean,
        private _prix: number,
        private _reference: string,
        private _salle: string,
        private _type: string,
        private _formateur: Formateur,
        private _formation: Formation,
        private _lieu: Lieu,
    ) { }
    get id(): number {
        return this._id;
    }
    get dateDebut(): string {
        return this._dateDebut;
    }
    get dateFin(): string {
        return this._dateFin;
    }
    get duree(): number {
        return this._duree;
    }
    get validationSession(): boolean {
        return this._validationSession;
    }
    get prix(): number {
        return this._prix;
    }
    get reference(): string {
        return this._reference;
    }
    get salle(): string {
        return this._salle;
    }
    get type(): string {
        return this._type;
    }
    get formateur(): Formateur {
        return this._formateur;
    }
    get formation(): Formation{
        return this._formation;
    }
    get lieu(): Lieu {
        return this._lieu;
    }
}
