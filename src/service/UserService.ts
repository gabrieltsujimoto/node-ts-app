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
        console.log('DB Actual', this.db)
    }

    getAllUsers = () => {
        return db
    }
}