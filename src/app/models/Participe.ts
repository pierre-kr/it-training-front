import { Apprenant } from './Apprenant';
import { Session } from './Session';

export class Participe {
    constructor(
        private _id: number,
        private _session: Session,
        private _apprenant: Apprenant
    ) {}

    get id(): number {
        return this._id;
    }

    get session(): Session {
        return this._session;
    }

    get apprenant(): Apprenant {
        return this._apprenant;
    }

    set session(newSession: Session) {
        this._session = newSession;
    }

    set newApprenant(apprenant: Apprenant) {
        this._apprenant = apprenant;
    }
}
