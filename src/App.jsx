import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Workspace from './components/Workspace';
import Sidebar from './components/Sidebar';

export const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const addNotes = () => {
    console.log('add');
    const newNotes = {
      id: uuid(),
      title: 'No title',
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNotes, ...notes]);
  };
  const onDeleteNote = idToDelete => {
    console.log('delete');
    setNotes(notes.filter(note => note.id !== idToDelete)); // if note id not equal to idToDelete then true - stay in the array, otherwise false - delete
  };
  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        addNotes={addNotes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Workspace activeNote={getActiveNote()} />
    </div>
  );
};
