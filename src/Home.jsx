import { useEffect, useState } from "react";
// import React from "react";
import Task from "./Task/Task";
import axios from "axios";

function Home() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    console.log("Before API call: " + todos);
    axios
      .get("http://localhost:3001/get")
      .then((result) => {
        setTodo(result.data);
        console.log("After API call" + todos);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div>
      <h1>To do</h1>
      <Task />

<<<<<<< HEAD
			{todos.length === 0 ? (
				<div>
					<h3>No tasks added</h3>
				</div>
			) : (
				todos.map((todo, index) => (
					<div key={index}>
						<p>{todo.task}</p>
					</div>
				))
			)}
		</div>
	);
=======
      {todos.length === 0 ? (
        <div>
          <h3>No tasks added</h3>
        </div>
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            <p>{todo.task}</p>
          </div>
        ))
      )}
    </div>
  );
>>>>>>> 7a642e9a89527f7e609fd28b528ed6033f5d13ad
}

export default Home;
