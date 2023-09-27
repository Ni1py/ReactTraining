import styles from  './MyButton.module.css'

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
        <button className={styles.myBtn} onClick={onClick}>
            {children}
        </button>
    )
}

export { 
    MyButton,
}
