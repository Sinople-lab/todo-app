import Task from "./Task"     // Import the task component to render each task

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {/* Render each element in the list. Each item in a dinamically
          rended list should contain a key prop so that react
          identify which item has changed, hence knows which part
          of the virtual dom has to update. */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )  
}

// Export the function so that it can be uset in other
// components
export default Tasks
