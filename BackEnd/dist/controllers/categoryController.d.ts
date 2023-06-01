import { Request, Response } from "express";
declare class CategoryController {
    private CategoryService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    getOne: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
