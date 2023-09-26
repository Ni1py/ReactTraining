import { Note } from '../types/types'
import { NoteCard } from './NoteCard/NoteCard'

type NotesListProps = {
    execute: (note: Note) => void
    remove: (note: Note) => void
    notes: Note[]
}

function NotesList ({
    execute,
    remove,
    notes
}: NotesListProps
) {
    return (
        <div>
            {notes.map(note =>
                <NoteCard remove={remove} execute={execute} note={note} key={note.id}/>
            )}
        </div>
    )
}

export { 
    NotesList,
}
