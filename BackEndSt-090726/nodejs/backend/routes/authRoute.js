import express from "express"
import { loginController, registerController, testController, updateProfileController, changePasswordController } from "../controller/authController.js"
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register",registerController)


router.post("/login",loginController)

router.get("/test" ,requireSignIn  ,isAdmin ,testController)

router.put("/update-profile", requireSignIn, updateProfileController)

router.put("/change-password", requireSignIn, changePasswordController)

export default router