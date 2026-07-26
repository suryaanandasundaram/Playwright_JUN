import { BasePage } from "./BasePage"

class ProductPage extends BasePage implements PageRules{
verifyPage():void{
    console.log("Product Page Verified")
}
searchProduct(){
    console.log("Searched Product")
}
addToCart(){
    console.log("product added to Cart")
}
}