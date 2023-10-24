import styles from "./input.module.css";
export function Input(props) {
    function handleValues(e){
        const {target} = e;
        const {name, value}= target;
        let newValues = {...props.values, [name]: value}
        props.setValues(newValues)
    }
    
    return (
        <div className={styles.input}>
            <input id={props.name} type="text" name={props.name} value={props.values[props.name]} onChange={handleValues} />
            <label className={props.values[props.name] ? styles.active : 'inactive'} htmlFor={props.name}>{props.name}</label>
        </div>
    );
}