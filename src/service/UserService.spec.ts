import { IUser, UserService } from "./UserService"

describe('UserService', () => {
    const mockDb: IUser[] = []
    const mockUserService = new UserService(mockDb);
    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        mockUserService.createUser('teste', 'teste@teste.com');
        expect(mockConsole).toHaveBeenCalledWith('DB Actual', mockDb);
    })
})