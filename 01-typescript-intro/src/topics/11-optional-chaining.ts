

export interface Passenger {
    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: 'fernando',
}

const passenger2: Passenger = {
    name: 'melissa',
    children: ['Natalia', 'Elizabeth'],
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren =  passenger.children?.length + ' hijos' || 0 + ' hijos';

    console.log(passenger.name, howManyChildren)
}

printChildren(passenger2)