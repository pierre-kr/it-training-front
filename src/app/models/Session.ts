export class Session {
    constructor(
        private _id: number,
        private _dateDebut: string,
        private _dateFin: string,
        private _duree : number,
        private _validationSession : boolean,
        private _prix : number,
        private _reference: string,
        private _salle : string,
        private _type : string,
        private _formateurId: number,
        private _formationId: number,
        private _lieu: string,
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
    get formateurId() {
        return this._formateurId;
    }
    get formationId() {
        return this._formationId;
    }
    get lieu() {
        return this._lieu;
    }
}