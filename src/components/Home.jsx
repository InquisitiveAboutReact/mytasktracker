import React from "react";
import TaskList from "./TaskList";
import useFetch from '../customhooks/useFetch'

const Home = () => {
	const {tasks, setTasks, isLoading, error} = useFetch(" http://localhost:5000/tasks");

	const handleDelete = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div>
			<div className="home">
				<h2 style={{ textAlign: "center" }}>Tasks Lists</h2> <br /> <br />
        {/* Check if there's any Error  */}
				{error && (
					<div
						style={{
							fontSize: "26px",
							fontWeight: "bolder",
							color: "red",
							textAlign: "center",
						}}
					>
						{error}
					</div>
				)}
				<br />
        {/* Check if isLoading flag is true or false
          Best to test by slowdown the network speed to 3G or stop the JSON server and then trigger npm start  
        */}
				{isLoading && (
					<div
						style={{
							fontSize: "20px",
							fontWeight: "bolder",
							color: "blue",
							textAlign: "center",
						}}
					>
						Please wait, loading your data ....
					</div>
				)}
        {/* If tasks is true i.e if we get the data then DOM is printed. 
        Need to do the conditional rendering or it would throw error in initial rendering as map function
        will not recognize for tasks 
        Error: TypeError: Cannot read property 'map' of null
        */}
				{tasks && <TaskList tasks={tasks} handleDelete={handleDelete} />}
			</div>
		</div>
	);
};

export default Home;
