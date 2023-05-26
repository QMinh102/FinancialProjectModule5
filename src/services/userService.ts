import {AppDataSource} from "../data-source";
import {User} from "../entity/user";

class UserService{
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }
    createNewUser = async (user) => {
        let newUser = await this.userRepository.save(user)
        return newUser
    }

    checkUser = async (user) => {
        console.log(user)
        let userFind = await this.userRepository.findOne({
            where: {
                username: user.username,
            }
        });
        return userFind;
    }


}