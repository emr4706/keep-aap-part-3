import React from "react";

function Note(props) {
  const clickDelete = () => {
    props.onDelete(props.id);
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickDelete}>DELETE</button>
    </div>
  );
}

export default Note;