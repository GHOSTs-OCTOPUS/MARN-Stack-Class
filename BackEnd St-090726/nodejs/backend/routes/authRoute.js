import express from "express"
import { loginController, registerController, testController } from "../controller/authController.js"
import { requireSignIn } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register",registerController)


router.post("/login",loginController)

router.get("/test" ,requireSignIn  , testController)

export default router