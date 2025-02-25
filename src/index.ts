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


/* TODO 
'   [] Incluir os testes unitários pendentes no controller
OK (REFAC?)        - Verificar a resposta de erro caso o usuário não informe o name
     OK   -Verificar se a função getAllusers está sendo chamada
    
    [X] Implementa uma validação para o campo email
        -O usuário nâo pode ser criado caso não informe o email
        -Escreva o teste unitário
    
    [ ] Refatorar e implementar a rota para deletar o usuário

        ok -Refatore a rota para deletar usuários
         -Escreva os testes unitários necessários
*/
