import PostItem from './PostItem';
import { IPost } from '../App';

interface PostListProps {
    posts: IPost[]
    title: string
}

const PostList = ({posts, title}: PostListProps) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1> 
            {posts.map(post =>
                <PostItem title={post.title} body={post.body} key={post.id}/>
            )}
        </div>
    )
}

export default PostList
