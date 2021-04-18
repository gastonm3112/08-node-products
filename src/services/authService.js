const AppError = require('../errors/appError');
const userService = require('./userService');

const login = async (email, password) => {


    try {

        const user = await userService.findByEmail(email);
        if (!user) {
            throw new AppError('Authentication failed! Email/Password not correct.', 400);
        }


    } catch (error) {
        throw error;
    }

}

module.exports = {
    login
}