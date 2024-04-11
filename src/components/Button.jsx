const Button = ({label, clickHandler, classes, disabled}) => {
    return <button disabled={disabled} className={`${classes}`} onClick={clickHandler}>{label}</button>
}

export default Button;