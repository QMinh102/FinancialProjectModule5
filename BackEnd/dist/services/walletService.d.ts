declare class WalletService {
    private walletRepository;
    constructor();
    getAll: (idUser: any) => Promise<any>;
    getOne: (id: any) => Promise<any>;
    create: (newWallet: any) => Promise<void>;
    update: (id: any, newWallet: any) => Promise<void>;
    remove: (id: any) => Promise<void>;
    getTotalOfWallet: (walletId: any) => Promise<any>;
}
declare const _default: WalletService;
export default _default;
