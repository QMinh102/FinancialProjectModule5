"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.createNewUser = async (user) => {
            let newUser = await this.userRepository.save(user);
            return newUser;
        };
        this.checkUser = async (user) => {
            let userFind = await this.userRepository.findOne({
                where: {
                    username: user.username,
                }
            });
            return userFind;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map