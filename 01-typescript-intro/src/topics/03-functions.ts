

function addNumbres(a: number, b:number){
    return a + b;

}

const nomApe = (a: string, b:string):string => {
    return `${ a + b }`;
}



function multi (firstNumber: number, secondNumber?: number, base: number = 3) {
    return firstNumber * base;
}
const result: number = addNumbres(3,4)
const result2: string = nomApe('luis', ' peña')
const result3: number = multi(6)

console.log(result, result2, result3)

export{}