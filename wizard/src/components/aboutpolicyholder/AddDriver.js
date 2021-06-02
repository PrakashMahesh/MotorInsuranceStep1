import React from "react";
import { render } from "react-dom";
import { Form, Button, Row, Col} from 'react-bootstrap';

class AddDriver extends React.Component {
    
  state = {
    drivers_Details_List:[{}],
    drivers_details: [{
        driver_title: "",
        driver_first_name: "",
        driver_last_name: "",
        driver_gender: "",
        driver_dob: "",
        driver_marital_status: "",
        driver_country: "",
        driver_citizen_by_birth: "",
        driver_contact_number: "",
        driver_email: "",
        driver_post_code: "",
        driver_address_line_1: "",
        driver_address_line_2: "",
        driver_city_or_town: "",
        driver_country: "",
        policy_holder_occupation_type: "",
        policy_holder_occupation: "",
        policy_holder_industry: "",
        policy_holder_other_occupation: "",
        driver_license: "",
        driver_license_number: "",
        driver_license_period: "",
        driver_license_cancelled: "",
        driver_license_number: "",
        driver_dvla_medical_conditions: "",
        driver_medical_conditions: "",
        driver_accidents_claims: ""
    }],
    driver_title_options: ["Mr","Mrs","Dr","Miss","Ms"],
    driver_gender_options: ["Male", "Female"],
    driver_marital_status_options: ["Single","Married"],
    driver_country_options:["US","UK"],
    yes_or_no_options: ["Yes","No"],
    policy_holder_occupation_options: ["Option 1","Option 2"],
    driver_license_options: ["Full UK License","Provisional UK License","Other/None"],
    driver_license_period_options: ["Up to 1 year","Up to x years","Over 20 years"],
    driver_medical_conditions_options: ["Option 1","Option 2"]
  };

  componentDidUpdate(){
    console.log("After Update");
    console.log(this.state.drivers_details);
  }

