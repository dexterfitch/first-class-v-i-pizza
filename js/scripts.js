var Pizza = {
  price: 0,
  size: 0,
  crust: "classic",
  glutenFree: false,
  cutStyle: "wheel",
  toppings: [],
  slices: 0,

  pizzaAnalyzer: function() {
    this.price = this.size - 2;

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

    if (this.toppings.length > 6) {
      this.price += (this.toppings.length - 6);
    }
  }
};

var Customer = {
  pizzas: [],
  total: 0,
  sliceAggregate: 0
};

$(document).ready(function() {
  var newCustomer = Object.create(Customer);

  $("form#pizza-maker").submit(function(event) {
    event.preventDefault();

    var newPizza = Object.create(Pizza);

    var pizzaSize = $("select#pizza-size option:selected").val();
    var pizzaCrust = $("select#pizza-crust option:selected").val();
    var pizzaCut = $("select#pizza-cut option:selected").val();

    newPizza.size = pizzaSize;
    newPizza.crust = pizzaCrust;
    newPizza.cutStyle = pizzaCut;

    newPizza.pizzaAnalyzer();

    newCustomer.pizzas.push(newPizza);

    newCustomer.pizzas.forEach(function(pizza) {
      $("#all-pizzas").append("<li>" + pizza.size + "\" " + pizza.crust +
                              " crust" + pizza.cutStyle + " " + pizza.toppings);
      newCustomer.total += pizza.price;
    });

    $("#pizza-total").text("");
    $("#pizza-total").append("$" + newCustomer.total + ".00");

    $("#slice-total").text("");
    $("#slice-total").append(newCustomer.sliceAggregate + " slices");

  });
});
