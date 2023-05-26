import {Request, Response} from "express";
import UserService from "../services/userService";

class UserController {
    private UserService

    constructor() {
        this.UserService = UserService
    }

    register = async (req: Request, res: Response) => {
        await UserService.createNewUser(req.body)
        res.status(201).json({message: "User register succeeded !!"})
    }

    login = async (req: Request, res: Response) => {
        let check = await UserService.checkUser(req.body)
        res.status(200).json(check)
    }

}

export default new UserController()