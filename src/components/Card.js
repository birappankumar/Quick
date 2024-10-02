import React from 'react';
// Import the icons for different priority levels
import noPriorityIcon from '../assets/icons/noPriorityIcon.svg';
import lowPriorityIcon from '../assets/icons/lowPriorityIcon.svg';
import mediumPriorityIcon from '../assets/icons/mediumPriorityIcon.svg';
import highPriorityIcon from '../assets/icons/highPriorityIcon.svg';
import urgentPriorityIcon from '../assets/icons/urgentPriorityIcon.svg';

const Card = ({ task }) => {
  // Get the appropriate icon based on priority level
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 0:
        return <img src={noPriorityIcon} alt="No Priority" className="priority-icon" />;
      case 1:
        return <img src={lowPriorityIcon} alt="Low Priority" className="priority-icon" />;
      case 2:
        return <img src={mediumPriorityIcon} alt="Medium Priority" className="priority-icon" />;
      case 3:
        return <img src={highPriorityIcon} alt="High Priority" className="priority-icon" />;
      case 4:
        return <img src={urgentPriorityIcon} alt="Urgent Priority" className="priority-icon" />;
      default:
        return null; // If no priority is provided, return null
    }
  };

  return (
    <div className="task-card">
      <div className="task-ids">
        <h3>{task.id}</h3>
      </div>
      <div className="task-header">
        <h3>{task.title}</h3>
        {getPriorityIcon(task.priority)}
      </div>
      <div className="task-details">
        <p>Status: {task.status}</p>
        <p>Tags: {task.tag.join(', ')}</p>
        {/* <p>User: {task.id}</p> */}
      </div>
    </div>
  );
};

export default Card;
