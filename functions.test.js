// functions.test.js

const { calculateDiscount, filterProducts, sortProducts, validateEmail } = require('./functions');

describe("calculateDiscount", () => {
  test("should calculate correct discount", () => {
    expect(calculateDiscount(100, 20)).toBe(80);
  });

  test("should throw error for negative price", () => {
    expect(() => calculateDiscount(-100, 10)).toThrow('Invalid input');
  });

  test("should throw error for discount > 100", () => {
    expect(() => calculateDiscount(100, 150)).toThrow('Invalid input');
  });
});

describe("filterProducts", () => {
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Watch', price: 200 }
  ];

  test("should return matching product", () => {
    expect(filterProducts(products, 'lap')).toEqual([{ name: 'Laptop', price: 1000 }]);
  });

  test("should throw error for invalid input", () => {
    expect(() => filterProducts('notAnArray', 'lap')).toThrow('Invalid input');
  });
});

describe("sortProducts", () => {
  const items = [
    { name: 'Mouse', price: 300 },
    { name: 'Keyboard', price: 200 },
    { name: 'Monitor', price: 1000 }
  ];

  test("should sort by name", () => {
    const result = sortProducts([...items], 'name');
    expect(result.map(p => p.name)).toEqual(['Keyboard', 'Monitor', 'Mouse']);
  });

  test("should sort by price", () => {
    const result = sortProducts([...items], 'price');
    expect(result.map(p => p.price)).toEqual([200, 300, 1000]);
  });

  test("should throw error on wrong key", () => {
    expect(() => sortProducts(items, 'brand')).toThrow('Invalid input');
  });
});

describe("validateEmail", () => {
  test("should return true for valid email", () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test("should return false for invalid email", () => {
    expect(validateEmail('test@.com')).toBe(false);
  });

  test("should throw error for non-string input", () => {
    expect(() => validateEmail(123)).toThrow('Invalid input');
  });
});
