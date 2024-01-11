export class User {
    _id?: string
    name: string
    lastName: string
    email: string
    password: string
    type: string

    constructor(name: string, lastName: string, email: string, password: string, type: string){
        this.name = name
        this.lastName = lastName
        this.email = email
        this.password = password
        this.type = type
    }
}