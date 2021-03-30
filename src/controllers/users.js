const express = require('express');

/**
 * 
 * @param {exprees.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = (req, res) => {
    const users = [
        {
            id: 1,
            name: "Fernando",
        },
        {
            id: 2,
            name: "Marta"
        }
    ]

    res.json(users);
};

/**
 * 
 * @param {exprees.Request} req 
 * @param {express.Response} res 
 */

const createUser = (req, res) => {
    const user = req.body;
    user.id = 1234;

    const result = {
        message: "User created",
        user
    }

    res.status(201).json(result);
};

/**
 * 
 * @param {exprees.Request} req 
 * @param {express.Response} res 
 */

const updateUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: "User updated",
        user
    }
    res.json(result);
};

/**
 * 
 * @param {exprees.Request} req 
 * @param {express.Response} res 
 */

const updatePartialUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: "User updated with Patch",
        user
    }
    res.json(result);
};

/**
 * 
 * @param {exprees.Request} req 
 * @param {express.Response} res 
 */

const deleteUser = (req, res) => {
    const { id } = req.params;

    const result = {
        message: `User with id: ${id} deleted`
    }
    res.json(result);
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}


