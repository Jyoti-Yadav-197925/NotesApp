import React from 'react';

const Note = ({ id, text, editHandler, deleteHandler }) => {
    return (
      <div className="note">
        <div className="noteBody">{text}</div>
        <div className="noteFooter" style={{ justifyContent: "flex-end" }}>
          <button className="noteSave" onClick={() => deleteHandler(id)}>
            Delete
          </button>&nbsp;&nbsp;&nbsp;
          <button className="noteSave" onClick={() => editHandler(id, text)}>
            Edit
          </button>
        </div>
      </div>
    );
  };
  
  export default Note;
  