import Order from "./order"
import OrderItem from "./order_item"
import Product from "./product"

describe('Product unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => new Product("", "Product", 100)).toThrow("id is required")
  })

  it('should throw error when name is empty', () => {
    expect(() => new Product("1", "", 100)).toThrow("name is required")
  })

  it('should throw error when price is invalid', () => {
    expect(() => new Product("1", "Product", NaN)).toThrow("price is required")
  })

  it('should change product name with success', () => {
    const product = new Product("1", "Product", 10)
    product.changeName("New Product")
    expect(product.name).toBe("New Product")
  })

  it('should change product price with success', () => {
    const product = new Product("1", "Product", 10)
    product.changePrice(5)
    expect(product.price).toBe(5)
  })
})