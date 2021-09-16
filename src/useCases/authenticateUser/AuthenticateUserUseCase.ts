import { client } from "../../prisma/client"

interface IAuthentication {
    username: string;
    password: string;
}

class AuthenticateUserUseCase {
    async execute({ password, username }: IAuthentication) {
        const userExists = await client.user.findFirst({
            where: {
                username,
            }
        })

        if (userExists) {

        }
    }
}

export { AuthenticateUserUseCase }