describe("Pizza", function() {
  describe("pizzaAnalyzer", function() {
    it("calculates the price of a pizza with extra toppings", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 8;
      testPizza.toppingsCount = 8;
      testPizza.pizzaAnalyzer();
      expect(testPizza.price).to.equal(8);
    });

    it("calculates the price of a personal pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 8;
      testPizza.pizzaAnalyzer();
      expect(testPizza.price).to.equal(6);
    });

    it("calculates the price of a small pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 10;
      testPizza.pizzaAnalyzer();
      expect(testPizza.price).to.equal(8);
    });

    it("calculates the price of a medium pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      testPizza.pizzaAnalyzer();
      expect(testPizza.price).to.equal(10);
    });

    it("calculates the price of a large pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 14;
      testPizza.pizzaAnalyzer();
      expect(testPizza.price).to.equal(12);
    });

    it("calculates the price of a XL pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 16;
      testPizza.pizzaAnalyzer();
      expect(testPizza.price).to.equal(14);
    });

    it("calculates the price of a family pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 18;
      testPizza.pizzaAnalyzer();
      expect(testPizza.price).to.equal(16);
    });

    it("calculates how many slices a personal pizza has when wheel-cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 8;
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(4);
    });

    it("calculates how many slices a small pizza has when wheel-cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 10;
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(6);
    });

    it("calculates how many slices a medium pizza has when wheel-cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(8);
    });

    it("calculates how many slices a large pizza has when wheel-cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 14;
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(10);
    });

    it("calculates how many slices a XL pizza has when wheel-cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 16;
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(12);
    });

    it("calculates how many slices a family pizza has when wheel-cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 18;
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(14);
    });

    it("calculates how many slices a personal pizza has when slim cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 8;
      testPizza.cutStyle = "slim";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(8);
    });

    it("calculates how many slices a small pizza has when slim cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 10;
      testPizza.cutStyle = "slim";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(12);
    });

    it("calculates how many slices a medium pizza has when slim cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      testPizza.cutStyle = "slim";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(16);
    });

    it("calculates how many slices a large pizza has when slim cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 14;
      testPizza.cutStyle = "slim";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(20);
    });

    it("calculates how many slices a XL pizza has when slim cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 16;
      testPizza.cutStyle = "slim";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(24);
    });

    it("calculates how many slices a family pizza has when slim cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 18;
      testPizza.cutStyle = "slim";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(28);
    });

    it("calculates how many slices a personal pizza has when grid cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 8;
      testPizza.cutStyle = "grid";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(9);
    });

    it("calculates how many slices a small pizza has when grid cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 10;
      testPizza.cutStyle = "grid";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(9);
    });

    it("calculates how many slices a medium pizza has when grid cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      testPizza.cutStyle = "grid";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(16);
    });

    it("calculates how many slices a large pizza has when grid cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 14;
      testPizza.cutStyle = "grid";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(16);
    });

    it("calculates how many slices a XL pizza has when grid cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 16;
      testPizza.cutStyle = "grid";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(25);
    });

    it("calculates how many slices a family pizza has when grid cut", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 18;
      testPizza.cutStyle = "grid";
      testPizza.pizzaAnalyzer();
      expect(testPizza.slices).to.equal(25);
    });
  });
});
