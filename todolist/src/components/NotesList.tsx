import { Note } from '../types/types'
import { NoteCard } from './NoteCard'

type NotesListProps = {
    remove: (note: Note) => void
    notes: Note[]
}

function NotesList ({
    remove,
    notes
}: NotesListProps
) {
    return (
        <div>
            {notes.map(note =>
                <NoteCard remove={remove} note={note} key={note.id}/>
            )}
        </div>
    )
}

export { 
    NotesList,
}
