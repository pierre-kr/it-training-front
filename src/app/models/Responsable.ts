import { Lieu } from "./Lieu";

export class Responsable{
    constructor(
        private _id: number,
        private _email: string,
        private _fonction: string,
        private _nom: string,
        private _prenom: string,
        private _tel: string,
        private _lieu: Lieu
    ){}
}