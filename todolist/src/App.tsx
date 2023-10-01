import { useState } from 'react'
import './App.css'
import { Note } from './types/types'
import { NoteForm } from './components/NoteForm/NoteForm'
import { NotesList } from './components/NotesList'
import { MySelect } from './components/UI/select/MySelect'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([])
  const [selectedFilter, setSelectedFilter] = useState('')

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
        ...note,
        done: !note.done
      }
    ))
  }

  const filterNotes = (filter: string) => {
    setSelectedFilter(filter)
    setFilteredNotes(notes)
    setNotes(filter == 'done' 
      ? notes.filter(note => note.done)
      : filteredNotes)
  }

  return (
    <div className="app">
        <div className='header'>
          Список задач
        </div>
        <NoteForm create={createNote}></NoteForm>
        <div>
          <MySelect
            value={selectedFilter}
            onChange={filterNotes}
            defaultOption='Без фильтра' 
            options={[
              {value: 'done', name: 'Завершенности'},
            ]}></MySelect>
        </div>
        {notes.length
          ? <NotesList remove={removeNote} execute={executeNote} notes={notes}/>
          : <div className='header'>Здесь пока пусто...</div>
        }
    </div>
  );
}

export { 
  App,
}
