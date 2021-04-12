import EachCustomer from './EachCustomer';

const Customers= (props) => {

    return (
        <>
            {props.customers.map((customer,index) => (
                <EachCustomer key={customer.id} customer = {customer} index = {index} deleteCustomer={props.deleteCustomer} editCustomer={props.editCustomer}/>
            ))}
        </>
    )
}

export default Customers 