import './NotesAbsolute.css'
const NotesAbsolute = (props) => {
    const backHandler = () => {
        props.backPage();
    }
    return (
        <div className="notes__absolute">
            <span className="back__btn" onClick={backHandler}>back</span>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default NotesAbsolute;