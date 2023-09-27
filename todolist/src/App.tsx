import { useState } from 'react'
import './App.css'
import { Note } from './types/types'
import { NoteForm } from './components/NoteForm/NoteForm'
import { NotesList } from './components/NotesList'

function App() {
  const [notes, setNotes] = useState<Note[]>([])

  const createNote = (newNote: Note) => {
    setNotes([...notes, newNote])
  }

  const removeNote = (note: Note) => {
    setNotes(notes.filter(n => n.id != note.id))
  }

  const executeNote = (note: Note) => {
    setNotes(notes.map(
      n => n.id != note.id 
      ? n 
      : {
        id: note.id, 
        description: note.description, 
        done: !note.done
      }
    ))
  }

  return (
    <div className="app">
        <div className='header'>
          Список задач
        </div>
        <NoteForm create={createNote}></NoteForm>
        <NotesList remove={removeNote} execute={executeNote} notes={notes}/>
    </div>
  );
}

export { 
  App,
}
