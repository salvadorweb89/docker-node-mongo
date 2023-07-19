import { Router } from "express";
import { initContent } from "../controllers/indexController.js";
import { createDefaultUser } from "../actions/createDefault.js";


const router = Router();

router.get("/", initContent);
router.get("/createDefaultUser", createDefaultUser);


export default router;