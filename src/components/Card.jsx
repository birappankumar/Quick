import { useDrag } from 'react-dnd';

const Card = ({ task }) => {
  const [, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id: task.id },
  }));

  return (
    <div ref={drag} className="card">
      <h3>{task.title}</h3>
    </div>
  );
};
