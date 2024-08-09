import { useState } from "react"                // Import the library to create and modify the state
import Tasks from '../components/Tasks';        // Import the component to display the list
import AddTask from "../components/AddTask";    // Import the component to display the form

// Function to render the home page component
// A boolean value is passed to know if the add button is oging to be displayed
const Home = ({ShowAdd}) => {

  // Set the initial state with the tasks list
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Nutritionists Appointment',
        day: 'Sep 5th at 4:00pm',
        reminder: true,
     },
    {
        id:2,
        text: 'Therapy',
        day: 'Aug 20th at 12:30 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Wedding',
        day: 'Feb 5th at 5:45pm',
        reminder: false,
    }
  ])
  
  // Function to add a task to the list
  const addTask = (task) => {
    const id= Math.floor(Math.random()*10000)+1         // Create a random id
    console.log(id)
    const newTask = {id, ...task}                       // add the new id to the task created
    setTasks([...tasks, newTask])                       // add the new task to the list of tasks
  }

  // Delete task
  const deleteTask = (id) => {
    // The new list is going to have all the tasks that have different id than the passed id
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Function to toggle the reminder style
  const toggleReminder = (id) => {
    // for the element with the id that's been pased the reminder is going to change to the opposite value
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Render the components in Home page
  return (
    <div>
        {/* If showAdd is true display the form, else show nothing.
            OnAdd passes the function addTask, which is goint to get
            triggered by the form */}
        {ShowAdd && <AddTask onAdd = {addTask}/>}

        {/* If the lenght of the list is greater than 0
            display the list, else show some text */}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
    </div>
  )
}

// Export the function so that it can be uset in other
// components
export default Home