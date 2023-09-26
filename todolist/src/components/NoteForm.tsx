import { useState } from 'react'
import { Note } from '../types/types'
import { MyInput } from './UI/input/MyInput'
import { MyButton } from './UI/button/MyButton'

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
        <form onSubmit={e => e.preventDefault()}>
            <div className='addBlock'>
                <MyInput 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type='text'placeholder='Описание задачи'
                />
                <MyButton onClick={addNewPost}>Добавить задачу</MyButton>
            </div>
        </form>
    )
}

export {
    NoteForm,
}
