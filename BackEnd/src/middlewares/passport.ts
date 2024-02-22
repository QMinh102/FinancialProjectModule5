import passport, {use} from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import userService from "../services/userService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {SECRET} from './auth'

// import {Strategy as FacebookStrategy} from "passport-facebook";

export const passportGoogle = passport.use(<passport.Strategy>new GoogleStrategy({
        clientID: '764707668344-2pg3i9f3uma21h3b2mppg1uuosugbrqk.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3001/auth/google/callback',
        passReqToCallback: true
    },
    async (req, accessToken,  refreshToken, profile, done) => {
    try {
        let receivedUser = {
            username: profile._json.email
        }
            let userFind = await userService.checkUser(receivedUser).catch((err)=>{
                console.log('lỗi checkuser');
                done(err, null);
            });
            if (!userFind) {
               let  newUser = {
                    username: profile._json.email,
                    password: await bcrypt.hash(String(Math.random()), 10)
                };
                const createdUser = await userService.createNewUser(newUser).catch((err)=>{
                    console.log('lỗi created');
                    done(err, null)
                });
                const payload = { username: createdUser.username, userId: createdUser.id };
                const token = jwt.sign(payload, SECRET, { expiresIn: 36000 });
                const user = {token:token, username: createdUser.username}
                req.session['user'] = user
                done(null, user);
            }else{
                const payload = { username: userFind.username, userId: userFind.id };
                const token = jwt.sign(payload, SECRET, { expiresIn: 36000 });
                const user = {token: token, username: userFind.username}
                req.session['user'] = user
                done(null, user );
            }
        } catch (error) {
            console.log('lỗi catch');
            done(error, null);
        }
    }))


// Trả về khi đăng nhập thành công và chuyển đối tuợng thành một chuỗi để lưu trữ trong phiên đăng nhập
passport.serializeUser((user, done) => {
    try {
        // handle serialization
        console.log(3)
        done(null, user);

    } catch (error) {
        // handle error
        console.log(4)
        done(error, null);

    }
});


// Dùng khi có request mới và passpost cần lấy thông tin người dùng
// Dùng khi người dùng gửi lên request mới xác thực giống như jwt
// Không cần sử dụng trong trường hợp này
passport.deserializeUser(async (user, done) => {
    try {
        // handle deserialization
        console.log(1)
        done(null, user);

    } catch (error) {
        // handle error
        console.log(2)
        done(error, null);

    }
});






