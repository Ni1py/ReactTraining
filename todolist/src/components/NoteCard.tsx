import { Note } from '../types/types'
import { MyButton } from './UI/button/MyButton'

type NoteCardProps = {
    remove: (note: Note) => void
    note: Note
}

function NoteCard ({
    remove,
    note
}: NoteCardProps
) {
    return (
        <div className='note'>
            <div>
                <input type='checkbox'/>
            </div>
            <div className='note__content'>
                <strong>{note.description}</strong>
            </div>
            <div className='note__btns'>
                <MyButton onClick={() => remove(note)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export {
    NoteCard,
}
