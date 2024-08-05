import { useState } from "react"                // Import the library to create and modify the state
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';       // Import the components to build the page ...
import Footer from './components/Footer';
import About from "./pages/About";              // Import the pages views
import Home from "./pages/Home";

// The code inside the returns is JSX which stands for
// JavaScript XML.

// Hence the codes are run through a transpiler, si it's
// converted into traditional JS and HTML so that the 
// browsers can read it.

// Example of creating a variable
const name = 'Marty'  

//  Main app function
function App() {

  // Hook to set the initial state to manage the display of the form
  // Hooks are functions that allow us to hook and manage state
  const [showAddTask, setShowAddTask] = useState(false)
  // state is a JS object used to represent information in
  // or about a particular component

  // Render the page
  return (
    // render the components of the page, starting with header, form and lastly the list of tasks
    
      <div className="App">

        {/* When rendering components we are passing data from
            App.js into components ar props by using {} */}

        {/* Pass the data,  Pass a function that changes a boolean value when triggered,  pass the current boolean value */}
        <Header title={'Hi ' + name} onAdd= {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        
        {/* Using react router we can build multiple pages
            by using one single template, index.html */}
        <Router>
          <Routes>
            <Route path='/' element={<Home ShowAdd={showAddTask}/>} />
            <Route path='/about' Component={About} />
          </Routes>
        </Router>
        
        {/* Rendering the footer */}
        <Footer />
      </div>
  ) 
}

// Export the function so that it can be uset in index.html
export default App;
