import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product";
import Product from "../../domain/entity/product";
import ProductRepository from "./product";
import CustomerModel from "../db/sequelize/model/customer";
import CustomerRepository from "./customer";
import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";

describe('Customer Repository', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: {force: true}
    })

    sequelize.addModels([CustomerModel])

    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a customer', async() => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer("1", "Customer 1")
    const address = new Address("Street 1", 1, "12345", "City 1")
    customer.changeAddress(address)
    await customerRepository.create(customer)

    const customerModel = await CustomerModel.findOne({
      where: {
        id: customer.id
      }
    })
    expect(customerModel.toJSON()).toStrictEqual({
      id: customer.id,
      name: customer.name,
      street: address.street,
      number: address.number,
      zipcode: address.zip,
      city: address.city,
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
    })
  })

  it('should update a customer', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer("1", "Customer 1")
    const address = new Address("Street 1", 1, "12345", "City 1")
    customer.changeAddress(address)
    await customerRepository.create(customer)

    customer.changeName("Product 2")
    await customerRepository.update(customer)

    const customerModel = await CustomerModel.findOne({
      where: {
        id: customer.id
      }
    })

    expect(customerModel.toJSON()).toStrictEqual({
      id: customer.id,
      name: customer.name,
      street: address.street,
      number: address.number,
      zipcode: address.zip,
      city: address.city,
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
    })
  })

  it('should find a customer by id', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer("1", "Customer 1")
    const address = new Address("Street 1", 1, "12345", "City 1")
    customer.changeAddress(address)
    await customerRepository.create(customer)

    const customerResult = await customerRepository.find(customer.id)
    expect(customer).toStrictEqual(customerResult)
  })

  it('should throw an error when customer is not found', async () => {
    const customerRepository = new CustomerRepository()
    const promise = customerRepository.find("1")
    await expect(promise).rejects.toThrow("Customer not found")
  })

  it('should find all customers', async () => {
    const customerRepository = new CustomerRepository()
    const firstCustomer = new Customer("1", "Customer 1")
    const secondCustomer = new Customer("2", "Customer 2")
    const address = new Address("Street 1", 1, "12345", "City 1")
    firstCustomer.changeAddress(address)
    secondCustomer.changeAddress(address)

    await customerRepository.create(firstCustomer)
    await customerRepository.create(secondCustomer)

    const customers = await customerRepository.findAll()

    expect(customers.length).toBe(2)
  })
})