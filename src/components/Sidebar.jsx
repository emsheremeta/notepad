import ListItem from './ListItem';

function Sidebar({ notes, addNotes, onDeleteNote, activeNote, setActiveNote }) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={addNotes}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map(note => (
          <ListItem
            key={note.id}
            note={note}
            onDeleteNote={onDeleteNote}
            setActiveNote={setActiveNote}
            activeNote={activeNote}
          />
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