  handleChange = idx => e => {
    const { name, value } = e.target;
    const drivers_details = [...this.state.drivers_details];
    drivers_details[idx] = {
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
        driver_country: "",
        driver_citizen_by_birth: "",
        driver_contact_number: "",
        driver_email: "",
        driver_post_code: "",
        driver_address_line_1: "",
        driver_address_line_2: "",
        driver_city_or_town: "",
        driver_country: "",
        policy_holder_occupation_type: "",
        policy_holder_occupation: "",
        policy_holder_industry: "",
        policy_holder_other_occupation: "",
        driver_license: "",
        driver_license_number: "",
        driver_license_period: "",
        driver_license_cancelled: "",
        driver_license_number: "",
        driver_dvla_medical_conditions: "",
        driver_medical_conditions: "",
        driver_accidents_claims: ""
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
            driver_country: null,
            driver_citizen_by_birth: null,
            driver_contact_number: null,
            driver_email: null,
            driver_post_code: null,
            driver_address_line_1: null,
            driver_address_line_2: null,
            driver_city_or_town: null,
            driver_country: null,
            policy_holder_occupation_type: null,
            policy_holder_occupation: null,
            policy_holder_industry: null,
            policy_holder_other_occupation: null,
            driver_license: null,
            driver_license_number: null,
            driver_license_period: null,
            driver_license_cancelled: null,
            driver_license_number: null,
            driver_dvla_medical_conditions: null,
            driver_medical_conditions: null,
            driver_accidents_claims: null
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

            <Row>
            <Col>
            <Form.Group>
            <Form.Label>Driver's Marital Status</Form.Label>
            <Form.Control className="form-field " name="driver_marital_status" as="select" value={this.state.drivers_details[idx].driver_marital_status} onChange={this.handleChange(idx)}>
            <option >-- Please Select --</option>
                {this.state.driver_marital_status_options.length > 0 && this.state.driver_marital_status_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>
                )}
                </Form.Control>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
            <Form.Label>Driver is a permanent citizen of</Form.Label>
            <Form.Control className="form-field " name="driver_country" as="select" value={this.state.drivers_details[idx].driver_country} onChange={this.handleChange(idx)}>
            <option >-- Please Select --</option>
                {this.state.driver_country_options.length > 0 && this.state.driver_country_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>
                )}
                </Form.Control>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group>
            <Form.Label id="radio-button-label">Is the Driver a citizen by birth?</Form.Label>
            <Row>
                {this.state.yes_or_no_options.length > 0 && this.state.yes_or_no_options.map((option, i) =>
                <Col key={i} lg={5}>
                    <Form.Group key={i} id="radio-button-field" className="radio-button" onChange={this.radioButtonCheck()} >
                        <input id={option} name="driver_citizen_by_birth" className="radio-button-input" type="radio" value={option} checked={this.state.drivers_details[idx].driver_citizen_by_birth === option} onChange={this.handleChange(idx)} />
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
                <Form.Label>Driver's contact number</Form.Label>
                <Form.Control className="form-field" name="driver_contact_number"  value={this.state.drivers_details[idx].driver_contact_number} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            </Row>


            <Row>
              <Col>
            <Form.Group>
                <Form.Label>Driver's Email</Form.Label>
                <Form.Control className="form-field" name="driver_email"  value={this.state.drivers_details[idx].driver_email} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            <Col>

            <Form.Group>
                <Form.Label>Driver's Post Code</Form.Label>
                <Form.Control className="form-field" name="driver_post_code"  value={this.state.drivers_details[idx].driver_post_code} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            </Row>

            <Button className="btn-sm">
             Find Address
            </Button>

            <Row>
          <Col>
            <Form.Group>
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control className="form-field" name="driver_address_line_1"  value={this.state.drivers_details[idx].driver_address_line_1} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control className="form-field" name="driver_address_line_2"  value={this.state.drivers_details[idx].driver_address_line_2} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group>
                <Form.Label>Town/City</Form.Label>
                <Form.Control className="form-field" name="driver_city_or_town"  value={this.state.drivers_details[idx].driver_city_or_town} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            <Col>

            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control className="form-field" name="driver_country"  value={this.state.drivers_details[idx].driver_country} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            </Row>
            
            <Row>
              <Col>
            <Form.Group>
            <Form.Label>Policy holder's occupation type</Form.Label>
            <Form.Control className="form-field " name="policy_holder_occupation_type" as="select" value={this.state.drivers_details[idx].policy_holder_occupation_type} onChange={this.handleChange(idx)}>
            <option >-- Please Select --</option>
                {this.state.policy_holder_occupation_options.length > 0 && this.state.policy_holder_occupation_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>
                )}
                </Form.Control>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                <Form.Label>Policy Holder's Occupation</Form.Label>
                <Form.Control className="form-field" name="policy_holder_occupation"  value={this.state.drivers_details[idx].policy_holder_occupation} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            </Row>
            
            <Row>
              <Col>
            <Form.Group>
                <Form.Label>Enter the industry where the policy holder is occupied in</Form.Label>
                <Form.Control className="form-field" name="policy_holder_industry"  value={this.state.drivers_details[idx].policy_holder_industry} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
            <Form.Label id="radio-button-label">Does the policy holder have any other occupation?</Form.Label>
            <Row>
                {this.state.yes_or_no_options.length > 0 && this.state.yes_or_no_options.map((option, i) =>
                <Col key={i} lg={5}>
                    <Form.Group key={i} id="radio-button-field" className="radio-button" onChange={this.radioButtonCheck()} >
                        <input id={option} name="policy_holder_other_occupation" className="radio-button-input" type="radio" value={option} checked={this.state.drivers_details[idx].policy_holder_other_occupation === option} onChange={this.handleChange(idx)} />
                        {' '}{' '}
                    <Form.Label>{option}</Form.Label>
                    </Form.Group>
                </Col>
            )}
            </Row>
            </Form.Group>
            </Col>
            </Row>
            
            <Row>
              <Col>
            <Form.Group>
            <Form.Label>Driver's license type</Form.Label>
            <Form.Control className="form-field " name="driver_license" as="select" value={this.state.drivers_details[idx].driver_license} onChange={this.handleChange(idx)}>
            <option >-- Please Select --</option>
                {this.state.driver_license_options.length > 0 && this.state.driver_license_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>
                )}
                </Form.Control>
            </Form.Group>
            </Col>

