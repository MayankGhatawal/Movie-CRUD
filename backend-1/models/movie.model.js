import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title!"],
        unique: false,
    },
    director: {
        type: String,
        required: [true, "Please provide a director!"],
        unique: false,
    },
    releasedate: {
        type: Number,
        required: [true, "Please provide a release date!"],
        unique: false,
    },
    genre: {
        type: String,
        required: [true, "Please provide a genre!"],
        unique: false,
    }
}, {timestamps: true});

export const Movie = mongoose.model('Movie', movieSchema);