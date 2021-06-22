import React from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from'react-router-dom';
import CommentForm from './CommentFormComponent';  
import { Loading } from './LoadingComponent';
  function  RenderDish({dish}) {
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
   function RenderComments({commentPart,addComment,dishId}) {
      let com=commentPart;
        if(com!=null)
        {
            
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
                <div className='mt-2'>
                <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            </div>
        )
      
    }
    else{
        return(
            <div></div>
        ); 
    }
    }
    function DishDetail(props)
    {
        if(props.isLoading)
        {
            return(
                <div className="container">
                <div className="row">
                    <Loading/>
                </div>
                </div>
            );
        }
        else if(props.errMess)
        {
            return(
                <div className="container">
                <div className="row">
                <h4>{props.errMess}</h4>
                </div>
                </div>
            );

        }
      
        return(
            <div className="container">
                 <div className="row">
                    <Breadcrumb>
                   
                    <BreadcrumbItem ><Link to="/Menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
              
            <div className="row">
           
             < RenderDish dish={props.dish}/>
           
             < RenderComments commentPart={props.comment}
              addComment={props.addComment}
              dishId={props.dish.id}/>
           
            
          </div>
          </div>
        );
}
    

    
    export default DishDetail;