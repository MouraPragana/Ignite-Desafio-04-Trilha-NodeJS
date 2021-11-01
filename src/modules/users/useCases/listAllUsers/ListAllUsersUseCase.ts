/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    execute({ user_id }: IRequest): User[] {
        const userExists = this.usersRepository.findById(user_id);
        if (userExists) {
            if (userExists.admin === true) {
                return this.usersRepository.list()
            }
        }
        throw new Error("You are not a admin")
    }
}

export { ListAllUsersUseCase };
