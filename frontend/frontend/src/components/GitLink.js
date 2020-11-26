import React from 'react';

export function GitLink(props){
    return(
        <a href={props.href} target="_blank" rel="noreferrer noopener" >  
            <img 
                src="/static/frontend/media/GitHub-Mark-32px.png" 
                className="git-logo"
            />
        </a>
    );
}
