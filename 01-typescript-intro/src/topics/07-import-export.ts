
import{ Product, taxtCalculation } from './06-funtions-destructuring';

const shoppingCArt: Product[] = [

    {
        description: 'Nokia',
        price: 100 
    },
    {
        description: 'ipad',
        price: 150 
    }
];


const [total, tax] = taxtCalculation ({
    products: shoppingCArt,
    tax: 0.15
});

console.log(`Total`, total);
console.log(`Tax`, tax);
