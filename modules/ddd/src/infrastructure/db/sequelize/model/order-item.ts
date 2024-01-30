import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import ProductModel from "./product";
import OrderModel from "./order";

@Table({
  tableName: 'order_item',
  timestamps: false
})
export default class OrderItemModel extends Model {
  @PrimaryKey
  @Column
  declare id: string

  @ForeignKey(() => ProductModel)
  @Column({ allowNull: false })
  declare product_id: string

  @ForeignKey(() => OrderModel)
  @Column({ allowNull: false })
  declare order_id: string

  @Column({ allowNull: false })
  declare quantity: number

  @Column({ allowNull: false })
  declare name: string

  @Column({ allowNull: false })
  declare price: number
  
  @BelongsTo(() => ProductModel)
  declare product: ProductModel
}