import { client } from "../../prisma/client"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface IAuthentication {
    username: string;
    password: string;
}

class AuthenticateUserUseCase {
    async execute({ password, username }: IAuthentication) {
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username,
            }
        })
        if (!userAlreadyExists) {
            throw new Error("User or password incorrect")
        }

        const passwordMatch = await compare(password, userAlreadyExists.password);

        if (!passwordMatch) {
            throw new Error("User or password incorrect")
        }

        const token = sign({}, "faa0f76b-ed35-4760-987b-fd35f094cc31", {
            subject: userAlreadyExists.id,
            expiresIn: "20s"
        });

        return token
    }
}

export { AuthenticateUserUseCase }