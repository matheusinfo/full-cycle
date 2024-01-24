import Product from "../entity/product";
import ProductService from "./product";

describe('Product service', () => {
  it('should change the prices of all products', () => {
    const firstProduct = new Product("1", "product one", 10)
    const secondProduct = new Product("1", "product two", 20)
    const products = [firstProduct, secondProduct]
    ProductService.increasePrice(products, 100)
    expect(firstProduct.price).toBe(20)
    expect(secondProduct.price).toBe(40)
  });
});