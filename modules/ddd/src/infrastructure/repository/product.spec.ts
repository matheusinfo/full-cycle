import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product";
import Product from "../../domain/entity/product";
import ProductRepository from "./product";

describe('Product Repository', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: {force: true}
    })

    sequelize.addModels([ProductModel])

    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a product', async() => {
    const productRepository = new ProductRepository()
    const product = new Product("1", "Product 1", 100)
    await productRepository.create(product)
    const productModel = await ProductModel.findOne({
      where: {
        id: "1"
      }
    })
    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 1",
      price: 100
    })
  })

  it('should update a product', async () => {
    const productRepository = new ProductRepository()
    const product = new Product("1", "Product 1", 100)
    await productRepository.create(product)

    product.changeName("Product 2")
    product.changePrice(200)
    await productRepository.update(product)

    const productModel = await ProductModel.findOne({
      where: {
        id: "1"
      }
    })

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 2",
      price: 200
    })
  })

  it('should find a product by id', async () => {
    const productRepository = new ProductRepository()
    const product = new Product("1", "Product 1", 100)
    await productRepository.create(product)

    const productModel = await ProductModel.findOne({
      where: {
        id: "1"
      }
    })

    const productFind = await productRepository.find("1")

    expect(productModel.toJSON()).toStrictEqual({
      id: productFind.id,
      name: productFind.name,
      price: productFind.price
    })
  })

  it('should find all products', async () => {
    const productRepository = new ProductRepository()
    const firstProduct = new Product("1", "Product 1", 100)
    const secondProduct = new Product("2", "Product 2", 100)
    await productRepository.create(firstProduct)
    await productRepository.create(secondProduct)

    const productsFind = await productRepository.findAll()

    expect(productsFind.length).toBe(2)
  })
})