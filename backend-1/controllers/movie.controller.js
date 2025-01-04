import { Movie } from "../models/movie.model.js";

// Add The Movie
export const addMovies = async (req, res) => {
    try {
        const {title, director, releasedate, genre} = req.body;
        if (!title || !director || !releasedate || !genre) {
            return res.status(400).json({ 
                success:false, 
                message: "Please provide all fields"
            });
        }
        const movie = new Movie({title: title, director: director, releasedate: releasedate, genre: genre});
        await movie.save();
        return res.status(201).json({
            success: true,
            message: "Movie created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// Get All Movies
export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        return res.status(200).json({
            success: true,
            movies: movies.length < 0 ? [] : movies
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// Update Movies Information

export const updateMovies = async (req, res) => {
    const _id = req.params.movieId;
    try {
        const updatedMovie = await Movie.findOneAndUpdate({_id: req.params});
        if (!updatedMovie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }
        const updateMovie = await Movie.findOne(_id);
        return res.status(201).json({
            success: true,
            message: "Movie updated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// Delete Movies

export const deleteMovies = async (req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({_id: req.params.movieId});
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Movie deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}