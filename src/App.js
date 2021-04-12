import Header from './components/Header';
import Footer from './components/Footer';
import {useState , useEffect} from 'react';
import Customers from './components/Customers';
import './App.css';
import CustomerForm from './components/CustomerForm';

function App() {
  const [customers,setCustomers] = useState([]);
  const [inEdit,setEdit] = useState(false);
  const [custById,setCustById] = useState(null);

  const getCustomersfromDB = async() =>{
    const res = await fetch("http://localhost:5000/customers/");
    const data = await res.json();
    return data; 
  };


  const fetchCustomerById = async(customerId)=> { 
    const res = await fetch("http://localhost:5000/customers/"+customerId);
    const data = res.json();
    return data; 
   };

  useEffect(()=>{
    const customerData = async() =>{
      const data = await getCustomersfromDB();
      setCustomers(data);
    };
    customerData(); 
  });


  const deleteCust = async(id) =>{
    const res = await fetch("http://localhost:5000/customers/"+id,{
      method : 'DELETE'
    })
    const data = await res.json()
    setCustomers([...customers,data])
  }

  const editCust = (customerId) => {
    setEdit(true);
    setCustById(getCustomerById(customerId));

  }

  const addCustomer = async (customer,isEdit)=>{
    if(!isEdit){
      const res = await fetch("http://localhost:5000/customers/",{
        method : 'POST',
        body : JSON.stringify(customer) 
      })
      const data = await res.json()
      setCustomers([...customers,data])    
    }
    else{
      const editedCustObj = {
        id : customer.customerId,
        customerName : customer.customerName,
        customerLocation : customer.customerName
      }
      const res = await fetch("http://localhost:5000/customers/"+customer.customerId,{
        method : 'PUT',
        body : JSON.stringify(editedCustObj) 
      })
      const data = await res.json()
      setCustomers([...customers,data])
      setEdit(false) 
    }
  };

 const getCustomerById = async(customerId)=> { 
    let cust; 
    customers.forEach((item)=>{
      if(item.customerId === customerId){
        cust = item; 
      }
    })
   return cust; 
  }

  return (
    <div className="App">
      <Header title="CUSTOMER INFORMATION"/>
      <CustomerForm
      addCustomer = {addCustomer}
      inEditState = {inEdit}
      custById = {custById}/>
      {customers.length>0 ? <Customers customers = {customers} 
      deleteCustomer = {deleteCust} editCustomer={editCust}></Customers> : "No customer information to display"}
      <Footer></Footer>
    </div>
  );
}

export default App;
