import React, { useState } from "react";
import Add from "@mui/icons-material/Add";
import Note from "./Note";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckIcon from "@mui/icons-material/Check";

const Createnote = (props) => {
  const [expand, setExpand] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [editItem, setEditItem] = useState(undefined);
  const [take, setTake] = useState("Take a note...");
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev, note];
    });
  };

  const onDelete = (id) => {

    if(toggle===true){
      alert("Can't delete in edit mode");
    }
    else{

    setAddItem((prevData) => {
      return prevData.filter((val, idx) => {
        return idx !== id;
      });
    });
  }
  };

  const onEdit = (id) => {
    setToggle(true);
    const newEditItem = addItem.find((val, idx) => {
      return idx === id;
    });
    setNote({
      title: newEditItem.title,
      content: newEditItem.content,
    });
    setEditItem(id);
  };

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    if (note.title === "") {
      alert("Please write the Title");
    } else if (note.content === "") {
      alert("Please write the description");
    } else if (toggle === true) {
      setAddItem(
        addItem.map((elem, idx) => {
          if (editItem === idx) {
            return { ...elem, title: note.title, content: note.content };
          }
          return elem;
        })
      );
      setNote({ title: "", content: "" });
      setToggle(false);
    } else {
      addNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  return (
    <>
      <div
        className={`CreateNote d-flex justify-content-center mt-4`}
        onDoubleClick={() => {
          setExpand(false);
          setTake("Take a note...");
        }}
      >
        <form action="" className="shadow-lg wd">
          <input
            type="text"
            name="title"
            className={`form-control fonts input-${props.Dmode}`}
            placeholder={take}
            value={note.title}
            onChange={InputEvent}
            onClick={() => {
              setExpand(true);
              setTake("Title");
            }}
          />

          {expand ? (
            <textarea
              className={`form-control input-${props.Dmode}`}
              rows="6"
              placeholder="Take a note..."
              value={note.content}
              name="content"
              onChange={InputEvent}
            ></textarea>
          ) : null}
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-end w-50">
          <button className="btn btn-success addBtn" onClick={addEvent}>
            {toggle ? <CheckIcon /> : <Add />}
          </button>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row">
          {addItem.map((val, idx) => {
            return (
              <Note
                key={idx}
                id={idx}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
                editItem={onEdit}
                Dmode={props.Dmode}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Createnote;
