import React from 'react';
import './css/articles.css';
import { CSSTransition } from 'react-transition-group';
import {FolderNav} from './FolderNav';
import {Message} from './Message';


const FolderContainer = (props) => {

  let folders = [];
  
  for(let category in props.folders){
    folders.push(<Folder 
                              key={category} 
                              category={category} 
                              contents={props.folders[category]}/>);
  }

  return (
    <div className="box-container">
      {props.children}
      {folders}
    </div>
  );
}

const FolderTransition = (props) =>{
  const nodeRef = React.useRef(null); //for bug https://github.com/reactjs/react-transition-group/blob/1fd4a65ac45edd2aea3dec18eeb8b9c07c7eb93f/CHANGELOG.md#features
  return(
    <CSSTransition
      in={props.showContents}
      classNames="slideDown"
      timeout={500}
      unmountOnExit
      appear
      nodeRef={nodeRef}
    >
        <FolderContents contents={props.contents}
                          nodeRef={nodeRef}/>
      </CSSTransition>
  );
}

class Folder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showContents: false,
    };
  }

  clickFolder = () => {
    const { showContents } = this.state;
    this.setState({ showContents: !showContents })
  }

  render() {
    const { showContents } = this.state;

    return (
      <div className="folder">
        <div className={"folder-head" + ((showContents) ? " open" : "")} type="button" onClick={() => this.clickFolder()}>
          <img src="/static/frontend/media/folder_img.png" alt="C:/"></img>
          <div className="folder-text">{this.props.category}</div>
        </div>
        {
          <FolderTransition 
            showContents={showContents}
            contents={this.props.contents}
          />
        }
      </div>
    )
  }
}

const FolderContents = (props) => {

  return (
    <div className="folder-contents" ref={props.nodeRef}>
      <ul>
        {
         props.contents.map((obj) => <li key={obj.id}>
                                         <a href={obj.url}
                                            target="_blank" 
                                            rel="noreferrer noopener">
                                          ({obj.site}) - {obj.title}
                                          </a>
                                      </li>)
        }
      </ul>
    </div>
  );
} 

export default class ArticlesApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      folders: null,
      isLoaded: false,
      message: null,
      sort: "category",
    };
    this.articles_api = "/articles-api/";
  }

  componentDidMount(){
    fetch(this.articles_api)
    .then(resp => resp.json())
    .then(data => this.createFolders(data))
    .catch(error => console.log(error));
  }

  createFolders = (data) => {

    let folders = {};
    const sort = this.state.sort; 

    //organize contents into folders
    data.map((obj) => {
        if(obj[sort] in folders ){
          folders[obj[sort]].push(obj);
        }
        else{
          folders[obj[sort]] = [obj];
        }
        return obj;
    });

    this.setState({folders: folders, isLoaded: true});
  }

  postData = async(url='', data ={}) => {

    const response = await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    });

    if(response.ok){
      return response.json();
    }
    else{
      return null;
    }
  }

  changeSort = (sort_method) =>{

    let new_folders = {};
    const old_folders = this.state.folders;
    
    for(let old_sort in old_folders){
      const obj_arr = old_folders[old_sort];
      obj_arr.map((obj) =>{

        if(obj[sort_method] in new_folders){
          new_folders[obj[sort_method]].push(obj);
        }
        else{
          new_folders[obj[sort_method]] = [obj];
        }

        return obj;
      });
    }

    this.setState({sort: sort_method, folders: new_folders});
  }

  handleSubmit = (e,value) =>{

    e.preventDefault();

    if(value !== ""){
      this.postData(this.articles_api, {url: value})
      .then((data) => {
         if(data){
          this.updateFolder(data);
         }
         else{
            this.setState({message: <h2>Oops! Could not resolve: {value}</h2>});
         }
      })
      .catch((error) => {
        this.setState({message: <h2>Error! : + {error.message}</h2>});
      });
    }
  }

  updateFolder = (data) =>{

      const folders= this.state.folders;
      const sort = this.state.sort;
      const message = <div><h2>Added:<br></br>{data.title}</h2>
                            <p> Site: {data.site}<br></br>
                                Category: {data.category}
                            </p>
                      </div>;

      for(let i=0; i < folders[data[sort]].length; i++){
        if(folders[data[sort]][i].id === data.id){
          this.setState({message: message});
          return;
        }
      }
      folders[data[sort]].push(data);

      this.setState({folders: folders , message: message });
  }

  UnmountError = () =>{
    this.setState({message: null});
  }


  render(){ 

    const {folders, isLoaded, message} = this.state;

    return (
          <div className="App">
            {
            isLoaded && 
            
              <FolderContainer folders={folders}>
                <FolderNav handleSubmit={this.handleSubmit} changeSort={this.changeSort}/>
                {message && <Message disappear={this.UnmountError}>{message}</Message>}
              </FolderContainer>
            } 
          </div>
    );
  }
}

