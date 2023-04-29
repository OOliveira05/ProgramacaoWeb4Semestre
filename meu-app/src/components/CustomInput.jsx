import styles from './CustomInput.module.css'

function CustomInput(props){
    const{type, placeholder} = props
    return (
        <input className={styles.customInput} type ={type} placeholder={placeholder}>
        
        </input>

    )
}

export default CustomInput