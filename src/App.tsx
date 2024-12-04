import './App.css';
import { useState } from "react";
import Customer from "./models/Customer"; // Import the Customer class

function App() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const [customers, setCustomers] = useState<Customer[]>([]);

    // Function to add a new customer
    function addCustomer() {
        const newCustomer = new Customer(name, email, phone); // Create new customer object
        setCustomers([...customers, newCustomer]);
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>

            <br /> <br/>
            <button onClick={addCustomer}>Add Customer</button>
            <br />

            <h3>Customers List:</h3>
            <ul>
                {customers.map((customer, index) => (
                    <li key={index}>
                        {customer.name} - {customer.email} - {customer.phone}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
