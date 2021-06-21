import React, {useState} from "react";

function NoteCreator(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
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
                <input />
                <button />
            </form>
        </div>
    )
}

export default NoteCreator;