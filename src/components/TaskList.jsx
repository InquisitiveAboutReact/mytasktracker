import {Link} from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="task-preview" key={task.id} >
          <Link to={`/tasks/${task.id}`}>
          <h2>{task.title}</h2> 
          <p>Notes:{task.taskDesc}</p>
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default TaskList;
