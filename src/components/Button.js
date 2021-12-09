const Button = ({text, onClick}) => {
    return (
        <button className='btn btn-lg btn-dark mt-auto' onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
