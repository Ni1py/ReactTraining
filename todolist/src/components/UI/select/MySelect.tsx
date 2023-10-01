import { Option } from '../../../types/types'
import styles from './MySelect.module.css'

type MeSelectProps = {
    value: string
    onChange: (sort: string) => void
    defaultOption: string
    options: Option[]
}

function MySelect ({
    value,
    onChange,
    defaultOption,
    options
}: MeSelectProps
) {
    return (
        <select className={styles.select} value={value} onChange={event => onChange(event.target.value)}>
            <option value='none'>{defaultOption}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export {
    MySelect,
}