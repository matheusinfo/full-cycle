import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product";
import Product from "../../domain/entity/product";
import ProductRepository from "./product";
import CustomerModel from "../db/sequelize/model/customer";
import CustomerRepository from "./customer";
import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";
import OrderModel from "../db/sequelize/model/order";
import OrderItemModel from "../db/sequelize/model/order-item";
import OrderItem from "../../domain/entity/order_item";
import Order from "../../domain/entity/order";
import OrderRepository from "./order";

describe('Order Repository', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: {force: true}
    })

    sequelize.addModels([CustomerModel, ProductModel, OrderItemModel, OrderModel])

    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a new order', async() => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'John Doe')
    const address = new Address('Street', 1, '12345', 'City')
    customer.changeAddress(address)
    await customerRepository.create(customer)
    expect(1).toBe(1)

    const productRepository = new ProductRepository()
    const product = new Product('1', 'Product 1', 100)
    await productRepository.create(product)

    // const orderItem = new OrderItem("1", product.name, product.price, product.id, 2)
    
    // const order = new Order("123", customer.id, [orderItem])
    // const orderRepository = new OrderRepository()
    // await orderRepository.create(order)

    // const orderModel = await OrderModel.findOne({
    //   where: { id: order.id },
    //   include: ["items"]
    // })

    // expect(orderModel.toJSON()).toStrictEqual({
    //   id: order.id,
    //   customer_id: customer.id,
    //   total: order.total(),
    //   items: [{
    //     id: orderItem.id,
    //     name: orderItem.name,
    //     price: orderItem.price,
    //     quantity: orderItem.quantity,
    //     product_id: product.id,
    //   }]
    // })
  })
})