const products = [{
    name:"Laptop",
    price: 125000
},{
    name:"Laptop Bag",
    price: 20000
},
{
    name:"Mobile",
    price: 70000
},
{
    name:"Watch",
    price: 20000
},{
    name:"Mobile Charger",
    price: 1500
}]

function checkProducts(){
    products.filter((product)=>{
        if(product.price > 120000){
           console.log(`the product with maximum amount is ${product.name} whice priced at Rs.${product.price}`)
        }
        if( product.price < 2000){
            console.log(`the product with minimum amount is ${product.name} whice priced at Rs.${product.price}`)
        }
    })
}
checkProducts()