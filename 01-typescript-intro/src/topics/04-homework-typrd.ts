/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: Addres
    showAddress: () => string;
}

interface Addres {
    street: string;
    countri: string;
    city: string;
};

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        countri: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.countri;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};