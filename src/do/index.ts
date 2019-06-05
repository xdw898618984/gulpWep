export interface User {
    id?: string;
    email: string;
    password: string;
    repeat: string;
    address: Address;
}

export interface Address {
    province: string;
    city: string;
    area: string;
    street: string;

}


export class Star {
    constructor(public firstName: string, public lastName: string, public type?: string) {

    }
}
