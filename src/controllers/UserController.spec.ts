import { makeMockRequest } from "../__mocks__/mockRequest";
import { makeMockResponse } from "../__mocks__/mockResponse";
import { UserService } from "../service/UserService";
import { UserController } from "./UserController";
import { request, Request } from "express";
describe("UserController Teste", () => {
    //Tipo partial: pode colocar apenas PARTE da classe/interface que está sendo tipada.    
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn().mockReturnValue([{ name: "Gabriel", email: "gabriel@teste.com" }]),
        deleteUser: jest.fn(),
    }

    //por ser partial, pode ser usado o AS como definição do valor do tipo do UserService   
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário e retornar 200', () => {
        const mockRequest = {
            body: {
                name: "Gabriel",
                email: "gabriel@teste.com"
            }
        } as Request;
        const mockResponse = makeMockResponse();


        const response = userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: `Toma o usuário aqui: Gabriel` })
    })

    it('Deve retornar um código de erro 400 (Bad Request): e-mail faltante', () => {
        const mockRequest = {
            body: {
                name: "Gabriel",
                email: ""
            }
        } as Request;
        const mockResponse = makeMockResponse();

        const response = userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request: email invalid" })
    })
    it('Deve retornar um código de erro 400 (Bad Request): nome faltante', () => {
        const mockRequest = {
            body: {
                name: "",
                email: "gabriel@teste.com"
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request: name invalid" })
    })

    it("Deve utilizar a função getAllUsers() e retornar um objeto válido", () => {
        const mockResponse = makeMockResponse();

        // Espionar a função para verificar a chamada
        const spy = jest.spyOn(mockUserService, "getAllUsers");

        userController.getAllUsers(request, mockResponse);
        expect(spy).toHaveBeenCalled();
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toEqual([{ name: "Gabriel", email: "gabriel@teste.com" }]);
    });

    it('Deve excluir o usuário específicado e retornar 200', () => {
        const mockResponse = makeMockResponse();
        const mockRequest = {
            body: {
                name: "gabriel",
                email: "gabriel@teste.com"
            }

        } as Request;
        const spy = jest.spyOn(mockUserService, "deleteUser");

        userController.deleteUsers(mockRequest, mockResponse);

        expect(spy).toHaveBeenCalled();
        expect(mockResponse.state.status).toBe(200);

    })
})
