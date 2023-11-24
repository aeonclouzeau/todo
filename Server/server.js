import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import TodoModel from "./Models/Model.js";

const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.post("/add", (req, res) => {
	const task = req.body.task;
	TodoModel.create({
		task: task,
	})
		.then((result) => res.json(result))
		.catch((error) => res.json(error));
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
