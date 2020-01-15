import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


function Posts(props) {

  const clickDelete = () => {
    props.onDelete(props.id);
  }
  
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickDelete}><DeleteIcon/></button>
    </div>
  );
}

export default Posts;
