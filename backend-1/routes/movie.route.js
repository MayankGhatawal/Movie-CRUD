import express from "express";
import { addMovies, getMovies, updateMovies, deleteMovies } from "../controllers/movie.controller.js";
import { isAuthenticated } from "../middleware/isAuth.js";

const router = express.Router();

// All Movies Data
router.get('/', getMovies);
router.post('/add', isAuthenticated, addMovies);
router.put('/update/:id', isAuthenticated, updateMovies);
router.delete('/delete/:movieId', isAuthenticated, deleteMovies);

export default router;