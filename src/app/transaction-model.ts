import { NgOptimizedImage } from "@angular/common";

export class Transaction {
    constructor(){}

    //work to do
    id: number = 0; //unique id
    name: string = "";
    // type: string = "";
    description: string = "";
    withCash: boolean = true;
    image: string = "";
    currency: string = "";
    date: Date = new Date();
    amount: number = 0;

    getTransaction():string {
        return `${this.id} ${this.name} ${this.description}`; //${this.houseNumber}`;
    }
}
