import { Lieu } from './Lieu';

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
        private _typeSession: string,
        // private _formateurId: number,
        // private _formationId: number,
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
    get typeSession(): string {
        return this._typeSession;
    }
    /*get formateurId() {
        return this._formateurId;
    }
    get formationId() {
        return this._formationId;
    }*/
    get lieu(): Lieu {
        return this._lieu;
    }
}
