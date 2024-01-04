import express from "express";
import findUser from "../controllers/findUser.js";
const router = express.Router();

router.get("/", findUser);

export default router;
