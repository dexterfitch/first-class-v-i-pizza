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

    $("#all-pizzas").text("");

    var newPizza = Object.create(Pizza);

    var pizzaSizeInches = $("select#pizza-size option:selected").val();
    var pizzaSizeText = $("select#pizza-size option:selected").text();
    var pizzaCrust = $("select#pizza-crust option:selected").text();
    var pizzaCut = $("select#pizza-cut option:selected").val();

    newPizza.toppings.push($("select#sauce option:selected").text());
    newPizza.toppings.push($("select#cheese option:selected").text());
    newPizza.toppings.push($("select#fruit-veg option:selected").text());
    newPizza.toppings.push($("select#protein option:selected").text());
    newPizza.toppings.push($("select#shake option:selected").text());
    newPizza.toppings.push($("select#drizzle option:selected").text());

    newPizza.size = pizzaSizeInches;
    newPizza.crust = pizzaCrust;
    newPizza.cutStyle = pizzaCut;

    if (newPizza.size === "Select" || newPizza.crust === "Select" || newPizza.cutStyle === "Select") {
      alert("Please choose a size, crust, and cut style.");
    } else {
      newPizza.pizzaAnalyzer();
      newCustomer.pizzas.push(newPizza);
    }

    newCustomer.pizzas.forEach(function(pizza) {
      $("#all-pizzas").append("<li>" + pizzaSizeText + ", " + pizza.crust +
                              " crust, " + pizza.cutStyle + " cut<br>Toppings: " +
                              pizza.toppings);
      newCustomer.total += pizza.price;
      newCustomer.sliceAggregate += pizza.slices;
    });

    $("#pizza-total").text("");
    $("#pizza-total").append("Total: $" + newCustomer.total + ".00");

    $("#slice-total").text("");
    $("#slice-total").append("Slices: " + newCustomer.sliceAggregate);

    $("select#pizza-size").val("");
    $("select#pizza-size").val("");
    $("select#pizza-crust").val("");
    $("select#pizza-cut").val("");
    $("select#sauce").val("");
    $("select#cheese").val("");
    $("select#fruit-veg").val("");
    $("select#protein").val("");
    $("select#shake").val("");
    $("select#drizzle").val("");

  });
});
