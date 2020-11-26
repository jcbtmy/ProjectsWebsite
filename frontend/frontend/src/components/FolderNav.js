import React, {useState} from 'react';
import './css/folder-nav.css';


export const FolderNav = props =>{
    
    const [inputValue, setInputValue] = useState("");


    return (
        <div className="add-container">
            <form onSubmit={(e)=> {     props.handleSubmit(e,inputValue);
                                        setInputValue("");}
                                        }>
                <input className="add-button" 
                        type="submit" 
                        value="+"
                        onClick={(e) =>{    props.handleSubmit(e, inputValue);
                                            setInputValue("");}
                                    }></input>
                <input  className="add-input" 
                        type="url" 
                        placeholder="https://example.com/article"
                        value={inputValue}
                        onChange={  (e)=>setInputValue(e.target.value)}
                        ></input>
            </form>
            <div className="sort-choice">
                <select value={props.sort} onChange={(e) => props.changeSort(e.target.value)}>
                    <option value="category">Category</option>
                    <option value="site">Site</option>
                </select>
            </div>
        </div>
    );
}