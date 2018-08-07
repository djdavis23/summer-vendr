class VendingMachine {
  constructor() {
    this.transactionTotal = 0
    this.acceptableCurrency = {
      quarter: .25,
      dime: .1,
      nickel: .05
    }
    this.foodItems = [{
      id: 'a1',
      img: 'https://target.scene7.com/is/image/Target/51591776?wid=400&hei=400&fmt=pjpeg',
      price: 1.25,
      quantity: 10
    }, {
      id: 'a2',
      img: 'https://pbs.twimg.com/profile_images/824647153721106432/gwLIQxqy_400x400.jpg',
      price: 2.00,
      quantity: 1
    }, {
      id: 'a3',
      img: 'http://www.mountaindew.com/assets/content/38195/20881/21892-grew-dew-product.png',
      price: .75,
      quantity: 15
    }]
    this.machineTotal = 10
  }

  addMoney(coin) {
    if (this.acceptableCurrency[coin]) {
      this.transactionTotal += this.acceptableCurrency[coin];
    }
    return this.transactionTotal;
  }
  vend(foodId) {
    console.log("machine received: " + foodId);
    //find item
    let product = this.foodItems.find(item => item.id == foodId);
    //if transactionTotal >= item.price && item.quantity > 0
    if (this.transactionTotal >= product.price && product.quantity > 0) {
      product.quantity--;
      this.transactionTotal -= product.price;
      this.machineTotal += product.price;
      return product.img;
    } else {
      return 'assets/nogo.png';
    }
  }
  giveChange() {
    this.transactionTotal = 0;
    return this.transactionTotal;
  }

  getItems() {
    return this.foodItems
  }
}


export default VendingMachine