// calculacation of price
let parcentage = (value: number, parcent: number, add: boolean) => {
  if (add) {
    value += (value / 100) * parcent;
    return value;
  } else {
    value -= (value / 100) * parcent;
    return value;
  }
};

// user input
function userInput() {
  let price: number = Number(prompt("Enter the price of product"));
  let vat: number = Number(prompt("Enter the price of vat"));
  let discount: number = Number(prompt("Enter the price of discount"));

  console.log(!price, !vat, !discount);
  if (!price || !vat || !discount) {
    alert("input must be number");
    return userInput();
  } else {
    let priceWithVat: number = parcentage(price, vat, true);
    let discountedPrice: number = parcentage(priceWithVat, discount, false);
    let totalPrice: string = 
    ` 
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
