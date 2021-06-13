
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './menuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { ReactReduxContext } from 'react-redux';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {

  constructor(props) {
    super(props);
  
  }

 

  render() {
    const HomePage = () => {
      return(
          <Home  dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
          promotion={this.props.promotions.filter((promotions)=>promotions.featured)[0]} 
          leader={this.props.leaders.filter((leaders)=>leaders.featured)[0]} 
          comment={this.props.comments.filter((comments)=>comments.featured)[0]}/>
      );
    }
    const AboutUs=()=>{
      return <About leaders={this.props.leaders}/>
    }
    const DishWithId=({match})=>
    {
return (
       <DishDetail dish={this.props.dishes.filter((dish)=> dish.id=== parseInt(match.params.dishId,10)
       )[0]} comment={this.props.comments.filter((comment)=> comment.dishId ===parseInt(match.params.dishId,10))} />
      );
    }
    const ContactUs=() =>
    {
      return(
        <Contact/>
      );
    }
    return (
    
      <div>
       
        <Header/>
       <Switch>
         <Route path="/home" component={HomePage}/>
         <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
         <Route path="/menu/:dishId" component={DishWithId}/>
         <Route exact path='/contactus' component={ContactUs} />
         <Route exact path='/aboutus' component={AboutUs} />
         <Redirect to="/home" />
       </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
