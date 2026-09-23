import express from "express"
import { deleteUserController, getAllUsersController, loginController, registerController, testController } from "../controller/authController.js"
import { requireSignIn , isAdmin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register",registerController)

router.post("/login",loginController)

router.get("/test" ,requireSignIn , isAdmin, testController)

router.get("/users" ,requireSignIn , isAdmin, getAllUsersController)

router.delete("/users/:id" ,requireSignIn , isAdmin, deleteUserController)

export default router
