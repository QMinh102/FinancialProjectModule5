import {Router} from 'express'
import userController from "../controllers/userController";
import {passportGoogle} from '../middlewares/passport'

const userRouter = Router()
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);
userRouter.get('/google', passportGoogle.authenticate('google', {
    scope: ['profile', 'email']
}))

userRouter.get('/google/callback', passportGoogle.authenticate('google'), (req, res)=>{
    const token = req.user['token']
    res.json({token})
});




export default userRouter