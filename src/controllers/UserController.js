const User = require('../models/user');

class UserController {
    async create(req, res) {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });

        try {
            await user.save();
            user.password = undefined;
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error registering new user please try again.' })
        }
    }

    async login() { }

    async update() { }

    async delete() { }

    async resetPassword() { }
}

module.exports = new UserController();