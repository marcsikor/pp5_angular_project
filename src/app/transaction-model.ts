export class Transaction {
    constructor(){}

    //work to do

    name: string = "";
    type: string = "";
    description: string = "";
    // street: string = "";
    // houseNumber: string = "";
    // zipCode: string = "";
    // comments: string = "";
    // industry: string = "";
    // active: boolean = true

    getTransaction():string {
        return `${this.name} ${this.type} ${this.description}`; //${this.houseNumber}`;
    }
    // getCustomerInfo():string {
    //     return `${this.name} (${this.nip})`;
    // }
}
