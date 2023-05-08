function ListItem({ note, onDeleteNote, activeNote, setActiveNote }) {
  return (
    <div
      className={`app-sidebar-note ${note.id === activeNote && 'active'}`}
      onClick={() => setActiveNote(note.id)}
    >
      <div className="sidebar-note-title">
        <strong>{note.title}</strong>
        <button onClick={() => onDeleteNote(note.id)}>Delete</button>
      </div>

      <p>{note.body && note.body.substring(0, 100 + '....')}</p>

      <small className="note-meta">
        {' '}
        Last modified{' '}
        {new Date(note.lastModified).toLocaleDateString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </small>
    </div>
  );
}
export default ListItem;
