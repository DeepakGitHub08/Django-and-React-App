import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header  from './components/header';
import Footer from './components/footer';

function createAlert(){
  alert("You clicked the Footer");
}
var check = 2;

function ShowMessage(props){
  if (props.toShow === true){
    return <h2>My Message</h2>;
  }
  else return null;
}
function App() {
  
  return (
    <div className="App">
      
      <Header info="This is the message" message="Not is the time "/>
      <Header info="This is the second Info"/>
      <p> This is Main Content</p>
        <Footer trademark="This is footer TradeMark" myAlert={createAlert}/>
      <ShowMessage toShow = {false}/>
    </div>

  );
}

export default App;
