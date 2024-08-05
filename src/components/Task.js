import { FaTimes } from "react-icons/fa"    // Import the library to draw icons

const Task = ({task, onDelete, onToggle}) => {
  return (
    
    // Here is an example of conditional rendering. If task.reminder is true then it applies the css class 'reminder
    // else it does not apply any styling. Here we also add the event listeners onDoubleClick to change styling
    // and onClick to delete a task by clicking on the icon
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text},<FaTimes style={{color:'black', cursor: 'pointer'}} onClick={() =>onDelete(task.id)}/></h3>
      <p>{task.day}</p>
    </div>
    
  )
}

// Export the function so that it can be uset in other
// components
export default Task 
