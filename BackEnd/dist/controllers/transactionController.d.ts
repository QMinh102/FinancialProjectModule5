import { Request, Response } from "express";
declare class TransactionController {
    private TransactionService;
    constructor();
    getOne: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
declare const _default: TransactionController;
export default _default;
