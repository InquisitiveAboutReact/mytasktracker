import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Link} from 'react-router-dom';

const TaskList = ({ tasks , handleDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="task-preview" key={task.id} >
          <Link to={`/tasks/${task.id}`}>
          <h2>{task.title} <DeleteForeverIcon style={{paddingLeft:'10px', cursor:'pointer', fill:'red'}}
          onClick={()=>handleDelete(task.id)}  
          /></h2> 
          <p>Notes:{task.taskDesc}</p>
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default TaskList;
