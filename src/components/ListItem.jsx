import { MdOutlineEditNote } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

function ListItem({
  note,
  onDeleteNote,
  activeNote,
  setActiveNote,
  enableEdit,
}) {
  return (
    <div
      className={`app-sidebar-note ${note.id === activeNote && 'active'}`}
      onClick={() => setActiveNote(note.id)}
    >
      <div className="sidebar-note-title">
        <strong>{note.title === '' ? 'No title' : note.title}</strong>
        <div className="button_position">
          <button onClick={enableEdit}>
            <MdOutlineEditNote />
          </button>
          <button onClick={() => onDeleteNote(note.id)}>
            <RiDeleteBin6Line />
          </button>
        </div>
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
