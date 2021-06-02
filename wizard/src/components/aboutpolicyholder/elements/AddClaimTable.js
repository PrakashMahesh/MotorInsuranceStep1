import React from "react";
import { Form, Button} from 'react-bootstrap';
import '../App.css';

class AddClaimTable extends React.Component {
    
  state = {
    claim_details: [{
        claim_details: "",
        claim_date: "",
        claim_amount: "",
        claim_type: "",
        errors: [{
          claim_details: "",
          claim_date: "",
          claim_amount: "",
          claim_type: ""
        }]
    }],
    claim_type_options: ["Option 1", "Option 2"]
  };

  handleChange = idx => e => {
    const { name, value } = e.target;
    const claim_details = [...this.state.claim_details];
    claim_details[idx][name] = value;
    this.setState({
      claim_details
    });
    console.log(claim_details);
  };

  handleAddRow = (e) => {
    e.preventDefault();
    const item = {
        claim_details: "",
        claim_date: "",
        claim_amount: "",
        claim_type: "",
        errors: [{
          claim_details: "",
          claim_date: "",
          claim_amount: "",
          claim_type: ""
        }]

    };
    this.setState({
      claim_details: [...this.state.claim_details, item]
    });
  };

  handleRemoveSpecificRow = (idx) => (e) => {
    e.preventDefault();
    const claim_details = [...this.state.claim_details]
    if(claim_details.length === 1){
        const claim_details = [...this.state.claim_details];
        claim_details[idx] = {
            claim_details: null,
            claim_date: null,
            claim_amount: null,
            claim_type: null,
            errors: [{
              claim_details: "",
              claim_date: "",
              claim_amount: "",
              claim_type: ""
            }]
        };
        this.setState({
        claim_details
        });
        document.getElementById("conviction_date_0").value = null;
        document.getElementById("dvla_code_0").value = null;
        document.getElementById("points_incurred_0").value = null;
        document.getElementById("fine_incurred_0").value = null;
     

       
    }
    else{
        claim_details.splice(idx, 1);
        this.setState({ claim_details });
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
                    <th className="text-center" style={{fontSize: "17px"}}> Claim Details</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Claim Date</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Claim Amount</th>
                    <th className="text-center" style={{fontSize: "17px"}}>Claim Type</th>
                    <th/>
                    <th/>
                  </tr>
                </thead>
                <tbody>
                  {this.state.claim_details.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>
                      <Form.Control 
                        id="claim_details_0"
                        type="text" 
                        name="claim_details"
                        className="form-field form-control" 
                        value={this.state.claim_details[idx].claim_details}
                        onChange={this.handleChange(idx)}
                        />
                    </td>
                    <td>
                    <Form.Control
                        id="claim_date_0"
                        type="date" 
                        name="claim_date"
                        className="form-field form-control"
                        value={this.state.claim_details[idx].claim_date}
                        onChange={this.handleChange(idx)}
                        format="dd-mm-yyyy" 
                        />
                    </td>
                    <td>
                        <Form.Control 
                        id="claim_amount_0"
                        type="number" 
                        name="claim_amount"
                        className="form-field form-control" 
                        value={this.state.claim_details[idx].claim_amount}
                        onChange={this.handleChange(idx)}
                        />
                    </td>
                    <td>
                      <Form.Control id="claim_type_0" className="form-field form-control" name="claim_type" as="select" value={this.state.claim_details[idx].claim_type} onChange={this.handleChange(idx)}>
                      <option >Please Select</option>
                          {this.state.claim_type_options.length > 0 && this.state.claim_type_options.map((option, i) =>
                              <option value={option} key={i}>{option}</option>
                          )}
                      </Form.Control>
                        
                    </td>
                    <td>
                        <Button variant="danger" className="button-rounded btn-sm" onClick={this.handleRemoveSpecificRow(idx)} >
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
                Add Claim
              </Button>
              
            </div>
          </div>
      </div>
    );
  }
}

export default AddClaimTable;