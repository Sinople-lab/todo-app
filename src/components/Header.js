import PropTypes from 'prop-types'            // React lybrary to nanage props
import Button from './Button'                 // import the button componen

// Function to render the component
const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
      <h1 >{title}</h1>
      {/* Pass in style properties and a function to trigger when clicked */}
      <Button color={showAdd ? 'black' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

// Set defauld props in case no props are prodived by
// the parent object
Header.defaultProps = {
    title:'Tasks',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle ={
//     color:'red', backgroundColor:'black'
// }

// Export the function so that it can be uset in other
// components
export default Header