import { Request, Response } from 'express';
import { UserService } from '../service/UserService';

export class UserController {
    createUser = (req: Request, res: Response): any => {
        const userService = new UserService();
        const user = req.body;

        if (!user.name) {
            return res.status(400).json({ message: "Bad request: name invalid" })
        }

        userService.createUser(user.name, user.email)
        res.status(200).json({
            message: `Toma o usuário aqui: ${user.name}
            })}`
        });
        return
    }

    getAllUsers = (_: Request, res: Response) => {
        const userService = new UserService()
        const users = userService.getAllUsers()

        res.status(200).json(users)
        return
    }
}