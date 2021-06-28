import React, {useState} from "react";
import NoteCreator from "./NoteCreator";

function Note(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            {/* should bring up an edit screen (ote creator?)
                input details
                submit button which talks with editNote instead of addNote
            */}
            <button onClick={() => {
                props.edit(props.id);
            }}>
                Edit
            </button>

            <button onClick={() => {
                props.delete(props.id);
            }}>
                Delete
            </button>
        </div>
    )
}

export default Note;