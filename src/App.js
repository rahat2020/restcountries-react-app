import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
 const [countries, setCountries] = useState([]);
 const [cart, setCart] = useState([]);

 useEffect(()=>{
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then (data => {
    setCountries(data)
    // console.log(data);
    // const names = data.map(country => country.name)
    // console.log(names);
  })
   .catch(error => console.log(error))
 },[])

 const handleAddCountry = (country) => {
  //  console.log('added', country)
  const newCart = [...cart, country];
  setCart(newCart);


  }

  return (
    <div className="App">
      <h1>countries loaded:{countries.length}</h1>
      <h4>Country loaded: {cart.length}</h4>
      <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       
      </header>
    </div>
  );
}

export default App;
