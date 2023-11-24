// import React from "react";
import { useState } from "react";
import axios from "axios";

const Task = () => {
	const [task, setTask] = useState();
	const handleAdd = () => {
		axios
			.post("http://localhost:3001/add", { task: task })
			.then((result) => console.log(result))
			.catch((error) => console.error(error));
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Write your task"
				onChange={(e) => setTask(e.target.value)}
			/>
			<button type="button" onClick={handleAdd}>
				New To-do
			</button>
		</div>
	);
};

export default Task;
