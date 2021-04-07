import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Sakib', 'zafor', 'Bapparaz', 'Amir khan', 'Elias kanchon', 'Salman khan']

  const products = [
    { name: 'Photo shope', price: '$800' },
    { name: 'Illustrator', price: '$400' },
    { name: 'Pdf Reader', price: '$55.99' },
    { name: 'premium El', price: '$245.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2>32-12: Load dynamic data API call userEffect integration </h2>
        <Users></Users>
        <br /><br />
        <h1>32-8:: pass object  to components and accessed in react</h1>

        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>

        <br />
        <h3>32-10:: Introduction to component state</h3>
        <h4> what is state?: ans : data that could be changed </h4>
        <h3>32-11::Component state method hook and set state method</h3>
        <Counter></Counter>

        <h3>32-9:: create multiple component from an array object</h3>

        <ul>
          <li>
            {
              nayoks.map(nayok => <li>{nayok}</li>)     // array to map
            }
            <br />
            <br />

            {
              products.map(product => <li>{product.name}</li>)   // array er vetore object ke dynamic map
            }
          </li>
        </ul>
        <br />
        <br />
        {
          products.map(Pd => <Product product={Pd}></Product>)    // component ke dynamic vabe map kora jai
        }

      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    width: '200px',
    height: '200px',
    backgroundColor: 'lightGray',
    float: 'left',
    color: 'black'
  }
  //destructuring way...
  const { name, price } = props.product;   // destructuring kore hoyese..
  // console.log(props);
  return (
    <div style={productStyle}>
      {/* <h3>{props.name}</h3>
      <h2>{props.price}</h2> */}

      {/* <h3>{props.product.name}</h3>
      <h2>{props.product.price}</h2> */}

      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}


// state use ....
function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  // const newCount = count + 1;
  //   setCount(count + 1);
  // }
  // const handleDecrease = () => setCount(count - 1);
  // const downCount = count - 1;
  // setCount(count - 1);
  // }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div >
  )

}


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log('calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);  // data bar bar jate reload na hoi ta off korar jonno extra empty array bosano holow

  return (
    <div>
      <h3>Dynamic users:{users.length} </h3>
      {/* {
        console.log(users)
      } */}

      <ul>
        {
          users.map(user => <li>email: {user.email}  name: {user.name}</li>)

        }

      </ul>
    </div>
  )

}

export default App;
