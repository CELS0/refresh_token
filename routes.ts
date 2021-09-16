import { Router } from "express";
import { UserController } from "./src/useCases/createUser/UserController";

const router = Router();
const authenticateUserController = new UserController();

router.post('/users', authenticateUserController.handle)

export { router }