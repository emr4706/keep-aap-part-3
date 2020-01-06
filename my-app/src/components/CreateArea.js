import React, { useState } from "react";

function CreateArea(props) {
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
  note.title!=="" & note.content!=="" && props.onAdd(note); /// if note title and note content not equal to empty string then render//// 
    
    setNote({
        title:"",
        content:""
    });

    e.preventDefault();
}

  return (
    <div>
      <form>
        <input
        onChange={handleChange}
        value={note.title} 
        name="title" 
        placeholder="Title" 
        />
        <textarea
        onChange={handleChange}
        value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
