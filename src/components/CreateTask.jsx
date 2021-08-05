import React , {useState} from 'react'
import { useHistory } from 'react-router';

const CreateTask = () => {

    const [title, setTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault();
        const task = {title, taskDesc}

        setIsLoading(true)

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(task)
        })
        .then(()=>{
            console.log("************* New task added successfully ************ ")
            setIsLoading(false)
            history.push('/')
        })
        setTitle('')
        setTaskDesc('')
    }
    return (
        <div className='create'>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task Name</label>
                <input 
                   type="text"
                   required 
                   value={title}
                   onChange={(e)=>setTitle(e.target.value)}

                />
                <br />
                <label>Task Notes</label>
                <textarea
                   required 
                   value={taskDesc}
                   onChange={(e)=>setTaskDesc(e.target.value)}
                />
                { !isLoading && <button>Add Task</button>}
                { isLoading && <button>Adding Task.....</button>}
                       
            </form>
        </div>
    )
}

export default CreateTask
