import VendService from "./VendService.js";

//PRIVATE PARTS

//variables outside of the exported class are not accessible
const vendService = new VendService()

function drawTotal(total) {
  document.getElementById('total').innerText = total
}

function drawItems() {
  let items = vendService.getItems()
  //draw the items to the page
  let template = ''
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    template += `
            <div class="food-item" onclick="app.controllers.vendController.purchase('${item.id}')">
              <img src="${item.img}" alt = "">
              <h3> ${item.price}</h3> 
            </div>
            `
  }
  document.getElementById('food').innerHTML = template
}

function drawVend(product) {
  document.getElementById("product").innerHTML = `
       <img src="${product}" height="200" alt="">  `
  let delay = setTimeout(refresh, 1000);
}

function refresh() {
  document.getElementById("product").innerHTML = "<p></p>";
}



//PUBLIC PARTS
//Controllers are used for getting user input
//Updating Screen
//Sending and reciving data from Service
class VendController {
  constructor() {

  }



  //used to send money to service
  addMoney(cur) {
    console.log('controller: ', cur)
    let total = vendService.addMoney(cur)
    console.log('returned to controller: ', total)
    drawTotal(total)
  }

  //used to purchase a product
  purchase(id) {
    console.log("controller received: " + id);
    let product = vendService.purchase(id);
    this.updateBalance();
    drawVend(product);
  }

  updateBalance() {
    let balance = vendService.getBalance();
    drawTotal(balance);
  }
  getChange() {
    let balance = vendService.getChange();
    drawTotal(balance);
  }


}

drawItems()

export default VendController