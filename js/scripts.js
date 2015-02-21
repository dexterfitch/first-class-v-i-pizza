var Pizza = {
  price: 0,
  size: 0,
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

    newCustomer.total = 0;
    newCustomer.sliceAggregate = 0;

    $("#pizza-total").text("");
    $("#slice-total").text("");
    $("#all-pizzas").text("");

    var newPizza = Object.create(Pizza);
    newPizza.toppings = [];

    var pizzaSizeInches = $("select#pizza-size option:selected").val();
    var pizzaSizeText = $("select#pizza-size option:selected").text();
    var pizzaCrust = $("select#pizza-crust option:selected").text();
    var pizzaCut = $("select#pizza-cut option:selected").val();

    var sauce = $.map($("select#sauce option:selected"), function (el, i) {
         return $(el).text();
    });

    var cheese = $.map($("select#cheese option:selected"), function (el, i) {
         return $(el).text();
    });

    var fruitVeg = $.map($("select#fruit-veg option:selected"), function (el, i) {
         return $(el).text();
    });

    var protein = $.map($("select#protein option:selected"), function (el, i) {
         return $(el).text();
    });

    var shake = $.map($("select#shake option:selected"), function (el, i) {
         return $(el).text();
    });

    var drizzle = $.map($("select#drizzle option:selected"), function (el, i) {
         return $(el).text();
    });


    newPizza.toppings[0] = [];
    newPizza.toppings[1] = [];
    newPizza.toppings[2] = [];
    newPizza.toppings[3] = [];
    newPizza.toppings[4] = [];
    newPizza.toppings[5] = [];
    newPizza.toppings[0].push(sauce.join(","));
    newPizza.toppings[1].push(cheese.join(","));
    newPizza.toppings[2].push(fruitVeg.join(","));
    newPizza.toppings[3].push(protein.join(","));
    newPizza.toppings[4].push(shake.join(","));
    newPizza.toppings[5].push(drizzle.join(","));


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
      $("#all-pizzas").append("<li><b>Size:</b> " + pizzaSizeText + ", " +
                              "<b>Crust:</b> " + pizza.crust + ", " +
                              "<b>Cut:</b> " + pizza.cutStyle + "<br>" +
                              "<small><b>Sauce:</b> " + pizza.toppings[0] + "<br>" +
                              "<b>Cheese:</b> " + pizza.toppings[1] + "<br>" +
                              "<b>Fruit and Veg:</b> " + pizza.toppings[2] + "<br>" +
                              "<b>Protein:</b> " + pizza.toppings[3] + "<br>" +
                              "<b>Shake:</b> " + pizza.toppings[4] + "<br>" +
                              "<b>Drizzle:</b> " + pizza.toppings[5] + "</small>");
      newCustomer.total += pizza.price;
      newCustomer.sliceAggregate += pizza.slices;
    });

    if (newCustomer.total > 0) {
      $("#pizza-total").append("Total: $" + newCustomer.total + ".00");
      $("#slice-total").append("Slices: " + newCustomer.sliceAggregate);
    }

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
