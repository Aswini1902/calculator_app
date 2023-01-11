import React from 'react';

// Create functional component
const ImageButton= (props)=> {
    return (
        <input 
        type='image' 
        value={props.label}
        src={props.img}
        onClick = {props.handleClick}
        
        width={`100px`}
        height={`45px`}
        

        />
    );
}

export default ImageButton;