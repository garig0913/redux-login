const Input = props => {
    return <input className='input focus:outline-none my-3' placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
}

export default Input