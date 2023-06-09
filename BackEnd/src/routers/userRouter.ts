import {Router} from 'express'
import userController from "../controllers/userController";
import {passportGoogle} from '../middlewares/passport'
// import {passportFaceBook} from "../middlewares/passport";

const userRouter = Router()
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);
userRouter.get('/google', passportGoogle.authenticate('google', {
    scope: ['profile', 'email']
}))

userRouter.get('/google/callback', passportGoogle.authenticate('google'), (req, res)=>{
    console.log(1)
    const token = req.user['token']
    res.json({token})
});

// userRouter.get('/facebook', passportFaceBook.authenticate('facebook',
//     {scope:'email'}));
//
// userRouter.get('/facebook/callback',
//     passportFaceBook.authenticate('facebook', { successRedirect : '/', failureRedirect: '/login' }),
//     function(req, res) {
//         const token = req.user['token']
//         res.json({token})
//     });





export default userRouter