import { Router } from 'express';
import connection from '../dbconfig/Connection';
const router = Router();

const getAllUsers = async (req: any, res: any) => {
    let users = req.body;
    let query = 'SELECT * FROM base.users where Active = true'
    connection.query(query, (err, result) => {
        if (!err) {
            return res.status(200).json({
                responseStatusCode: 200,
                validationError: err,
                responseMessage: 'Success!',
                responseData: result
            });
        } else {
            console.log(err)
        }
    })
}


const createUsers = async (req: any, res: any) => {
    console.log(req);
}


export default { getAllUsers, createUsers }