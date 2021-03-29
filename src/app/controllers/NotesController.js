const Note = require('../models/note');

const isOwner = (user, note) => {
    if (JSON.stringify(user._id) == JSON.stringify(note.author._id))
        return true;
    else
        return false;
}

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

    async store(req, res) {
        try {
            let notes = await Note.find({ author: req.user._id });

            res.send(notes);

        } catch (error) {

            res.json({ error: error }).status(500);
        }
    }

    async index(req, res) {
        const { id } = req.params;

        try {
            let note = await Note.findById(id);
          
            if (isOwner(req.user, note))
                res.json(note);
            else
                res.status(403).json({ error: 'Permission denied' });

        } catch (error) {

            res.status(500).json({ error: 'Problem to get a note' });
        }
    }

    async search(req, res) {
        const { query } = req.query;

        try {
            let notes = await Note
                .find({ author: req.user._id })
                .find({ $text: { $search: query } });

            res.json(notes);
        } catch (error) {

            res.json({ error: error }).status(500);
        }
    }

    async update(req, res) { }

    async delete(req, res) { }
}

module.exports = new NoteController();