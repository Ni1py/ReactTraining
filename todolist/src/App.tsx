import { useState } from 'react';
import './styles/App.css'
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import { INote } from './types/types';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState<INote[]>([])
  const [description, setDescription] = useState('')
  const [index, setIndex] = useState(0)

  const addNewPost = () => {
    if (description != '') {
      const newNote: INote = {
        id: index + 1,
        description: description,
        done: false
      }
      setIndex(index + 1)
      setNotes([...notes, newNote])
      setDescription('')
    }
  }

  return (
    <div className="App">
        <h1 style={{textAlign: 'center'}}>
          Список задач
        </h1> 
        <form onSubmit={e => e.preventDefault()}>
          <div className='addBlock'>
            <MyInput 
              value={description}
              onChange={e => setDescription(e.target.value)}
              type='text'
              placeholder='Описание задачи'
            />
            <MyButton onClick={addNewPost}>Добавить задачу</MyButton>
          </div>
        </form>
        <NotesList notes={notes}/>
    </div>
  );
}

export default App;
