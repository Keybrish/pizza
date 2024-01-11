export class Promociones {
    _id?: string
    name: string
    price: number
    day: string
    image: string

    constructor(name: string, price: number, day: string, image: string){
        this.name = name
        this.price = price
        this.day = day
        this.image = image
    }
}