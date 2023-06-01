import { Request, Response } from "express";
export declare const getToken: (req: Request, res: Response) => Promise<any>;
declare class WalletController {
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    getOne: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
}
declare const _default: WalletController;
export default _default;
