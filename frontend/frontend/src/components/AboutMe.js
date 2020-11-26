import React from 'react';

const ListItem = (props) =>{
    return(
        <li style={{listStyle: 'none'}}>{props.children}</li>
    );
}

const AboutMe = () => {
    return (
        <div id='about-text'>
            <h3><strong>Welcome!</strong></h3>
            <p>
                Hello, my name is <strong>Jacob Toomey</strong> and I'm a <strong>Software Developer</strong> based out of San Diego, California.
                I built this website to display some projects that I've been working on in my love affair with computers. My github account can be found <a href="https://github.com/jcbtmy" target="_blank" rel="noreferrer noopener">here</a>.<br></br>
                <br></br>
            </p>
                <strong>Programming Languages:</strong>
                <ul style={{paddingLeft: "0"}}>
                    <ListItem>Python</ListItem>
                    <ListItem>Javascript</ListItem>
                    <ListItem>C</ListItem>
                    <ListItem>C++</ListItem>
                    <ListItem>Markup: XML, HMTL/CSS, JSON</ListItem>
                </ul>
                <strong>Technologies:</strong>
                <ul style={{paddingLeft: "0"}}>
                    <ListItem>React</ListItem>
                    <ListItem>Django</ListItem>
                    <ListItem>DirectX</ListItem>
                    <ListItem>MySQL</ListItem>
                    <ListItem>AWS (newbie)</ListItem>
                </ul> 
        </div>
        
    );
};

export default AboutMe;