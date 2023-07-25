const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        res.status(500).send({ error: "Unable to fetch ToDo items from the database." });
    }
}

module.exports.saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).send({ error: "Text field is required." });
        }

        const createdToDo = await ToDoModel.create({ text });
        console.log("Added Successfully...");
        console.log(createdToDo);
        res.send(createdToDo);
    } catch (error) {
        res.status(500).send({ error: "Unable to save the ToDo item to the database." });
    }
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;
    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Updated Successfully..."))
        .catch((err) => console.log(err))
}


module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully..."))
        .catch((err) => console.log(err))
}