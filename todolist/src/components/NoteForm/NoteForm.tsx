import { useState } from 'react'
import { Note } from '../../types/types'
import { MyInput } from '../UI/input/MyInput'
import { MyButton } from '../UI/button/MyButton'
import styles from './NoteForm.module.css'

type NoteFormProps = {
    create: (newNote: Note) => void,
}

function NoteForm({
    create,
}: NoteFormProps
) {
    const [description, setDescription] = useState('')
    const [index, setIndex] = useState(0)
    
    const addNewPost = () => {
        if (description != '') {
            const newNote: Note = {
                id: index + 1,
                description: description,
                done: false
            }
            create(newNote)
            setIndex(index + 1)
            setDescription('')
        }
    }

    return (
        <div className={styles.addBlock}>
            <MyInput 
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder='Описание задачи'
            />
            <MyButton onClick={addNewPost}>Добавить задачу</MyButton>
        </div>
    )
}

export {
    NoteForm,
}
