import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import userService from "../services/userService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {SECRET} from './auth'

// import {Strategy as FacebookStrategy} from "passport-facebook";

export const passportGoogle = passport.use(<passport.Strategy>new GoogleStrategy({
        clientID: '764707668344-2pg3i9f3uma21h3b2mppg1uuosugbrqk.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'https://localhost:3001/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
    let receivedUser = {
        username: profile._json.email
    }
    try {
            let userFind = await userService.checkUser(receivedUser);
            if (!userFind) {
               let  newUser = {
                    username: profile._json.email,
                    password: await bcrypt.hash(String(Math.random()), 10)
                };
                const createdUser = await userService.createNewUser(newUser);
                const payload = { username: createdUser.username, userId: createdUser.id };
                const token = jwt.sign(payload, SECRET, { expiresIn: 36000 });
                done(null, {token});
            }else{
                const payload = { username: userFind.username, userId: userFind.id };
                const token = jwt.sign(payload, SECRET, { expiresIn: 36000 });
                done(null,  {token});
            }

        } catch (error) {
            done(error, null);
        }
    }))

// export const passportFaceBook = passport.use(new FacebookStrategy({
//         clientID: '606661848098062',
//         clientSecret: 'cbf2523a5d94e1b5f9fb731b84a2da27' ,
//         callbackURL: '/auth/facebook/callback',
//     },
//
//     async (accessToken, refreshToken, profile, done) => {
//         let receivedUser = {
//             username: profile.id
//         }
//         try {
//             // Check if user already exists in database
//             let userFind = await userService.checkUser(receivedUser);
//             if (!userFind) {
//                 let  newUser = {
//                     username: profile.id,
//                     password: await bcrypt.hash(String(Math.random()), 10)
//                 };
//                 const createdUser = await userService.createNewUser(newUser);
//                 const payload = { username: createdUser.username, userId: createdUser.id };
//                 const token = jwt.sign(payload, SECRET, { expiresIn: 36000 });
//                 done(null, {token});
//             }else{
//                 //Đã đăng nhập bằng google rồi nhưng bị hết token và phải đăng nhập lại
//                 const payload = { username: userFind.username, userId: userFind.id };
//                 const token = jwt.sign(payload, SECRET, { expiresIn: 36000 });
//                 console.log(token)
//                 done(null,  {token});
//             }
//
//         } catch (error) {
//             done(error, null);
//         }
//     }
// ));



passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});




