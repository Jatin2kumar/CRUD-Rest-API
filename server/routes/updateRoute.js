import express from "express";
const router = express.Router();
import updateUser from "../controllers/updateUser.js";
router.put("/", updateUser);

export default router;
