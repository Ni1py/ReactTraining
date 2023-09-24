import { useState } from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

export interface IPost {
  id: number,
  title: string,
  body: string,
}

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])
  const [title, setTitle] = useState('')

  const addNewPost = () => {
  }

  return (
    <div className="App">
        <form>
          <MyInput type='text' placeholder='Название поста'/>
          <MyInput type='text' placeholder='Описание поста'/>
          <MyButton onClick={addNewPost}>Нажми</MyButton>
          <button onClick={() => {}}></button>
        </form>
        <PostList posts={posts} title='Посты про JS'/>
    </div>
  );
}

export default App;
