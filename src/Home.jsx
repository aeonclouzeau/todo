import { useEffect, useState } from "react";
// import React from "react";
import Task from "./Task/Task";
import axios from "axios";

function Home() {
	const [todos, setTodo] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3001/get")
			.then((result) => setTodo(result.data))
			.catch((err) => console.warn(err));
	}, []);
	return (
		<div>
			<h1>To do</h1>
			<Task />

			{todos.length === 0 ? (
				<div>
					<h3>No tasks added</h3>
				</div>
			) : (
				todos.map((todo) => {
					<div>{todo}</div>;
				})
			)}
		</div>
	);
}

export default Home;
