

const Button= (props) =>{
    return (
        <button className='btn btn-success' style={{backgroundColor:props.color , width:"15%"}} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button