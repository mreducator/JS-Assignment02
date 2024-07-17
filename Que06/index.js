const productDetails = {
    name:"Apple 220 Mackbook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
};

for (let keys of Object.keys(productDetails)){
    console.log(`${keys} : ${productDetails[keys]}`)
}