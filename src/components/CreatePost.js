import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';///button icin///
import Zoom from '@material-ui/core/Zoom'; //button animation icin ///
import axios from 'axios';

function CreatePost(props) {
const [isExpanded, setExpanded] = useState(false);

const [note, setNote] = useState({
    title:"",
    content:""
})

const handleChange = (e) => {

const {name, value} = e.target;
setNote(prevNote => {
    return {...prevNote, [name]:value}
})
}

const handleClick = (e) => {
  axios.post('http://localhost:5000/posts/add', note)
  .then(res => console.log(res.data));


  note.title!=="" & note.content!=="" && props.onAdd(note); /// if note title and note content not equal to empty string then render//// 
    
    setNote({
        title:"",
        content:""
    });

    e.preventDefault();
}

const expand = () => {
  setExpanded(true);
}

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
        onChange={handleChange}
        value={note.title} 
        name="title" 
        placeholder="Title" 
        />}
        <textarea
        onChange={handleChange}
        onClick={expand}
        value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows={isExpanded ? "3" : "1"} 
        />
        <Zoom in={isExpanded} >
        <Fab onClick={handleClick}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreatePost;
