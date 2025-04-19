import express from "express";
import * as drawController from "../controllers/draw-controller";

const router = express.Router();

router.get("/", drawController.drawThreeCards);
export default router;