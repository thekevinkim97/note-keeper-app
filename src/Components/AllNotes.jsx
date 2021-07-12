import { useEffect } from "react";
import { useEasybase } from "easybase-react";
import Note from "./Note";

function AllNotes(props) {
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({ tableName: "NOTES", limit: 100 });
        sync();
    }, []);

    return (
        <div>
            {Frame().map(item => {
                return (
                    <Note 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        edit={props.editNote}
                        delete={props.deleteNote}
                    />
                )
            })
            }
        </div>
    )
}

export default AllNotes;