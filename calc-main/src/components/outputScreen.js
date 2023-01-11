import React from 'react';
// Import Output Screen Row.
import OutputScreenRow from './outputScreenRow.js';

// Create functional component
// Use to hold two screen rows
const OutputScreen= (props)=> {
    return (
        <div className='screen'>
            <OutputScreenRow value = {props.question}/>
            <OutputScreenRow value = {props.answer}/>
        </div>
    )
}
console.log(OutputScreen)
// Export Output Screen.
export default OutputScreen;