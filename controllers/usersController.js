import express from 'express';
import sql from '../models/dbConfig.js';
import user from '../models/userModel.js';
const router = express.Router();

export default {
    getAllUsers : (req, res) => {
        let sqlQuery = "SELECT * FROM users WHERE 1";
        sql.query(sqlQuery, (err, result) => {
            if (err) throw err;
            console.log("Users: ", result);
            res.send(result);
        });
    },

    getItemById : (req, res) => {
        let id = req.params.userid;
        res.send('ok')
    },

    create : (req, res) => {
        let newUser = new user(req.body);
        let sqlQuery = "INSERT INTO users (firstName, lastName, email) VALUES ( '"+ newUser.firstName +"','" + 
            newUser.lastName + "','" + newUser.email + "')";
            console.log(sqlQuery);
        sql.query(sqlQuery, (err, result) => {
            if (err) throw err;
            console.log("User created with success: ", { id: res.insertId, ...newUser });
            res.send({result, ...newUser });
        });
    },

    updateItemById : (req, res) => {
        let newUser = new user(req.body);
        let id = req.params.id;
        let sqlQuery = "UPDATE users SET firstName = " + newUser.firstName + ",lastName = " + 
        newUser.lastName + ",email =" + newUser.email + "WHERE id = " + id;
        sql.query(sqlQuery, (err, result) => {
            if (err) throw err;
            if (result.affectedRows == 0) {
                console.log("Upade not made");
                return;
            }
            console.log("Users: ", result);
            res.send(result);
        });
    },

    deleteItemById : (req, res) => {
        
    }

}

