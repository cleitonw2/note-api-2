const Note = require('../models/note');

class NoteController {
    async create(req, res) {
        const { title, body } = req.body;

        try {
            let note = new Note({ title: title, body: body, author: req.user._id });

            await note.save();

            res.status(200).json(note);
        } catch (error) {
            res.status(500).json({ error: 'Problem to create a new note' });
        }
    }

    async store(req, res) { }

    async index(req, res) { }

    async update(req, res) { }

    async delete(req, res) { }
}

module.exports = new NoteController();