import { useState , useEffect } from "react";

const CustomerForm = (props) =>{
        const [id,setId] = useState('')
        const [name,setName] = useState('')
        const [location,setLocation] = useState('')

        useEffect(()=>{
            if(props.inEditState){
                setName(props.custById.name)
                setLocation(props.custById.location)
            }
        },[props.inEditState])

const onSubmit = (cust) =>{
    cust.preventDefault()
    if(!name || !location || !id){
        alert ('Fill all the details please!')
        return
    }
    const isEdit = (props.inEditState) ? true : false ; 
    const customer = (props.inEditState) ? {customerId : props.custById.id,customerName:name,customerLocation : location} : {customerName:name,customerLocation : location};
    props.addCustomer(customer,isEdit);
    setName('')
    setLocation('')
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
                        value={id}
                        onChange={(cust) => setId(cust.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='CustomerName'
                        placeholder='Enter your name *'
                        className="form-control input"
                        value={name}
                        onChange={(cust) => setName(cust.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='CustomerLocation '
                        placeholder='Enter your location *'
                        className="form-control input"s
                        value={location}
                        onChange={(cust) => setLocation(cust.target.value)}
                    />
                </div>
                    <button class={(props.inEditState) ? 'btn btn-success' : 'btn btn-primary'}>{(props.inEditState) ? "Edit" : " Add "}</button>
            </form>
        </div>
    )
}

export default CustomerForm; 