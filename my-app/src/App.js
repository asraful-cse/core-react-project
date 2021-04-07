import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['molla', 'depo', 'tepo', 'gecho']
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <h1>32-7:: pass dynamic data to components,props in react</h1>
        <Person name={nayoks[0]} nayka='Popy'></Person>
        <Person name='Sakib' nayka='Apo'></Person>
        <Person name='Razzak' nayka='Sabana'></Person>
        <Person name='Sohel' nayka='Poly'></Person>
      </header>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    border: '4px solid green',
    margin: '30px'
  }
  // console.log(props);
  return (
    <div style={personStyle}>
      <h1>Hero : {props.name}</h1>
      <h2>Heroin : {props.nayka}</h2>
    </div>
  )
}

export default App;
