const Note = ({ note, toogleImportance }) => {
    const label = note.important ? 'make unimportant' : 'make important'

    return (
        <li className="note">
            {note.content} <button onClick={toogleImportance}>
                {label}
            </button>
        </li>
    )
}

export default Note