import express from "express";
import deleteUser from "../controllers/deleteUser.js";
const router = express.Router();

router.delete("/", deleteUser);

export default router;
