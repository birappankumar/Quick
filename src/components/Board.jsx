const Board = () => {
    const [grouping, setGrouping] = useState('status');
    
    const groupedTasks = () => {
      if (grouping === 'priority') {
        return ['No priority','Low', 'Medium', 'High', 'Urgent'].map(priority => ({
          title: priority,
          tasks: tasks.filter(task => task.priority === priority),
        }));
      } else {
        return ['Backlog', 'To-do', 'In-progress', 'Done' ,'Canceled'].map(status => ({
          title: status,
          tasks: tasks.filter(task => task.status === status),
        }));
      }
    };
 
    return (
      <div className="board">
        <select onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Group by Status</option>
          <option value="priority">Group by Priority</option>
        </select>
        {groupedTasks().map(group => (
          <Column key={group.title} status={group.title} tasks={group.tasks} />
        ))}
      </div>
    );
  };
  