import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NotesTable } from './components/notesTable';
import { NewNoteModal } from './components/noteModal';

function App() {
  return (
    <div className="App">

      <h3>My Notes</h3>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <div style={{ textAlign: 'right' }}>
          <NewNoteModal />
        </div>
        <NotesTable />
      </div>

    </div>
  );
}

export default App;
