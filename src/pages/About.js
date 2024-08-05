// Arrow function for building the about pcomponent
const About = () => {

    // Returns text and a link to go back to home page
    return (
      <div>
          <h3>This is a todo app based on the guide made
            by Brad Traversey. The purpose of this app
            is to learn how to make a react app and cover
            the fundamentals of react, such as components,
            state, routes and more.
          </h3>
          <br></br>
          <h4>Version 1.0.0</h4>

          {/* Link to homepage */}
          <a href='/'>Go back</a>
      </div>
    )
  }
  
// Export the function so that it can be uset in other
// components
export default About