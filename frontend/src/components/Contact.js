import React from 'react';
import {GitLink} from './GitLink';

const LinkedIn = (props) =>{
    return(
        <a href="https://linkedin.com/in/jacob-toomey-722b551b2" target="_blank" rel="noreferrer noopener">
            <img src="/static/frontend/media/linkedinLogo.png"></img>
        </a>
    );
}   

export function Contact(props){
    return(
        <div className="contact">
            <h3><strong>Email: </strong> jcbtmy@gmail.com</h3><br></br>
            <GitLink href="https://github.com/jcbtmy" /><br></br>
            <br></br>
            <LinkedIn />
        </div>
    );
}
