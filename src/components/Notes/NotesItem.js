import './NotesItem.css'
import NotesAbsolute from './NotesAbsolute'
const NotesItem = (props) => {
    let content = props.content;
    if (content.length > 50) {
        content = content.substring(0, 50) + "...";
    }

    const showHandler = (event) => {
        props.onNotesClick(props);
    }
    return (
        <div>
            <div className="notes__item" onClick={showHandler}>
                <h3 className="notes__hading">{props.title}</h3>
                <p className="notes__content">{content}</p>
            </div>
        </div>
    );
}

export default NotesItem;