//IGNORE

import { useEffect } from "react";
import { useEasybase } from "easybase-react";

//Displays all records in the NOTES database
function TestNote() {

    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({ tableName: "NOTES", limit: 100 });
        sync();
    }, []);

    return (
        <div>
            {Frame().map(item => {
                return (
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <p>{item.id}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default TestNote;