import { Request, Response, NextFunction } from 'express';
import Movie from '../Models/movie';

/**
 * This function displays the movie list in JSON format
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export function DisplayMovieList(req: Request, res: Response, next: NextFunction): void {
    Movie.find({})
        .then((data) => {
            res.status(200).json({ success: true, msg: "Movie list retrieved and displayed", data: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "An error occurred while retrieving movie list" });
        });
}

