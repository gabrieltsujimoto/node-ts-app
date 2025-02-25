export interface IUser {
    name: string,
    email: string
}

const db = [
    {
        name: "blabla",
        email: "aaaaaaa@bbbbb.ccc"
    }
];



export class UserService {
    db: IUser[];

    constructor(
        database = db
    ) {
        this.db = database
    }
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email,
        }
        this.db.push(user)
        console.log(`Novo usuario adicionado: ${user.name}`)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (email: string) => {
        const index = db.findIndex(user => user.email === email)
        this.db.map(data => {
            this.db.indexOf(data) === index ? this.db.splice(index, 1) : ''
        })

        return this.db
    }

}