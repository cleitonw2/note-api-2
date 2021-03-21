const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SendMail = require("../jobs/SendEmail");
const Bull = require("bull");

const secret = process.env.JWT_TOKEN;

class UserController {
    async create(req, res) {
        const { name, email, password } = req.body;

        const user = new User({ name, email, password });

        try {
            await user.save();

            let Queue = new Bull("Send mail");
            Queue.add(SendMail.send(user.email));

            user.password = undefined;
            res.status(200).json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error registering new user please try again.' })
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (!user)
                res.status(401).json({ error: 'Incorrect email or password' });
            else {
                user.isCorrectPassword(password, function (err, same) {
                    if (!same)
                        res.status(401).json({ error: 'Incorrect email or password' });
                    else {
                        const token = jwt.sign({ email }, secret, { expiresIn: '10d' });

                        user.password = undefined;

                        res.json({ user: user, token: token });
                    }
                });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal error, please try again' });
        }
    }

    async update() { }

    async delete() { }

    async resetPassword() { }
}

module.exports = new UserController();