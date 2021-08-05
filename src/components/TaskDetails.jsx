import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../customhooks/useFetch';
import {Link} from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {useHistory} from 'react-router'


const TaskDetails = () => {
    const { id } = useParams();
    const {tasks, isLoading, error} = useFetch("http://localhost:5000/tasks/" + id);
    const history = useHistory()
    const handleDelete = () => {
		fetch('http://localhost:5000/tasks/' +id , {
			method:'DELETE'
		})
		.then(()=>{
            console.log("Deleted id=="+id)
          history.push('/')
		})
	};
    return (
        <div className='task-details'>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {tasks && (
                <article>
                <h2>Task Name: {tasks.title} 
                <DeleteForeverIcon style={{paddingLeft:'10px', cursor:'pointer', fill:'red'}} 
                onClick={handleDelete}/></h2> 
                <br />
                <h4>Task Description: {tasks.taskDesc}</h4>
                </article>
                
            )}
            <br />
            <Link to="/" style={{color:'blue'}}>Back</Link>
        </div>
    )
}

export default TaskDetails
