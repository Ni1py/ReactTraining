import './MyInput.css'

interface MyInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
}

const MyInput = ({value, onChange, type, placeholder}: MyInputProps) => {
    return (
        <input className='myInput' value={value} onChange={onChange} type={type} placeholder={placeholder}/>
    )
}

export default MyInput
