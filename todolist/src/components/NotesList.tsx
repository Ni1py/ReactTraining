import React from 'react'
import { INote } from '../types/types';
import NoteCard from './NoteCard';

interface NotesListProps {
    notes: INote[],
}

const NotesList = ({notes}: NotesListProps) => {

    return (
        <div>
            {notes.map(note =>
                <NoteCard description={note.description} done={note.done} key={note.id}/>
            )}
        </div>
    )
}

export default NotesList
