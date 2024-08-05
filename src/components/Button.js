import PropTypes from 'prop-types'            // Import library to manage props

const Button = ({color,text, onClick}) => {

  //const onClick = () => {
  //    console.log('Click')
  //}

  return (

    // Apply styling for the button and also
    // add an event listener which is going to trigger
    // a function when the button is clicked
    <button
    className='btn'
    style={{backgroundColor:color}}
    onClick={onClick}>
        {text}
    </button>
  )
}


// Set the default props in case it's not passed
// by the parent component
Button.defaultProps = {
    color:'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

// Export the function so that it can be uset in other
// components
export default Button
