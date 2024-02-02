export class Transaction {
    constructor(){}

    id!: number; //unique id
    name!: string;
    description: string = "";
    withCash: boolean = true;
    file: Blob | null = null;
    currency!: string;
    date!: Date;
    amount!: number;

}
