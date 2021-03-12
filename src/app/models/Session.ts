import { Formateur } from "./Formateur";
import { Formation } from "./Formation";
import { Lieu } from "./Lieu";

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
    get id() {
        return this._id;
    }
    get dateDebut() {
        return this._dateDebut;
    }
    get dateFin() {
        return this._dateFin;
    }
    get duree() {
        return this._duree;
    }
    get validationSession() {
        return this._validationSession;
    }
    get prix() {
        return this._prix;
    }
    get reference() {
        return this._reference;
    }
    get salle() {
        return this._salle;
    }
    get type() {
        return this._type;
    }
    get formateur() {
        return this._formateur;
    }
    get formation() {
        return this._formation;
    }
    get lieu() {
        return this._lieu;
    }
}