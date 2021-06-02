import React from "react";
import { render } from "react-dom";
import { Form, Button, Row, Col} from 'react-bootstrap';

class CheckAddDriver extends React.Component {
    
  state = {
    drivers_Details_List:[],
    drivers_details: [{
        driver_title: "",
        driver_first_name: "",
        driver_last_name: "",
        driver_gender: "",
        driver_dob: "",
        driver_marital_status: "",
       
    }],
    driver_title_options: ["Mr","Mrs","Dr","Miss","Ms"],
    driver_gender_options: ["Male", "Female"],
    driver_marital_status_options: ["Single","Married"],
  
  };

  componentDidUpdate(){
    console.log("After Update");
    //console.log(this.state.drivers_details);
  }

  handleChange = idx => e => {
    const { name, value } = e.target;
    const drivers_details = [...this.state.drivers_details];
    drivers_details[idx][name] = {
      [name]: value
    };
    this.setState({
      drivers_details
    });

    console.log(this.state.drivers_details);
    
  };

  handleAddRow = (e) => {
    e.preventDefault();
    const item = {
        driver_title: "",
        driver_first_name: "",
        driver_last_name: "",
        driver_gender: "",
        driver_dob: "",
        driver_marital_status: "",
     
    };
    this.setState({
      drivers_details: [...this.state.drivers_details, item]
    });
  };

  handleRemoveSpecificRow = (idx) => (e) => {
    e.preventDefault();
    const drivers_details = [...this.state.drivers_details]
    if(drivers_details.length === 1){
        const drivers_details = [...this.state.drivers_details];
        drivers_details[idx] = {
            driver_title: null,
            driver_first_name: null,
            driver_last_name: null,
            driver_gender: null,
            driver_dob: null,
            driver_marital_status: null,
          
        };
        this.setState({
        drivers_details
        });
    }
    else{
        drivers_details.splice(idx, 1);
        this.setState({ drivers_details });
    }
  }

  radioButtonCheck = (e) => {
    
    [...document.getElementsByClassName("radio-button-input")].forEach(node => {
            node.checked === true
              ? (node.parentElement.classList.add("radio-button-checked"))
              : (node.parentElement.classList.remove("radio-button-checked"));
          });

}

  render() {
    return (
      <div>
        <h2>About Driver</h2>
        {this.state.drivers_details.map((item, idx) => (
          <React.Fragment key={idx}>
          <Form.Group>
            <Form.Label>Driver's Title</Form.Label>
            <Form.Control className="form-field " name="driver_title" as="select" value={this.state.drivers_details[idx].driver_title} onChange={this.handleChange(idx)}>
            <option >-- Please Select --</option>
                {this.state.driver_title_options.length > 0 && this.state.driver_title_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>
                )}
                </Form.Control>
        </Form.Group>
          
          <Row>
          <Col>
            <Form.Group>
                <Form.Label>Driver's First Name</Form.Label>
                <Form.Control className="form-field" name="driver_first_name"  value={this.state.drivers_details[idx].driver_first_name} onChange={this.handleChange(idx)}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
                <Form.Label>Driver's Last Name</Form.Label>
                <Form.Control className="form-field" name="driver_last_name"  value={this.state.drivers_details[idx].driver_last_name} onChange={this.handleChange(idx)}/>
            </Form.Group>
          </Col>
          </Row>

          <Row>
          <Col>
          <Form.Group>
            <Form.Label id="radio-button-label">Driver's Gender</Form.Label>
            <Row>
                {this.state.driver_gender_options.length > 0 && this.state.driver_gender_options.map((option, i) =>
                <Col key={i} lg={5}>
                    <Form.Group key={i} id="radio-button-field" className="radio-button" onChange={this.radioButtonCheck()} >
                        <input id={option} name="driver_gender" className="radio-button-input" type="radio" value={option} checked={this.state.drivers_details[idx].driver_gender === option} onChange={this.handleChange(idx)} />
                        {' '}{' '}
                    <Form.Label>{option}</Form.Label>
                    </Form.Group>
                </Col>
            )}
            </Row>
            </Form.Group>
            </Col>
            <Col>

            <Form.Group>
              <Form.Label>Driver's Date of Birth</Form.Label>
              <Form.Control className="form-field" name="driver_dob" type="date" value={this.state.drivers_details[idx].driver_dob} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            </Row>

            
            <Form.Group>
            <Form.Label>Driver's Marital Status</Form.Label>
            <Form.Control className="form-field " name="driver_marital_status" as="select" value={this.state.drivers_details[idx].driver_marital_status} onChange={this.handleChange(idx)}>
            <option >-- Please Select --</option>
                {this.state.driver_marital_status_options.length > 0 && this.state.driver_marital_status_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>
                )}
                </Form.Control>
            </Form.Group>
           


          <Button variant="danger" className="button-rounded btn-sm" onClick={this.handleRemoveSpecificRow(idx)}>
            Remove
          </Button>
             {' '}         
          <Button variant="info" onClick={this.handleAddRow} className="button-rounded btn-sm">
            Add Another Driver
          </Button>
          </React.Fragment>
        ))}

      </div>
    );
  }
}

export default CheckAddDriver;