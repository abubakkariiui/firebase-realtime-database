import React, { useState, useEffect } from 'react';
import { database } from './firebase';

function App() {
  const [notes, setNotes] = useState({});
  const [newNote, setNewNote] = useState('');

  // Read the notes from Realtime Database
  useEffect(() => {
    const notesRef = database.ref('notes');
    notesRef.on('value', (snapshot) => {
      const notesData = snapshot.val();
      if (notesData !== null) {
        setNotes(notesData);
      } else {
        setNotes({});
      }
    });

    return () => notesRef.off();
  }, []);

  // Add a note to Realtime Database
  const addNote = () => {
    const noteRef = database.ref('notes').push();
    noteRef.set({ content: newNote });
    setNewNote('');
  };

  // Update a note in Realtime Database
  const updateNote = (id, content) => {
    database.ref(`notes/${id}`).update({ content });
  };

  // Delete a note from Realtime Database
  const deleteNote = (id) => {
    database.ref(`notes/${id}`).remove();
  };

  return (
    <div>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>

      {Object.keys(notes).map((id) => (
        <div key={id}>
          <input
            value={notes[id].content}
            onChange={(e) => updateNote(id, e.target.value)}
          />
          <button onClick={() => deleteNote(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
