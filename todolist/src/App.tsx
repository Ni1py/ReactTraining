import { useState } from 'react'
import './styles/App.css'
import { Note } from './types/types'
import { NoteForm } from './components/NoteForm'
import { NotesList } from './components/NotesList'

function App() {
  const [notes, setNotes] = useState<Note[]>([])

  const createNote = (newNote: Note) => {
    setNotes([...notes, newNote])
  }

  const removeNote = (note: Note) => {
    setNotes(notes.filter(n => n.id != note.id))
  }

  return (
    <div className="App">
        <h1 style={{textAlign: 'center'}}>
          Список задач
        </h1>
        <NoteForm create={createNote}></NoteForm>
        <NotesList remove={removeNote} notes={notes}/>
    </div>
  );
}

export { 
  App,
}
