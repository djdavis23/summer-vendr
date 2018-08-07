import VendingMachine from "../../models/VendingMachine.js";

//Private Parts


const vm = new VendingMachine()



//public to controller
class VendService {
  constructor() {

  }
  getItems() {
    return vm.getItems()
  }
  addMoney(type) {
    console.log('service: ', type)
    return vm.addMoney(type).toFixed(2)
  }
  purchase(id) {
    console.log("service received: " + id);
    return vm.vend(id);
  }

  getBalance() {
    return vm.transactionTotal.toFixed(2);
  }

  getChange() {
    return vm.giveChange().toFixed(2);
  }

}


export default VendService