var Pizza = {
  price: 0,
  size: 0,
  crust: "classic",
  glutenFree: false,
  cutStyle: "wheel",
  toppings: [],
  slices: 0,

  pizzaAnalyzer: function() {
    if (this.cutStyle === "wheel") {
      this.slices = this.size - 4;
    } else if (this.cutStyle === "slim") {
      this.slices = (this.size -4) * 2;
    } else if (this.cutStyle === "grid") {
      if (this.size < 12) {
        this.slices += 9;
      } else if (this.size < 16) {
        this.slices += 16;
      } else {
        this.slices += 25;
      }
    }
    this.price = this.size - 2;
  }
};

var Customer = {
  pizzas: [],
  total: 0,

  totalCalc: function() {
    this.pizzas.forEach(function(pizza) {
      this.total += pizza.price;
    });
  }
};

$(document).ready(function() {
  var newCustomer = Object.create(Customer);
  var newPizza = Object.create(Pizza);
});
