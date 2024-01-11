export class Pedidos {
    _id?: string
    name: string
    price: number
    address: string
    status: string

    constructor(name: string, price: number, address: string, status: string){
        this.name = name
        this.price = price
        this.address = address
        this.status = status
    }
}