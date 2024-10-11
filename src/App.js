import logo from './logo.svg';
import './App.css';

function App() {
  let nam = 'Ismail Hossen'
  let style = {
    color :'red',
    backgroundColor:'green'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done my project<code>src/App.js</code> and save to reload.
        </p>
        <Person></Person>
        <Person></Person>
        <h1 style={style}>My name is {nam}</h1>
        <h3  style={{color:'black',backgroundColor:'white'}}>Bangladesh is a small Country</h3>
      </header>
    </div>

 

  );
}
function Person (){
  // const personStyle = {
  //   border:'2px solid red',
  //   margin:'2px'
  // }
  return (
    <div style={{border:'3px solid green',margin:'4px',borderRadius:'30px',padding:'20px'}}>
      <h1>Name : Mr.----------</h1>
      <h2>Whta about learning React</h2>
    </div>
  )
  
}

export default App;
