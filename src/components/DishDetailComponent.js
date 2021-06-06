import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    class DishDetail extends Component
    {
        constructor(props) {
            super(props);
    
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(commentPart) {
        if(commentPart!=null)
        {
            let com=commentPart.comments;
        const commArray = com.map((comin) => {
            var ts=new Date(comin.date);
            return (
                
              
               
              <div key={comin.id} >
                 
                  <ul className="list-group">
                  <li className="list-group-item">{comin.comment}
                  <div>--{comin.author}, {ts.toLocaleDateString()}</div></li>
                  
                 </ul>
                
              </div>
              
            );
        });
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {commArray}
            </div>
        )
      
    }
    else{
        return(
            <div></div>
        ); 
    }
    }
    render()
    {
        return(
            <div className="container">
            <div className="row">
           
              {this.renderDish(this.props.dish)}
              
              
            {this.renderComments(this.props.dish)}
            
          </div>
          </div>
        );

    }

    }
    export default DishDetail;