import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERID,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect(function (err: any) {
    if (err) throw err;
    console.log("Connection established!");
});

export default connection;