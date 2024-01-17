import Address from "./address"
import Customer from "./customer"

describe('Customer unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => new Customer("", "matheusinfo")).toThrow("id is required")
  })

  it('should throw error when name is empty', () => {
    expect(() => new Customer("1", "")).toThrow("name is required")
  })

  it('should change name with success', () => {
    const customer = new Customer("1", "matheusinfo")
    customer.changeName("matheusinfo2")
    expect(customer.name).toBe("matheusinfo2")
  })

  it('should activate customer', () => {
    const customer = new Customer("1", "matheusinfo")
    const address = new Address("1", "rua 1", "12345678", "SP")
    customer.address = address
    customer.activate()
    expect(customer.isActive()).toBeTruthy()
  })

  it('should throw error when address is undefined when activate a customer', () => {
    const customer = new Customer("1", "matheusinfo")
    expect(() => customer.activate()).toThrow("address is required to activate a customer")
  })

  it('should deactivate customer', () => {
    const customer = new Customer("1", "matheusinfo")
    customer.deactivate()
    expect(customer.isActive()).toBeFalsy()
  })
})