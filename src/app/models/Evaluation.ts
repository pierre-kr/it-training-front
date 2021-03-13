export class Evaluation {
    constructor(
        private _id: number,
        private _accueil: number,
        private _disponibilite: number,
        private _machines: number,
        private _maitrise_domaine: number,
        private _pedagogie: number,
        private _repas: number,
        private _reponse_aux_question: number,
        private _salle: number,
        private _technique_animation: number
    ) {}

    get id(): number {
        return this._id;
    }

    get accueil(): number {
        return this._accueil;
    }

    get disponibilite(): number {
        return this._disponibilite;
    }

    get machines(): number {
        return this._machines;
    }

    get maitrise_domaine(): number {
        return this._maitrise_domaine;
    }

    get pedagogie(): number {
        return this._pedagogie;
    }

    get repas(): number {
        return this._repas;
    }

    get reponse_aux_question(): number {
        return this._reponse_aux_question;
    }

    get salle(): number {
        return this._salle;
    }

    get technique_animation(): number {
        return this._technique_animation;
    }
}
