import express, { Request, Response } from 'express'
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router);

//* Aqui é a home, o ponto de entrada. 
server.get('/', (_: Request, res: Response) => {
    res.status(200).json({ message: 'Lokos API' });
    return
});

server.listen(5000, () => {
    console.log('-------- Server online --------');
});