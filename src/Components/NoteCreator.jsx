import { logDOM } from "@testing-library/react";
import React, {useState} from "react";

function NoteCreator(props) {
    const [note, setNote] = useState({
        title: props.placeholderTitle,
        content: props.placeholderContent
    });

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [inputName]: inputValue
            };
        });
    }

    return (
        <div>
            <form onChange = {handleChange}>
                <input name="title" placeholder="title" value={note.title}/>
                <textarea name="content" placeholder="note" value={note.content} rows="5" />

                {props.editingNote === false ? 
                <button onClick={(event) => {
                    props.createNote(note);
                    event.preventDefault();
                }}> ADD </button> : 
                <button onClick={(event) => {
                    props.createNote(props.id, note);
                    event.preventDefault();
                }} > SUBMIT CHANGE </button>}
            </form>
        </div>
    )
}

export default NoteCreator;