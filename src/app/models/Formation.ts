import { Session } from './Session';
import { Theme } from './Theme';

export class Formation {
    constructor(
        public id: number,
        public audience: string,
        public contenu: string,
        public description: string,
        public lienTest: string,
        public prerequis: string,
        public reference: string,
        public titre: string,
        public theme: Theme,
        public sessions: Session[],
    ) { }
}
