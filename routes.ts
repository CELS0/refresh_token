import { Router } from "express";
import { AuthenticateUserController } from "./src/useCases/authenticateUser/AuthenticateUserController";
import { UserController } from "./src/useCases/createUser/UserController";

const router = Router();
const userController = new UserController();
const authenticateUserController = new AuthenticateUserController();

router.post('/users', userController.handle)
router.post('/login', authenticateUserController.handle);

export { router }