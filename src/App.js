import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import NoteCreator from "./Components/NoteCreator";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function editNote(id, newNote) {
    setNotes((prevNotes) => {
      let newNotes = [...prevNotes];
      newNotes[id] = newNote;
      return newNotes;
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />

      <NoteCreator placeholderTitle="" placeholderContent="" editingNote={false} createNote={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            edit={editNote}
            delete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
