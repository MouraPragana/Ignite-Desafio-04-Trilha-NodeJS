/* eslint-disable prettier/prettier */
import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    handle(request: Request, response: Response): Response {
        const { name, email } = request.body
        this.createUserUseCase.execute({ name, email })
        return response.status(200).json({ msg: "User created!" })
    }
}

export { CreateUserController };
