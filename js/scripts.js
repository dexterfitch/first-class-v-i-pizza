var Pizza = {
  price: 0,
  size: 0,
  toppings: [],
  slices: 0,

  pizzaAnalyzer: function() {
    this.slices = this.size - 4;
    this.price = this.size - 2;
  }
};

var Customer = {
  pizzas: [],
  total: 0,

  totalCalc: function() {
    this.pizzas.forEach(pizza) {
      this.total += pizza.price;
    };
  }
};

$(document).ready(function() {
  var newCustomer = Object.create(Customer);
  var newPizza = Object.create(Pizza);

})
