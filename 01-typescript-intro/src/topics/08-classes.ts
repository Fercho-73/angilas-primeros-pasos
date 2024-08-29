export class Person {
    /*public name: string;
    private address: string;
*/
    constructor( 
        public name: string,
        public address = 'no address'
    ) {}
}
export class Hero extends Person {
    constructor(
        public alertEgo: string,
        public ego: number,
        public reaName: string,
    ){
        super(reaName,'medellin')
    }
}
const ironman = new Hero('batman',31, 'neiva');

console.log(ironman)