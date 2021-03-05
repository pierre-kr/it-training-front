import { Session } from './Session';

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
        public theme: number,
        public sessions: Session[]
    ) { }
}