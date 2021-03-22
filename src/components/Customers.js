import EachCustomer from './EachCustomer';

const Customers= ({ customers,onDelete,onEdit }) => {

    return (
        <>
            {customers.map((customers) => (
                <EachCustomer key={customers.id} customers = {customers} onDelete={onDelete} onEdit={onEdit}/>
            ))}
        </>
    )
}

export default Customers 