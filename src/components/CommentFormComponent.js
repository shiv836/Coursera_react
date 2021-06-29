import React,{Component} from 'react';
import {Button,Modal, ModalHeader, ModalBody,Row,Col,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';

const maxLength=(len)=>(val)=>!(val) || (val.length <= len);
const minLength=(len)=>(val)=> (val) && (val.length >= len);
class CommentForm extends Component
{
    constructor(props)
    {
    super(props);
    this.state = {
    isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
}
toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
 handleSubmit(values) {
  this.props.postComment(this.props.dishId,values.rating,values.yourname,values.message);
    
}
    render()
    {
        return(
            <>
            <Button outline  onClick={this.toggleModal}>
                      <span className="fa fa-pencil fa-lg"> Submit Comment</span>
             </Button>
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
<LocalForm  onSubmit={(values)=>this.handleSubmit(values)}>
<Row className="form-group">
    <Label htmlFor="rating" md={12}>Rating</Label>
    <Col >
        < Control.select  model=".rating" id="rating" name="rating" className="form-control"
        placeholder="1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          </Control.select>
        
    </Col>
</Row>
<Row className="form-group">
    <Label htmlFor="yourname" md={12}>Your Name</Label>
    <Col >
<Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name" className="form-control" 
   validators={{
     minLength: minLength(2), maxLength: maxLength(15)
                }} />
                 <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                     /> 
   
</Col>
</Row>
<Row className="form-group">
                <Label htmlFor="message" md={12}>Comment</Label>
                <Col>
                    <Control.textarea model=".message" id="message" name="message"
                        rows="6"
                    className="form-control"/>
                </Col>
            </Row>

            <Row className="form-group">
                <Col md={{size: 10}}>
                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                </Col>
            </Row>
            </LocalForm>
                    
                        

                    </ModalBody>
                </Modal>
             </>
        );
    
    }
}
export default CommentForm;
