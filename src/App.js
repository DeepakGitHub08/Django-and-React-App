import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header  from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers';
import styled from 'styled-components';
function createAlert(){
  alert("You clicked the Footer");
}

const Paragraph = styled.p`
font-size: 3em;
    color: green;
`
const Context = React.createContext();
export  const CtxConsumer = Context.Consumer;

const animals = ['snake', 'elephant', 'lion'];

function ShowMessage(props){
  if (props.toShow === true){
    return <h2>My Message</h2>;
  }
  else return null;
}
function App() {
  
  return (
    <Context.Provider value={{animals: animals}}>

      <div className="App">
        <h1>This is /App page</h1>
        <Paragraph>New Styled</Paragraph>
        <Footer />
        <Header />
        <ShowMessage toShow = {false}/>
      </div>
    </Context.Provider>

  );
}
export function Router() {
  return (
    <Context.Provider value={{animals: animals}}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element = {<App/>} ></Route>
            <Route exact path='/header' element = {<Header/>} ></Route>
            <Route exact path='/footer' element = {<Footer/>} ></Route>
          </Routes>
          <Routes>
            <Route exact path='/numbers' element= {<Numbers/>}></Route>
          </Routes>
          
        </div>
      
    </BrowserRouter>
  </Context.Provider>
)
  }

export default App;
