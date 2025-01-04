import express from "express";
import { login, logout, Register } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/signup', Register);
router.post('/login', login);
router.get('/logout', logout);

export default router;