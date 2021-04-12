import { FaTrash } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

const EachCustomer = (props) => {
    return (
        <div>
            <div className= "row">
                <div className="col-sm-3"></div>
                        <div className="col-sm-1">{props.customer.customerId}</div>
                        <div className="col-sm-2">{props.customer.customerName}</div>
                        <div className="col-sm-2">{props.customer.customerLocation}</div>
                        <div className="col-sm-1"><FaPencilAlt style={{color : 'blue' , cursor :'pointer'}} onClick={()=> props.editCustomer(props.customer.customerId)}/> &nbsp;
                        <FaTrash style={{color : "red" , cursor : "pointer"}} onClick={()=> props.deleteCustomer(props.customer.customerId)} /></div>
                        <hr></hr>
                    <div className="col-sm-2"></div>
            </div>            
        </div>
    )
}

export default EachCustomer