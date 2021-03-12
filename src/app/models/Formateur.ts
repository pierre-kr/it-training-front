import { Session } from './Session';

export class Formateur {
    constructor(
        private _id?: any,
        private _nom?: string,
        private _prenom?: string,
        private _civilite?: string,
        private _fonction?: string,
        private _entreprise?: string,
        private _email?: string,
        private _tel?: string,
        private _sessions?: Session[]) { }

    get id(): string {
        return this._id;
    }

    get civilite(): string {
        return this._civilite;
    }

    get email(): string {
        return this._email;
    }

    get fonction(): string {
        return this._fonction;
    }

    get nom(): string {
        return this._nom;
    }

    get prenom(): string {
        return this._prenom;
    }

    get entreprise(): string {
        return this._entreprise;
    }

    get tel(): string {
        return this._tel;
    }

    get sessions(): Session[] {
        return this._sessions;
    }
}
