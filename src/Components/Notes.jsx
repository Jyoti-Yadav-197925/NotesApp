

import React, { useEffect, useState } from "react";
import CreateNotes from "./CreateNotes";
import "./notes.css";
import { v4 as uuid } from "uuid";
import Note from "./Note";

export default function Notes() {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const deleteHandler = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (editToggle === id) {
      setEditToggle(null);
      setInputText("");
    }
  };

  const eventHandler = () => {
    if (editToggle) {
      setNotes((previousNotes) =>
        previousNotes.map((note) =>
          note.id === editToggle ? { ...note, text: inputText } : note
        )
      );
    } else {
      setNotes((previousNotes) => [
        ...previousNotes,
        {
          id: uuid(),
          text: inputText,
        },
      ]);
    }
    setInputText("");
    setEditToggle(null);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="Notes">
      {notes.map((note) => (
        editToggle === note.id ? (
          <CreateNotes
            key={note.id}
            inputText={inputText}
            setInputText={setInputText}
            eventHandler={eventHandler}
            deleteHandler={deleteHandler}
          />
        ) : (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        )
      ))}
      {!editToggle && (
        <CreateNotes
          inputText={inputText}
          setInputText={setInputText}
          eventHandler={eventHandler}
          deleteHandler={deleteHandler}
        />
      )}
    </div>
  );
}
