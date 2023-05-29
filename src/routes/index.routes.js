import { Router } from "express";
import insertRouter from "./insert.routes.js";
import getRouter from "./get.routes.js";

const router = Router();
router.use(insertRouter);
router.use(getRouter);

export default router;
