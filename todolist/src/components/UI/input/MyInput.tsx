import './MyInput.css'

interface MyInputProps {
    type: string;
    placeholder: string;
}

const MyInput = ({type, placeholder}: MyInputProps) => {
    return (
        <input className='myInput' type={type} placeholder={placeholder}/>
    )
}

export default MyInput
