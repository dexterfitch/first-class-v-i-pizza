var Pizza = {
  price: 0,
  size: 0,
  slices: 0,
  cutStyle: "wheel",
  toppingsCount: 0,

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

    if (this.toppingsCount > 6) {
      this.price += (this.toppingsCount - 6);
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

    var sauce = $.map($("select#sauce option:selected"), function (element) {
         return $(element).text();
    });

    var cheese = $.map($("select#cheese option:selected"), function (element) {
         return $(element).text();
    });

    var fruitVeg = $.map($("select#fruit-veg option:selected"), function (element) {
         return $(element).text();
    });

    var protein = $.map($("select#protein option:selected"), function (element) {
         return $(element).text();
    });

    var shake = $.map($("select#shake option:selected"), function (element) {
         return $(element).text();
    });

    var drizzle = $.map($("select#drizzle option:selected"), function (element) {
         return $(element).text();
    });

    newPizza.toppingsCount = sauce.length + cheese.length + fruitVeg.length + protein.length + shake.length + drizzle.length;
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
                              "<b>Cut:</b> " + pizza.cutStyle +
                              "<ul id='topping-list'><b>Toppings:</b>" +
                              "<li><small><b>Sauce:</b> " + pizza.toppings[0] + "</small></li>" +
                              "<li><small><b>Cheese:</b> " + pizza.toppings[1] + "</small></li>" +
                              "<li><small><b>Fruit and Veg:</b> " + pizza.toppings[2] + "</small></li>" +
                              "<li><small><b>Protein:</b> " + pizza.toppings[3] + "</small></li>" +
                              "<li><small><b>Shake:</b> " + pizza.toppings[4] + "</small></li>" +
                              "<li><small><b>Drizzle:</b> " + pizza.toppings[5] + "</small></li></ul>");
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

  $("#chicago").click(function() {
    $("#recipe-description").children().hide();
    $("#chicago-recipe").show();
  });

  $("#ny").click(function() {
    $("#recipe-description").children().hide();
    $("#ny-recipe").show();
  });

  $("#philly").click(function() {
    $("#recipe-description").children().hide();
    $("#philly-recipe").show();
  });

  $("#rio-de-janeiro").click(function() {
    $("#recipe-description").children().hide();
    $("#rio-de-janeiro-recipe").show();
  });

  $("#naples").click(function() {
    $("#recipe-description").children().hide();
    $("#naples-recipe").show();
  });

  $("#paris").click(function() {
    $("#recipe-description").children().hide();
    $("#paris-recipe").show();
  });

  $("#berlin").click(function() {
    $("#recipe-description").children().hide();
    $("#berlin-recipe").show();
  });

  $("#moscow").click(function() {
    $("#recipe-description").children().hide();
    $("#moscow-recipe").show();
  });

  $("#athens").click(function() {
    $("#recipe-description").children().hide();
    $("#athens-recipe").show();
  });

  $("#istanbul").click(function() {
    $("#recipe-description").children().hide();
    $("#istanbul-recipe").show();
  });

  $("#new-delhi").click(function() {
    $("#recipe-description").children().hide();
    $("#new-delhi-recipe").show();
  });

  $("#nagoya").click(function() {
    $("#recipe-description").children().hide();
    $("#nagoya-recipe").show();
  });

});
