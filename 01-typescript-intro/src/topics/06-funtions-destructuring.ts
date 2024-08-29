

export interface Product {
    description: String;
    price: number;
}

const phone: Product = {
    description: 'nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'ipad Air',
    price: 250.0
}
interface taxtCalculationOpcions {
    tax: number;
    products: Product[];
}

export function taxtCalculation (opctions: taxtCalculationOpcions): number [] {

    let  total = 0;
    
    opctions.products.forEach(product => {
        total +=  product.price;
    })

    return[total, total * opctions.tax];
}
const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxtCalculation({
    products: shoppingCart,
    tax:tax,
})

console.log('Total', total)
console.log('tax', taxTotal)

