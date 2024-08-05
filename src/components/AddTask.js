import { useState } from "react"    // Import the library to manage the state

const AddTask = ({onAdd}) => {

  // Set the initial state
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  // 
  const onSubmit = (e) => {

    // Prevent the page from refreshing
    e.preventDefault()

    // If there is no text in the fields
    if(!text){
      // Display an alert
      alert('Please add task')
      return
    }

    // Pass the data through the prop
    // to the function that will create a new task
    onAdd({text, day, reminder})
    
    // Clear the fields by updating the state
    // to its initial values
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    // When the form is submited riggers the function onSubmit
    <form className='add-form' onSubmit={onSubmit}>  
      <div className='form-control'>
        <label>Task</label>
        {/* The by adding even listeners, the values are updated
            to the state whenever anything change so the user
            can see what's been typed */}
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
          type='text' 
          placeholder='Add Day & Time'
          value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
        type='checkbox'
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block'></input>
    </form>
  )
}

// Export the function so that it can be uset in other
// components
export default AddTask
