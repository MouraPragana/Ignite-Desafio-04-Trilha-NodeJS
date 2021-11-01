/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

    handle(request: Request, response: Response): Response {
        try {
            const { user_id } = request.headers;
            const userIdToString = user_id.toString()
            const listUsers = this.listAllUsersUseCase.execute({ user_id: userIdToString });
            return response.status(200).json(listUsers)
        } catch (error) {
            return response.status(400).json({ error: error.message })
        }

    }
}

export { ListAllUsersController };
