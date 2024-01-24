import OrderItem from "./order_item";

export default class Order {
  private _id: string
  private _customerId: string
  private _items: OrderItem[] = []
  private _total: number

  constructor(
    id: string,
    customerId: string,
    items: OrderItem[],
  ) {
    this._id = id
    this._customerId = customerId
    this._items = items
    this._total = this.total()
    this.validate()
  }

  validate() {
    if (!this._id) throw new Error("id is required")
    if (!this._customerId) throw new Error("customerId is required")
    if (!this._items.length) throw new Error("item quantity must be greater than zero")
    if (this._items.some(item => item.quantity <= 0)) throw new Error("item quantity must be greater than zero")
  }
  
  total(): number {
    return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
  }
}