import { Note } from '../../types/types'
import { MyButton } from '../UI/button/MyButton'
import styles from './NoteCard.module.css'

type NoteCardProps = {
    execute: (note: Note) => void
    remove: (note: Note) => void
    note: Note
}

function NoteCard ({
    execute,
    remove,
    note
}: NoteCardProps
) {
    return (
        <div className={note.done ? styles.noteColor : styles.note}>
            <div>
                <input type='checkbox' onClick={() => execute(note)}/>
            </div>
            <div className={styles.description}>
                {note.description}
            </div>
            <div>
                <MyButton onClick={() => remove(note)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export {
    NoteCard,
}
