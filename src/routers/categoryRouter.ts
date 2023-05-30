import {Router} from "express";

import categoryController from "../controllers/categoryController";
import {auth} from "../middlewares/auth";


const categoryRouter = Router();
// categoryRouter.use(auth)
categoryRouter.get('/',categoryController.getAll)
categoryRouter.get('/:id',categoryController.getOne)
categoryRouter.post('/',categoryController.create)
categoryRouter.put('/:id',categoryController.update)
categoryRouter.delete('/',categoryController.remove)

export default categoryRouter;