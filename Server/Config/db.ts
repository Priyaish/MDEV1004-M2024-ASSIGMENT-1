/**
 * db.ts
 * Starts the Express server
 * Student Name: Priyanka Saxena
 * StudentID: 200583643
 * Date: 02-06-2024
 */

let remoteURI=(process.env.MONGO_URI) as string;

export default {
    remoteURI: remoteURI,
}

