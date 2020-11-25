import React from 'react';
import {GitLink} from './GitLink';
import marked from 'marked';


export default class ReadMe extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            markdown: null,
            error: null,
        };
    }

    componentDidMount(){
        fetch(this.props.url).then(res => res.text())
        .then((text) =>{
            this.setState({markdown: text});
        }).catch((error) =>{
            this.setState({error});
        });
    }

    render(){
        const {markdown, error} = this.state;
        return(
            <div className="sidebar">
                <GitLink href={this.props.githref} />
                <section>
                    <article dangerouslySetInnerHTML={{__html: markdown}}></article>
                </section>
            </div>
        );
    }
}