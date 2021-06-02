import logo from './logo.svg';
import {Form, Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent';
import './App.css';
import {DISHES} from './shared/dishes'
import { render } from '@testing-library/react';
import { Component } from 'react';
class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      dishes:DISHES
    };
  }
render() {
  return (
    <div>
    <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
      </div>

    </Navbar>
    <Menu dishes={this.state.dishes}/>
    </div>
  );
}
}

export default App;
