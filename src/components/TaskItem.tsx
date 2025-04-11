import React from "react";
import "./TaskItem.scss";

export type TaskItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ 
  id,
  text,
  completed,
  onToggle,
  onDelete,
 }) => {
  return (
    <div className="task-container">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span className={`task-text ${completed ? "completed" : ""}`}>
          {text}
        </span>
      </div>
      <button className="task-delete" onClick={() => onDelete(id)}>
        ✖
      </button>
    </div>
  );
};

export default TaskItem;