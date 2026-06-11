const {
    add,
    subtract,
    multiply,
    divide,
    sqrt,
    max
  } = require("./mathModule");
  
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
  
  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });
  
  test("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });
  
  test("divides two numbers", () => {
    expect(divide(20, 4)).toBe(5);
  });
  
  test("square root", () => {
    expect(sqrt(25)).toBe(5);
  });
  
  test("max value", () => {
    expect(max(10, 20)).toBe(20);
  });