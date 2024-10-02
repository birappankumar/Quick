import React from 'react';
import backlogIcon from '../assets/icons/Backlog.svg';
import todoIcon from '../assets/icons/To-do.svg';
import inProgressIcon from '../assets/icons/in-progress.svg';
import doneIcon from '../assets/icons/Done.svg';
import TaskCard from './Card';


const Column = ({ status, tasks }) => {
    // Get the appropriate icon for each status
    const getStatusIcon = (status) => {
      switch (status) {
        case 'Backlog':
          return <img src={backlogIcon} alt="Backlog Icon" />;
        case 'Todo':
          return <img src={todoIcon} alt="Todo Icon" />;
        case 'In progress':
          return <img src={inProgressIcon} alt="In Progress Icon" />;
        case 'Done':
          return <img src={doneIcon} alt="Done Icon" />;
        default:
          return null;
      }
    };
  
    return (
      <div className="column">
        <div className="column-header">
          <h2>{getStatusIcon(status)} {status}</h2>
        </div>
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Column;
  