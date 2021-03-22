import Header from './components/Header';
import Footer from './components/Footer';
import {useState} from 'react';
import Customers from './components/Customers';
import './App.css';
import CustomerForm from './components/CustomerForm';

function App() {
  const deleteCust = (customerId) =>{
    console.log("Deleted Customer with ID : "+customerId)
  }

  const editCust = (customerId) => {
    console.log("Edited Customer with ID : "+customerId)
    {<CustomerForm/>}
  }

  const addCustomer = (customer)=>{
    const id = Math.random()
    const newCustomer = {id,...customer}
    setCustomers([...customers,newCustomer])
  }

  const [showAddCustomer , setShowAddCustomer] = useState(false)

  const [customers , setCustomers] = useState([
    {	
      "customerId" : "01",
      "customerName" : "Jawahar",
      "customerLocation" : "India" 
    }, 
    {	
      "customerId" : "02",
      "customerName" : "Subash",
      "customerLocation" : "India" 
    }, 
    {	
      "customerId" : "03",
      "customerName" : "Bhagat",
      "customerLocation" : "India" 
    }, 
    {	
      "customerId" : "04",
      "customerName" : "Tilak",
      "customerLocation" : "India" 
    }, 
    {	
      "customerId" : "05",
      "customerName" : "Shastri",
      "customerLocation" : "India" 
    }, 
    
  ])
  return (
    <div className="App">
      <Header title="CUSTOMER INFORMATION"
      onAdd={()=> setShowAddCustomer(!showAddCustomer)}
      showAdd={showAddCustomer} />
      {showAddCustomer && <CustomerForm onAdd={addCustomer}/>}
      {customers.length>0 ? <Customers customers = {customers} 
      onDelete = {deleteCust} onEdit={editCust}></Customers> : "No customer information to display"}
      <Footer></Footer>
    </div>
  );
}

export default App;
