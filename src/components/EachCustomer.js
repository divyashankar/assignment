import { FaTrash } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

const EachCustomer = ({customers , onDelete,onEdit}) => {
    return (
        <div>
            <div className= "row">
                <div className="col-sm-3"></div>
                        <div className="col-sm-1">{customers.customerId}</div>
                        <div className="col-sm-2">{customers.customerName}</div>
                        <div className="col-sm-2">{customers.customerLocation}</div>
                        <div className="col-sm-1"><FaPencilAlt style={{color : 'blue' , cursor :'pointer'}} onClick={()=> onEdit(customers.customerId)}/> &nbsp;
                        <FaTrash style={{color : "red" , cursor : "pointer"}} onClick={()=> onDelete(customers.customerId)} /></div>
                        <hr></hr>
                    <div className="col-sm-2"></div>
            </div>            
        </div>
    )
}

export default EachCustomer