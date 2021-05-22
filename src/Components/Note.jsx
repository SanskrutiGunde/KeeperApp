import React from "react";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1> {props.title}</h1> <p> {props.content} </p>
      <button onClick={handleClick}>
        <DeleteOutlineRoundedIcon />
      </button>
    </div>
  );
}
export default Note;
