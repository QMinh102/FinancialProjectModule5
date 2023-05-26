declare class UserService {
    private userRepository;
    constructor();
    createNewUser: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
