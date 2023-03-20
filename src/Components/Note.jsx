import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  const editNote = () => {
    props.editItem(props.id);
  };

  return (
    <>
      {console.log(props.Dmode)}
      <div
        className={`colsNote shadow me-3 mt-3 text-break rd bgwhite-${props.Dmode}`}
      >
        <h4 className="mt-3">
          <b>{props.title}</b>
        </h4>
        <p className="mt-2">{props.content}</p>
        <div className="d-flex justify-content-between mb-2">
          <EditIcon className="ng" onClick={editNote} />
          <DeleteIcon className="nr" onClick={deleteNote} />
        </div>
      </div>
    </>
  );
};

export default Note;
