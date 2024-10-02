import React from 'react';
import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';

const Card = ({ task }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Low':
        return <img src={LowPriorityIcon} alt="Low Priority" />;
      case 'High':
        return <img src={HighPriorityIcon} alt="High Priority" />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>Priority: {getPriorityIcon(task.priority)}</p>
    </div>
  );
};

export default Card;
