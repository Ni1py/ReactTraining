import React from 'react';

interface NoteCardProps {
    description: string;
    done: boolean;
}

const NoteCard = ({ description, done }: NoteCardProps) => {
    return (
        <div className='note'>
            <div>
                <input type='checkbox'/>
            </div>
            <div className='note__content'>
                <strong>{description}</strong>
            </div>
            <div className='note__btns'>
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default NoteCard
