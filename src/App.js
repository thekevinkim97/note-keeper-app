import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import Note from "./Components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function editNote(id, note) {
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
      <SearchBar />
      <NoteCreator />
      {notes.map((noteItem, index) => {
        return (
          <Note />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
