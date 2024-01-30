import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import CustomerRepositoryInterface from "../../domain/repository/customer-interface";
import CustomerModel from "../db/sequelize/model/customer";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zipcode: entity.address.zip,
      city: entity.address.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints,
    })
  }

  async update(entity: Customer): Promise<void> {
    await CustomerModel.update({
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zipcode: entity.address.zip,
      city: entity.address.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints,
    }, {
      where: {
        id: entity.id
      }
    })
  }

  async find(id: string): Promise<Customer> {
    try {
      const customerModel = await CustomerModel.findOne({
        where: {
          id
        },
        rejectOnEmpty: true
      })
      const customer = new Customer(customerModel.id, customerModel.name)
      const address = new Address(customerModel.street, customerModel.number, customerModel.zipcode, customerModel.city)
      customer.changeAddress(address)
      customer.addRewardPoints(customerModel.rewardPoints)

      if (customerModel.active) {
        customer.activate()
      } else {
        customer.deactivate()
      }

      return customer
    } catch (error) {
      throw new Error('Customer not found')
    }
  }

  async findAll(): Promise<Customer[]> {
    const customersModels = await CustomerModel.findAll()
    const customers = customersModels.map((customerModel) => {
      const customer = new Customer(customerModel.id, customerModel.name)
      const address = new Address(customerModel.street, customerModel.number, customerModel.zipcode, customerModel.city)
      customer.changeAddress(address)
      customer.addRewardPoints(customerModel.rewardPoints)

      if (customerModel.active) {
        customer.activate()
      } else {
        customer.deactivate()
      }

      return customer
    })
    return customers
  }
}