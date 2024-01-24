export default class Product {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this.validate();
  }

  validate() {
    if (!this._id) throw new Error("id is required");
    if (!this._name) throw new Error("name is required");
    if (!this._price || this._price <= 0) throw new Error("price is required and must be greater than zero");
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  changePrice(price: number) {
    this._price = price;
    this.validate();
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}