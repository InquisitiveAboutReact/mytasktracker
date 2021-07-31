import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [tasks, setTasks] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
    useEffect(() => {
		const abortController = new AbortController()
		fetch(url, {signal: abortController.signal})
			.then((res) => {
				if (!res.ok) {
					// Handling Fetch errors and write custom error messages if the response is OK (true)
					throw Error("Could not find data for the requested resource");
				}
				return res.json(); // return JSON promise 
			})
			.then((data) => {
				setTasks(data); // set the data
				setIsLoading(false); // once data load, no reloading message to be displayed
        setError(null); // once data load, no error message to be shown. You can do setError('') as well
			})
			.catch((err) => {
				if(err.name === 'AbortError'){  // name is a property of err object
					console.log("Fetch Aborted")
				} else {
					console.log(err.message); // catch the error message in line 16 and print it in Browser console
					setError(err.message);
					setIsLoading(false); // No loading when we get a error in the DOM		
				}
				
			});
		
		// Clean up 
		return ()=> abortController.abort();
	}, [url]);
    return { tasks, setTasks, isLoading, error}
}

export default useFetch