import React, { useState, useEffect } from 'react'; 
import Column from './Column';
import axios from 'axios';

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [grouping, setGrouping] = useState('status'); //Grouping by 'status', 'user', or 'priority'
  const [sortBy, setSortBy] = useState('title'); // 'title' or 'priority'

  useEffect(() => {
    // integrating api end point
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        console.log('API Response:', response.data); // Debugging log from the api which can change dynamically
        if (response.data && response.data.tickets) {
          setTasks(response.data.tickets);
        } else {
          console.error('Unexpected data format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  // Group tasks based on the selected grouping option
  const groupedTasks = () => {
    if (!Array.isArray(tasks)) return [];

    const grouped = grouping === 'priority'
      ? [0, 1, 2, 3, 4].map(priority => ({
          title: getPriorityTitle(priority),
          tasks: tasks.filter(task => task.priority === priority),
        }))
      : grouping === 'user'
        ? Array.from(new Set(tasks.map(task => task.assignedTo))).map(user => ({
            title: user,
            tasks: tasks.filter(task => task.assignedTo === user),
          }))
        : ['Backlog', 'Todo', 'In progress', 'Done'].map(status => ({
            title: status,
            tasks: tasks.filter(task => task.status === status),
          }));

    return grouped.map(group => ({
      ...group,
      tasks: sortTasks(group.tasks), // Sort tasks after grouping
    }));
  };

  // Function to get priority title
  const getPriorityTitle = (priority) => {
    switch (priority) {
      case 0: return 'No priority'
      case 1: return 'Low';
      case 2: return 'Medium';
      case 3: return 'High';
      case 4: return 'Urgent';
      default: return 'Unknown';
    }
  };

  // Function to sort tasks based on selected criteria
  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority; // Descending order
      } else {
        return a.title.localeCompare(b.title); // Ascending order
      }
    });
  };

  return (
    <div className="board">
      <div className="controls">
        <div className="grouping-select">
          <label htmlFor="grouping">Group By: </label>
          <select id="grouping" onChange={(e) => setGrouping(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="sorting-select">
          <label htmlFor="sortBy">Sort By: </label>
          <select id="sortBy" onChange={(e) => setSortBy(e.target.value)}>
            <option value="title">Title</option>
            <option value="priority">Priority</option>
          </select> 
        </div>
      </div>
      {groupedTasks().map(group => (
        <Column key={group.title} status={group.title} tasks={group.tasks} />
      ))}
    </div>
  );
};

export default Board;
