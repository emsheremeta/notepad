import ListItem from './ListItem';
import Modal from './Modal';
import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
function Sidebar({
  notes,
  addNotes,
  onDeleteNote,
  activeNote,
  setActiveNote,
  enableEdit,
}) {
  const [show, setShow] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const onDelete = e => {
    console.log('set show true', e);
    setShow(true);
    setNoteToDelete(e);
  };

  const onDeleteConfirmed = e => {
    console.log('on Delete confirmed', e);
    setShow(false);
    onDeleteNote(noteToDelete);
  };

  const handleClose = () => {
    console.log('handle close');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={addNotes}>
          <IoIosAddCircleOutline size={30} />
        </button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map(note => (
          <ListItem
            key={note.id}
            note={note}
            onDeleteNote={onDelete}
            setActiveNote={setActiveNote}
            activeNote={activeNote}
            enableEdit={enableEdit}
          />
        ))}
      </div>
      {show && <Modal onClose={handleClose} onDelete={onDeleteConfirmed} />}
    </div>
  );
}
export default Sidebar;
