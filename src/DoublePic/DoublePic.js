import React from 'react';
import '../App.css';

const doublePic = (props) => {
    return(
        <div className={props.doublePicClass}>
            {props.children}
        </div>
    );
}

export default doublePic;