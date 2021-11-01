/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

    handle(request: Request, response: Response): Response {
        const { id } = request.body;
        this.turnUserAdminUseCase.execute({ user_id: id });
        return response.status(201).json({ msg: "User updated to admin" });
    }
}

export { TurnUserAdminController };
