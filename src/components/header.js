import React from 'react';

function Header(props){

    return (
        <React.Fragment>
            <h1>Here is Header</h1>
            <h2>{props.message}</h2>
        </React.Fragment>
    ) 
}

export default Header