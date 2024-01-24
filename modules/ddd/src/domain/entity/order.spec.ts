import Order from "./order"
import OrderItem from "./order_item"

describe('Order unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => new Order("", "1", [])).toThrow("id is required")
  })

  it('should throw error when customerId is empty', () => {
    expect(() => new Order("1", "", [])).toThrow("customerId is required")
  })

  it('should throw error when item quantity is zero', () => {
    expect(() => new Order("1", "123", [])).toThrow("item quantity must be greater than zero")
  })

  it('should calculate total', () => {
    const firstItem = new OrderItem("1", "first item", 10, "p1", 2)
    const secondItem = new OrderItem("1", "second item", 10, "p2", 3)
    const order = new Order("1", "123", [firstItem, secondItem])
    expect(order.total()).toBe(50)
  })

  it('should throw error if the item quantity is grater than 0', () => {
    const firstItem = new OrderItem("1", "first item", 10, "p1", 0)
    expect(() => new Order("1", "123", [firstItem])).toThrow('item quantity must be greater than zero')
  })
})