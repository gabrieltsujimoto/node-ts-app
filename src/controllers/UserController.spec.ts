import { UserService } from "../service/UserService";
import { UserController } from "./UserController";
import { makeMockRequest } from "../__mocks__/mockRequest";
import { makeMockResponse } from "../__mocks__/mockResponse";

describe("UserController Teste", () =>{
    //Tipo partial: pode colocar apenas PARTE da classe/interface que está sendo tipada.    
    const mockUserService: Partial<UserService> = {}

    //por ser partial, pode ser usado o AS como definição do valor do tipo do UserService   
    const userController = new  UserController(mockUserService as UserService);


    it('Deve adicionar um novo usuário', () =>{
        const mockRequest = makeMockRequest({});
        const mockResponse = makeMockResponse();


        const response = userController.createUser(mockRequest, mockResponse )

        console.log(response)
    })

    
})
