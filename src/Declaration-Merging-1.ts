///////////
interface Cart {
  calculateTotal(): number;
}
///////////

interface Cart {
  x: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 5,
  calculateTotal(options?: { discountCode: number }) {
    if (options && options.discountCode) {
      //apply discount
    }
    return 2;
  }
}
