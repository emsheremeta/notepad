import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Workspace from './components/Workspace';
import Sidebar from './components/Sidebar';

export const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('indexeddb')) ?? []
  );
  const [activeNote, setActiveNote] = useState(notes[0]?.id ?? null);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    localStorage.setItem('indexeddb', JSON.stringify(notes));
  }, [notes]);

  const addNotes = () => {
    const newNotes = {
      id: uuid(),
      title: 'No title',
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNotes, ...notes]);
    setActiveNote(newNotes.id);
  };
  const onDeleteNote = idToDelete => {
    setNotes(notes.filter(note => note.id !== idToDelete)); // if note id not equal to idToDelete then true - stay in the array, otherwise false - delete
  };
  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  };
  const onSave = note => {
    const index = notes.findIndex(el => el.id === note.id);
    let array = [...notes];
    note.lastModified = Date.now();
    array[index] = note;
    setNotes([...array]);
    setEdit(false);
  };

  const enableEdit = () => {
    setEdit(true);
  };
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        addNotes={addNotes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        enableEdit={enableEdit}
      />
      {notes.length !== 0 && (
        <Workspace activeNote={getActiveNote()} onSave={onSave} edit={edit} />
      )}
    </div>
  );
};
