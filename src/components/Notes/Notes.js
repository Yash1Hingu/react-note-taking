import { useState } from "react";
import NotesItem from "./NotesItem";
import './Notes.css'
const Notes = (props) => {
    const [notesItem, setnotesItem] = useState(props.notes);

    return (
        <div className="notes__container">
            {notesItem.map(note => (
                <NotesItem
                    key={note.id}
                    title={note.title}
                    content={note.content}
                />
            ))}
        </div>
    );
}

export default Notes;