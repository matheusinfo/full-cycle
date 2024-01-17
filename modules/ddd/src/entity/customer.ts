import Address from "./address";

export default class Customer {
  private _id: string
  private _name: string = ""
  private _address!: Address
  private _active = false 
  
  constructor(id: string, name: string) { 
    this._id = id
    this._name = name
    this.validate()
  }

  validate() {
    if (!this._id) throw new Error("id is required")
    if (!this._name) throw new Error("name is required")
  }

  get name(): string {
    return this._name
  }

  set address(address: Address) {
    this._address = address
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  isActive(): boolean {
    return this._active
  }

  activate() {
    if(!this._address) throw new Error("address is required to activate a customer")
    this._active = true
  }

  deactivate() {
    this._active = false
  }
}
