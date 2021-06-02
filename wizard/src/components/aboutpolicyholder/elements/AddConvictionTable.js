import React from "react";
import { Form, Button} from 'react-bootstrap';
import '../App.css';

class AddConvictionTable extends React.Component {
    
  state = {
    conviction_details: [{
        conviction_date: "",
        dvla_code: "",
        points_incurred: "",
        fine_incurred: "",
        ban_length: "",
        driver_breathlaysed: "",
        breathalyser_reading: "",
        offense_type: "",
        offense_type: "",
        errors: [{
          conviction_date: "",
          dvla_code: "",
          points_incurred: "",
          fine_incurred: "",
          ban_length: "",
          driver_breathlaysed: "",
          breathalyser_reading: "",
          offense_type: "",
          offense_type: ""
        }]
    }],
    yes_or_no_options: ["Yes","No"]
  };

  handleChange = idx => e => {
   
    const { name, value } = e.target;
    const conviction_details = [...this.state.conviction_details];
    conviction_details[idx][name] = value;
    this.setState({
      conviction_details
    });
    console.log(conviction_details);
  };

  handleAddRow = (e) => {
    e.preventDefault();
    const item = {
        conviction_date: "",
        dvla_code: "",
        points_incurred: "",
        fine_incurred: "",
        ban_length: "",
        driver_breathlaysed: "",
        breathalyser_reading: "",
        offense_type: "",
        offense_type: "",
        errors: [{
          conviction_date: "",
          dvla_code: "",
          points_incurred: "",
          fine_incurred: "",
          ban_length: "",
          driver_breathlaysed: "",
          breathalyser_reading: "",
          offense_type: "",
          offense_type: ""
        }]
    };
    this.setState({
      conviction_details: [...this.state.conviction_details, item]
    });
  };

  handleRemoveSpecificRow = (idx) => (e) => {
    e.preventDefault();
    const conviction_details = [...this.state.conviction_details]
    if(conviction_details.length === 1){
        const conviction_details = [...this.state.conviction_details];
        conviction_details[idx] = {
            conviction_date:null,
            dvla_code:null,
            points_incurred:null,
            fine_incurred:null,
            ban_length:null,
            driver_breathlaysed:null,
            breathalyser_reading:null,
            offense_type:null,
            offense_type:null,
            errors: [{
              conviction_date: null,
              dvla_code: null,
              points_incurred: null,
              fine_incurred: null,
              ban_length: null,
              driver_breathlaysed: null,
              breathalyser_reading: null,
              offense_type: null,
              offense_type: null
            }]
        };
        this.setState({
        conviction_details
        });
        document.getElementById("conviction_date_0").value = null;
        document.getElementById("dvla_code_0").value = null;
        document.getElementById("points_incurred_0").value = null;
        document.getElementById("fine_incurred_0").value = null;
        document.getElementById("ban_length_0").value = null;
        document.getElementById("driver_breathlaysed_0").value = null;
        document.getElementById("breathalyser_reading_0").value = null;
        document.getElementById("offense_type_0").value = null;

        const showButton = this.props.action;
        showButton();
    }
    else{
        conviction_details.splice(idx, 1);
        this.setState({ conviction_details });
    }
  }

  render() {
    return (
      <div>
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center" style={{fontSize: "17px"}}>Conviction Date</th>
                    <th className="text-center" style={{fontSize: "17px"}}>DVLA Code</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Points Incurred</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Fine Incurred</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Ban Length</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Has Driver Breathlaysed</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Breathalyser Reading</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Has Offense Type</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.conviction_details.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>
                        <Form.Control
                        id="conviction_date_0"
                        type="date" 
                        name="conviction_date"
                        className="form-field form-control"
                        value={this.state.conviction_details[idx].conviction_date}
                        onChange={this.handleChange(idx)}
                        format="dd-mm-yyyy" 
                        />
                    </td>
                    <td>
                        <Form.Control
                        id="dvla_code_0"
                        type="number" 
                        name="dvla_code"
                        className="form-field form-control" 
                        value={this.state.conviction_details[idx].dvla_code}
                        onChange={this.handleChange(idx)}
                        />
                    </td>
                    <td>
                        <Form.Control 
                        id="points_incurred_0"
                        type="number" 
                        name="points_incurred"
                        className="form-field form-control" 
                        value={this.state.conviction_details[idx].points_incurred}
                        onChange={this.handleChange(idx)}
                        />
                    </td>
                    <td>
                        <Form.Control
                        id="fine_incurred_0"
                        type="number" 
                        name="fine_incurred"
                        className="form-field form-control" 
                        value={this.state.conviction_details[idx].fine_incurred}
                        onChange={this.handleChange(idx)}
                        />
                    </td>
                    <td>
                        <Form.Control 
                        id="ban_length_0"
                        type="number" 
                        name="ban_length"
                        className="form-field form-control" 
                        value={this.state.conviction_details[idx].ban_length}
                        onChange={this.handleChange(idx)}
                        />
                    </td>
                    <td>
                    <Form.Control id="driver_breathlaysed_0" className="form-field form-control" name="driver_breathlaysed" as="select" value={this.state.conviction_details[idx].driver_breathlaysed} onChange={this.handleChange(idx)}>
                      <option >Please Select</option>
                          {this.state.yes_or_no_options.length > 0 && this.state.yes_or_no_options.map((option, i) =>
                              <option value={option} key={i}>{option}</option>
                          )}
                      </Form.Control>
                        
                    </td>
                    <td>
                        <Form.Control 
                        id="breathalyser_reading_0"
                        type="number" 
                        name="breathalyser_reading"
                        className="form-field form-control" 
                        value={this.state.conviction_details[idx].breathalyser_reading}
                        onChange={this.handleChange(idx)}
                        />
                    </td>
                    <td>
                      <Form.Control id="offense_type_0" className="form-field form-control" name="offense_type" as="select" value={this.state.conviction_details[idx].offense_type} onChange={this.handleChange(idx)}>
                        <option >Please Select</option>
                          {this.state.yes_or_no_options.length > 0 && this.state.yes_or_no_options.map((option, i) =>
                              <option value={option} key={i}>{option}</option>
                          )}
                      </Form.Control>
                        
                    </td>
                    <td>
                        <Button variant="danger" className="button-rounded btn-sm" onClick={this.handleRemoveSpecificRow(idx)}>
                          Remove
                        </Button>
                        </td>
                        <td>
                        <Button className="button-rounded btn-sm">
                          Edit
                        </Button>
                        </td>
                  
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button variant="info" onClick={this.handleAddRow} className="button-rounded btn-sm">
                Add Conviction
              </Button>
            </div>
          </div>
      </div>
    );
  }
}

export default AddConvictionTable ;