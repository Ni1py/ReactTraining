import styles from './MyInput.module.css'

type MyInputProps = {
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

function MyInput ({
    value,
    onChange,
    placeholder
}: MyInputProps
) {
    return (
        <input className={styles.myInput} value={value} onChange={onChange} type='text' placeholder={placeholder}/>
    )
}

export { 
    MyInput,
}
