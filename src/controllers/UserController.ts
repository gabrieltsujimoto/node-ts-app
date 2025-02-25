import { Request, Response } from 'express';
import { IUser, UserService } from '../service/UserService';

export class UserController {
    userService: UserService
    //Para testes
    constructor(
        userService = new UserService()
    ) {
        this.userService = userService
    }

    createUser = (req: Request, res: Response): any => {
        const userService = new UserService();
        const user = req.body;
        if (!user.name || !user.email) {
            const invalidField = user.name ? 'email' : 'name'

            return res.status(400).json({ message: `Bad request: ${invalidField} invalid` })
        }

        userService.createUser(user.name, user.email)
        res.status(200).json({
            message: `Toma o usuário aqui: ${user.name}`
        });
        return res
    }

    getAllUsers = (_: Request, res: Response) => {
        const users = this.userService.getAllUsers()
        res.status(200).json(users)
        return
    }

    deleteUsers = (req: Request, res: Response) => {
        const user = req.body;
        const userService = this.userService.deleteUser(user.email);
        res.status(200).json({
            message: `Usuário deletado! ${user.name}`
        })
        return
    }
}

