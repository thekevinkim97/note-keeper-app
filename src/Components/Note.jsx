import React, {useState} from "react";

function Note(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <button>Edit</button>

            <button onClick={() => {
                props.delete(props.id);
            }}
            >
                Delete
            </button>
        </div>
    )
}

export default Note;