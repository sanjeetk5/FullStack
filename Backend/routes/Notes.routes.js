const express = require("express");
const { NoteModel } = require("../model/Note.model");

const noteRouter = express.Router();

noteRouter.post("/create", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.status(200).send({ msg: "New note is created" });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

noteRouter.get("/", async (req, res) => {
  try {
    const note = await NoteModel.find({ authorID: req.body.authorID });
    res.status(200).send(note);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

noteRouter.patch("/update/:noteID", async (req, res) => {
  const { noteID } = req.params;
  const note = await NoteModel.findOne({ _id: noteID });
  try {
    if (req.body.authorID == note.authorID) {
        await NoteModel.findByIdAndUpdate({ _id: noteID }, req.body);
        res.status(200).send({ msg: `The note with id:${noteID} is updated` });
    } else {
        res.status(401).send({"Error":"you are not authorized to update this note"});
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

noteRouter.delete("/delete/:noteID", async (req, res) => {
  const { noteID } = req.params;
  const note = await NoteModel.findOne({ _id: noteID });
  try {
    if (req.body.authorID == note.authorID) {
      res.status(200).send({ msg: "You not authorized" });
    } else {
      await NoteModel.findOneAndDelete({ _id: noteID }, req.body);
      res.status(200).send({ msg: `The note with id:${noteID} is deleted` });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = {
  noteRouter,
};
