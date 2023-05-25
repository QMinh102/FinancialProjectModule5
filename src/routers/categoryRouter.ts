import {Router} from "express";

import categoryController from "../controllers/categoryController";


const categoryRouter = Router();

categoryRouter.get('/',categoryController.getAll)
categoryRouter.get('/one/',categoryController.getOne)
categoryRouter.post('/',categoryController.create)
categoryRouter.put('/',categoryController.update)
categoryRouter.delete('/',categoryController.remove)

export default categoryRouter;