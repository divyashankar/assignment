import { useState } from "react";

const CustomerForm = ({onAdd,onEdit}) =>{
        const [customerId,setCustomerId] = useState('')
        const [customerName,setCustomerName] = useState('')
        const [customerLocation,setCustomerLocation] = useState('')

const onSubmit = (cust) =>{
    cust.preventDefault()
    if(!customerName || !customerLocation || !customerId){
        alert ('Fill all the details please!')
        return
    }
    onAdd({customerId,customerName,customerLocation})
    setCustomerName('')
    setCustomerLocation('')
}
    return (
        <div>
            <form onSubmit={onSubmit} className="form-control">
                <h5>CUSTOMER FORM</h5>
                <div>
                    <input
                        type='text'
                        name='CustomerId'
                        placeholder='Enter your Customer ID *'
                        className="form-control input"
                        value={customerId}
                        onChange={(cust) => setCustomerId(cust.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='CustomerName'
                        placeholder='Enter your name *'
                        className="form-control input"
                        value={customerName}
                        onChange={(cust) => setCustomerName(cust.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='CustomerLocation '
                        placeholder='Enter your location *'
                        className="form-control input"s
                        value={customerLocation}
                        onChange={(cust) => setCustomerLocation(cust.target.value)}
                    />
                </div>
                    <button class='btn btn-success' style={{backgroundColor:"green"}}>Submit</button>
            </form>
        </div>
    )
}

export default CustomerForm; 