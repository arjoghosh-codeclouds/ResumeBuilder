import express from 'express'
import { fetchEmail, getUserProfile, loginUser, registerUser, resetPassword } from '../controller/userController.js'
import { protect } from '../middlewares/authmiddleware.js'
const userRouter=express.Router()
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/forgot-password', fetchEmail);
userRouter.post('/reset-password',resetPassword);
//protected route
userRouter.get('/profile',protect,getUserProfile)
export default userRouter