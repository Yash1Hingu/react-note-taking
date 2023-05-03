import './NotesItem.css'
const NotesItem = (props) => {
    let content = props.content;
    if(content.length > 50) {
        content = content.substring(0,50) + "...";
    }
    return (
        <div className="notes__item">
            <h3 className="notes__hading">{props.title}</h3>
            <p className="notes__content">{content}</p>
        </div>
    );
}

export default NotesItem;