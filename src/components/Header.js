import Button from './Button';

const Header= ( {title , onAdd, showAdd} ) =>{
    return (
        <header className="header">
            <h5>{ title }</h5>
            <Button className="btn btn-success" color={showAdd ? 'red' : 'green'}  text = {showAdd ? "Close ":"Add "} onClick={onAdd}></Button>
        </header>
    )
}

export default Header 