import {BrowserRouter} from 'react-router-dom';
import {Form, Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
class App extends Component
{

render() {
  return (
    <BrowserRouter>
    <div>
    
    <Main/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
