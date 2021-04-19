const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userService = require('./userService');
const AppError = require('../errors/appError');
const config = require('../config');

const login = async (email, password) => {


    try {

        //Validación de Email
        const user = await userService.findByEmail(email);
        if (!user) {
            throw new AppError('Authentication failed! Email/Password not correct.', 401);
        }

        //Validación de ususario habilitado
        if (!user.enable) {
            throw new AppError('Authentication failed! user disabled.', 401);
        }

        //Validación de Password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new AppError('Authentication failed! Email/Password not correct.', 401);
        }

        //Generar el JWT
        const token = _encrypt(user._id);

        return {
            token,
            user: user.name,
            role: user.role
        }


    } catch (error) {
        throw error;
    }

}

_encrypt = (id) => {
    return jwt.sign({ id }, config.auth.secret, { expiresIn: config.auth.ttl });

}

module.exports = {
    login
}