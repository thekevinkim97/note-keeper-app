import React, { useState, useEffect } from "react";
import { EasybaseProvider, useEasybase } from "easybase-react";
import ebconfig from "./ebconfig";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import NoteCreator from "./Components/NoteCreator";
import AllNotes from "./Components/AllNotes";

function App() {
  const [notes, setNotes] = useState([]);

  //Replace
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  //Replace
  function editNote(id, newNote) {
    setNotes((prevNotes) => {
      let newNotes = [...prevNotes];
      newNotes[id] = newNote;
      return newNotes;
    });
  }

  //Replace
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
      
      <EasybaseProvider ebconfig={ebconfig}>
        <AllNotes editNote={editNote} deleteNote={deleteNote}/>
      </EasybaseProvider>

      <Footer />
    </div>
  );
}

export default App;
