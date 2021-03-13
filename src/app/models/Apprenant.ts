import { Lieu } from './Lieu';

export class Apprenant {
    constructor(
        private _id: number,
        private _civilite: string,
        private _email: string,
        private _fonction: string,
        private _nom: string,
        private _prenom: string,
        private _societe: string,
        private _telephone: string,
        private _adresse: Lieu
    ){}

    get id(): number{
        return this._id;
    }

    get civilite(): string{
        return this._civilite;
    }

    get email(): string{
        return this._email;
    }

    get fonction(): string{
        return this._fonction;
    }

    get nom(): string{
        return this._nom;
    }

    get prenom(): string{
        return this._prenom;
    }

    get societe(): string{
        return this._societe;
    }

    get telephone(): string{
        return this._telephone;
    }

    get adresse(): Lieu{
        return this._adresse;
    }
}
