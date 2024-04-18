"use strict";
// calculacation of price
let parcentage = (value, parcent, add) => {
    if (add) {
        value += (value / 100) * parcent;
        return value;
    }
    else {
        value -= (value / 100) * parcent;
        return value;
    }
};
// user input
function userInput() {
    let price = Number(prompt("Enter the price of product"));
    let vat = Number(prompt("Enter the price of vat"));
    let discount = Number(prompt("Enter the price of discount"));
    console.log(!price, !vat, !discount);
    if (!price || !vat || !discount) {
        alert("input must be number");
        return userInput();
    }
    else {
        let priceWithVat = parcentage(price, vat, true);
        let discountedPrice = parcentage(priceWithVat, discount, false);
        let totalPrice = ` 
    Price          : ${price}৳
    vat            : ${vat}%
    ----------------------------------------
    price with vat : ${priceWithVat}৳
    dicount        : ${discount}%
    ----------------------------------------
    Total price    : ${discountedPrice}৳
    `;
        console.log(totalPrice);
        return;
    }
}
userInput();
