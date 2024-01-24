import Customer from "../entity/customer"
import Order from "../entity/order"
import OrderItem from "../entity/order_item"
import OrderService from "./order"

describe('Order service', () => {
  it('should get total of all orders', () => {
    const firstItem = new OrderItem("1", "item 1", 100, "p1", 1)
    const secondItem = new OrderItem("2", "item 1", 100, "p2", 2)
    const firstOrder = new Order("1", "c1", [firstItem])
    const secondOrder = new Order("2", "c2", [secondItem])
    const total = OrderService.total([firstOrder, secondOrder])
    expect(total).toBe(firstItem.orderItemTotal() + secondItem.orderItemTotal())
  })

  it('should place an order and verify reward points', () => {
    const customer = new Customer("1", "Matheus")
    const firstItem = new OrderItem("1", "item 1", 100, "p1", 1)
    const order = OrderService.placeOrder(customer, [firstItem])
    expect(customer.rewardPoints).toBe(50)
    expect(order.total()).toBe(100)
  })
})