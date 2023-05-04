import React from 'react';

import './IGRTitle.css';

const IGRTitle = (props) => {
    return (
        <div className='contentIGRTitle'>
            <span>{props.text}</span>
        </div>
    )
}

export default IGRTitle;