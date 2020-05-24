function totalPrice(){
    let quality = document.getElementById("quality")
    let price = document.getElementById("price")
    let totalPrice = document.getElementById("totalPrice")
    totalPrice.value = quality.value*price.value;
}