          <Col>
            <Form.Group>
                <Form.Label>Would you like to enter the Driver's driving license number?</Form.Label>
                <Form.Control className="form-field" name="driver_license_number"  value={this.state.drivers_details[idx].driver_license_number} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
              <Col>
            <Form.Group>
            <Form.Label>Select how long has the Driver held this license</Form.Label>
            <Form.Control className="form-field " name="driver_license_period" as="select" value={this.state.drivers_details[idx].driver_license_period} onChange={this.handleChange(idx)}>
            <option >-- Please Select --</option>
                {this.state.driver_license_period_options.length > 0 && this.state.driver_license_period_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>
                )}
                </Form.Control>
        </Form.Group>
        </Col>

        <Col>
        <Form.Group>
            <Form.Label id="radio-button-label">Have you ever had license cancelled/suspended or declared void?</Form.Label>
            <Row>
                {this.state.yes_or_no_options.length > 0 && this.state.yes_or_no_options.map((option, i) =>
                <Col key={i} lg={5}>
                    <Form.Group key={i} id="radio-button-field" className="radio-button" onChange={this.radioButtonCheck()} >
                        <input id={option} name="driver_license_cancelled" className="radio-button-input" type="radio" value={option} checked={this.state.drivers_details[idx].driver_license_cancelled === option} onChange={this.handleChange(idx)} />
                        {' '}{' '}
                    <Form.Label>{option}</Form.Label>
                    </Form.Group>
                </Col>
            )}
            </Row>
            </Form.Group>
            </Col>
            </Row>

            <Row>
              <Col>
            <Form.Group>
                <Form.Label>Driver's driving license number</Form.Label>
                <Form.Control className="form-field" name="driver_license_number"  value={this.state.drivers_details[idx].driver_license_number} onChange={this.handleChange(idx)}/>
            </Form.Group>
            </Col>

            <Col>
            <Form.Group>
            <Form.Label id="radio-button-label">Does the Driver have any DVLA-reported medical conditions or disabilities?</Form.Label>
            <Row>
                {this.state.yes_or_no_options.length > 0 && this.state.yes_or_no_options.map((option, i) =>
                <Col key={i} lg={5}>
                    <Form.Group key={i} id="radio-button-field" className="radio-button" onChange={this.radioButtonCheck()} >
                        <input id={option} name="driver_dvla_medical_conditions" className="radio-button-input" type="radio" value={option} checked={this.state.drivers_details[idx].driver_dvla_medical_conditions === option} onChange={this.handleChange(idx)} />
                        {' '}{' '}
                    <Form.Label>{option}</Form.Label>
                    </Form.Group>
                </Col>
            )}
            </Row>
            </Form.Group>
            </Col>
            </Row>
            
            <Row>
              <Col>
            <Form.Group>
            <Form.Label>Select the medical conditions or disabilities</Form.Label>
            <Form.Control className="form-field " name="driver_medical_conditions" as="select" value={this.state.drivers_details[idx].driver_medical_conditions} onChange={this.handleChange(idx)}>
            <option >-- Please Select --</option>
                {this.state.driver_medical_conditions_options.length > 0 && this.state.driver_medical_conditions_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>
                )}
                </Form.Control>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
            <Form.Label id="radio-button-label">Does the Driver have any motor accidents or claims in the last 5 years?</Form.Label>
            <Row>
                {this.state.yes_or_no_options.length > 0 && this.state.yes_or_no_options.map((option, i) =>
                <Col key={i} lg={5}>
                    <Form.Group key={i} id="radio-button-field" className="radio-button" onChange={this.radioButtonCheck()} >
                        <input id={option} name="driver_accidents_claims" className="radio-button-input" type="radio" value={option} checked={this.state.drivers_details[idx].driver_accidents_claims === option} onChange={this.handleChange(idx)} />
                        {' '}{' '}
                    <Form.Label>{option}</Form.Label>
                    </Form.Group>
                </Col>
            )}
            </Row>
            </Form.Group>
            </Col>
            </Row>

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

export default AddDriver;