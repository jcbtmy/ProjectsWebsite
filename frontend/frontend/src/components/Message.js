import React, {useState} from 'react';
import './css/message.css';

export const Message = props =>{

    return( 
            <div className="message-wrap">
                <div className="message">
                    <span className="close" onClick={props.disappear}>&times;</span>
                    {props.children}
                </div>
            </div>
    );
}