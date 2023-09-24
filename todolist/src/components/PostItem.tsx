interface PostItemProps {
    title: string;
    body: string;
}

const PostItem = ({ title, body }: PostItemProps) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className='post__btns'>
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default PostItem
