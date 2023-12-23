import { Router } from 'express';
import connection from '../dbconfig/Connection';
import { ResultSetHeader } from 'mysql2';
const router = Router();

const getAllUsers = async (req: any, res: any) => {
    let query = `SELECT * FROM ${process.env.DB_NAME}.users where Active = true`;
    connection.query(query, (err, result) => {
        if (!err) {
            return res.status(200).json({
                responseStatusCode: 200,
                validationError: err,
                responseMessage: 'Success!',
                responseData: result
            });
        } else {
            return res.send('error');
        }
    })
}
const getUsersById = async (req: any, res: any) => {
    let query = `SELECT * FROM ${process.env.DB_NAME}.users WHERE id = ${req.params.id}`;
    connection.query(query, (err, result) => {
        if (!err) {
            return res.status(200).json({
                responseStatusCode: 200,
                validationError: err,
                responseMessage: 'Submitted Successfully!',
                responseData: result
            })
        } else {
            return res.send('error');
        }
    })
}

const createUsers = async (req: any, res: any) => {
    let user = req.body;
    const query = `INSERT INTO ${process.env.DB_NAME}.users (firstName, lastname, phoneNumber, emailAddress, address, userName, password, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?) `;
    connection.query(query, [user.firstName, user.lastName, user.phoneNumber, user.emailAddress, user.address, user.userName, user.password, (user.active = 1)], (err, result) => {
        if (!err) {
            return res.status(200).json({
                responseStatusCode: 200,
                validationError: err,
                responseMessage: 'Submitted Successfully!',
                responseData: null
            })
        } else {
            return res.send('error');
        }
    })
}

const UpdateUser = async (req: any, res: any) => {
    let userId = req.params.id;
    let user = req.body;
    let query = `UPDATE ${process.env.DB_NAME}.users SET firstName=?, lastname=?, phoneNumber=?, emailAddress=?, address=?, userName=?, password=? WHERE id=?`;
    connection.query(query, [user.firstName, user.lastName, user.phoneNumber, user.emailAddress, user.address, user.userName, user.password, userId], (err, result) => {
        if (!err) {
            if ('affectedRows' in result) {
                const affectedRows = (result as ResultSetHeader).affectedRows;
                if (affectedRows == 0) {
                    return res.status(404).json({
                        responseStatusCode: 404,
                        validationError: err,
                        responseMessage: 'UserId does not found!',
                        responseData: null
                    })
                }
            }
            return res.status(200).json({
                responseStatusCode: 200,
                validationError: err,
                responseMessage: 'Updated Successfully!',
                responseData: result
            })
        } else {
            return res.send('error');
        }
    })
}

const deleteUser = async (req: any, res: any) => {
    let userId = req.params.id;
    let query = `UPDATE ${process.env.DB_NAME}.users SET active = false WHERE id=?`;
    connection.query(query, [userId], (err, result) => {
        if (!err) {
            if ('affectedRows' in result) {
                const affectedRows = (result as ResultSetHeader).affectedRows;
                if (affectedRows == 0) {
                    return res.status(404).json({
                        responseStatusCode: 404,
                        validationError: err,
                        responseMessage: 'UserId does not found!',
                        responseData: null
                    })
                }
            }
            return res.status(200).json({
                responseStatusCode: 200,
                validationError: err,
                responseMessage: 'Deleted Successfully!',
                responseData: result
            })
        }
    })
}

const authUser = async (req: any, res: any) => {
    //Authenication In-progress
}


export default { getAllUsers, getUsersById, createUsers, UpdateUser, deleteUser, authUser }