import './MyButton.css'

type MyButtonProps = {
    onClick?: () => void
    children?: React.ReactNode
}

function MyButton ({
    onClick,
    children
}: MyButtonProps
) {
    return (
        <button className='myBtn' onClick={onClick}>
            {children}
        </button>
    )
}

export { 
    MyButton,
}
