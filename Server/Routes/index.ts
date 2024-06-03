/**
 * File: index.ts
 * Student Name: Priyanka Saxena
 * StudentID: 200583643
 * Date: 1996-02-24
 */


import express from 'express';
const router = express.Router();

import { DisplayMovieList } from '../Controllers/movie';

/* GET movie list*/
router.get('/', function(req, res, next) {DisplayMovieList(req, res, next);
});

export default router;
