import './MyButton.css';

interface MyButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

const MyButton = ({onClick, children}: MyButtonProps) => {
    return (
        <button className='myBtn' onClick={onClick}>
            {children}
        </button>
    )
}

export default MyButton
