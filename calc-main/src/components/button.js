import React from 'react';

// Create functional component
const Button= (props)=> {
    return (
        <input 
        type='button' 
        value={props.label}
        
        onClick = {props.handleClick}
        />
    );
}

console.log(Button)
// Export our button component.
export default Button;
