import { Request, Response, Router } from "express";
import { UserController } from "./controllers/UserController";

export const router = Router();
const userController = new UserController();

router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers)
router.delete('/user', (req: Request, res: Response) => {
    const user = req.body;
    console.log('Deletando usuário....', user)
    res.status(200).json({ message: "Usuário deletado!" })
    return
})
