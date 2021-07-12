import React, { useState, useEffect } from "react";
import { EasybaseProvider, useEasybase } from "easybase-react";
import NoteCreator from "./NoteCreator";

function Note(props) {
    const [displayComponent, setDisplay] = useState(false);

    function changeDisplay() {
        displayComponent === false ? setDisplay(true) : setDisplay(false);
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>

            {displayComponent===true && <NoteCreator id={props.id} placeholderTitle={props.title} placeholderContent={props.content} editingNote={true} createNote={props.edit} />}

            <button onClick={() => {changeDisplay();}}> Edit </button>

            <button onClick={() => {
                props.delete(props.id);
            }}>
                Delete
            </button>
        </div>
    )
}

export default Note;