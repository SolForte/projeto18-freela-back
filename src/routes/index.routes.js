import { Router } from "express";
import insertRouter from "./insert.routes.js";

const router = Router();
router.use(insertRouter);

export default router;
