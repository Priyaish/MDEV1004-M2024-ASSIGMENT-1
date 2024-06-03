/**
 * movie.ts
 * Defines the Movie Schema and Model
 * Student Name: Priyanka Saxena
 * StudentID: 200583643
 * Date: 02-06-2024
 */

import { Schema, model, Document } from 'mongoose';

// Define the IMovie interface
interface IMovie extends Document {
    movieID: string;
    title: string;
    studio: string;
    genres: string[];
    directors: string[];
    writers: string[];
    actors: string[];
    year: number;
    length: number;
    shortDescription: string;
    mpaRating: string;
    criticsRating: number;
}

// Define the movie schema
const movieSchema = new Schema<IMovie>({
    movieID: String,
    title: String,
    studio: String,
    genres: [String],
    directors: [String],
    writers: [String],
    actors: [String],
    year: Number,
    length: Number,
    shortDescription: String,
    mpaRating: String,
    criticsRating: Number
});

// Create the Movie model
const Movie = model<IMovie>('Movie', movieSchema);

export default Movie;
