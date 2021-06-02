import React, {useContext, Fragment, useEffect, useState} from 'react';
import {Form, Row, Col} from 'react-bootstrap';

import {FormContext} from '../Forms/FormContext';



import Element from '../Forms/Element';
import {Button} from 'react-bootstrap';

function Radio({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
  field_mandatory,
  yes_options,
  registered_keeper_fields,
  dynamic_fields,
  CNG_fitment_fields,
  PA_cover_paid_fields,
  legal_owner_fields,
  legal_owner_fields1,
  errors,
}) {
  const {handleChange} = useContext (FormContext);

  const [registeredKeeperChecked, setRegisteredKeeperChecked] = useState (
    false
  );
  const [legalOwnerChecked, setLegalOwnerChecked] = useState (false);
  const [legalOwnerChecked1, setLegalOwnerChecked1] = useState (false);

  const [dynamic_fieldsChecked, setdynamic_fieldsChecked] = useState (false);

  const [CNG_fitment_fieldsChecked, setCNG_fitment_fieldsChecked] = useState (
    false
  );
  const [
    PA_cover_paid_fieldsChecked,
    setPA_cover_paid_fieldsChecked,
  ] = useState (false);

  const radioButtonCheck = e => {
    const radio_button_field = document.getElementById ('radio-button-field');
    if (radio_button_field.checked === 'true') {
      radio_button_field.checked = 'false';
    } else {
      radio_button_field.checked = 'true';
    }

    if (document.getElementById ('addcoveryes').checked) {
      setRegisteredKeeperChecked (true);
    } else setRegisteredKeeperChecked (false);

    if (document.getElementById ('addcoverelectricalyes').checked) {
      setdynamic_fieldsChecked (true);
    } else setdynamic_fieldsChecked (false);

    if (document.getElementById ('add_CNG_fitment_yes').checked) {
      setCNG_fitment_fieldsChecked (true);
    } else setCNG_fitment_fieldsChecked (false);
    if (document.getElementById ('paidpassengeryes').checked) {
      setPA_cover_paid_fieldsChecked (true);
    } else setPA_cover_paid_fieldsChecked (false);

    if (document.getElementById ('policy_holder_yes_claim_bonus').checked) {
      setLegalOwnerChecked (true);
    } else setLegalOwnerChecked (false);
    if (document.getElementById ('yes_noclaim_bonus').checked) {
      setLegalOwnerChecked1 (true);
    } else setLegalOwnerChecked1 (false);
    if (document.getElementById ('yes_noclaim_bonus').checked) {
      setLegalOwnerChecked1 (true);
    } else setLegalOwnerChecked1 (false);
  };

  return (
    <Form.Group>
      <Form.Label id="radio-button-label">{field_label}</Form.Label>
      {field_mandatory === 'yes'
        ? <span className="mandatory"><b> * </b></span>
        : ' '}
      <br />
      <Row>
        {field_options.length > 0 &&
          field_options.map ((option, i) => (
            <Fragment key={i}>
              <Col lg={3}>
                <Form.Group
                  id="radio-button-field"
                  className="radio-button"
                  onChange={e => radioButtonCheck (e)}
                >
                  <input
                    id={option.option_id}
                    name={field_id}
                    className="radio-button-input"
                    type="radio"
                    value={option.option_value}
                    checked={field_value === option.option_value}
                    onChange={event => handleChange (field_id, event)}
                  />
                  {' '}{' '}
                  <Form.Label>{option.option_label}</Form.Label>
                </Form.Group>
              </Col>

            </Fragment>
          ))}
      </Row>
      <span style={{color: 'red'}}>{errors ? errors : ''}</span>

      <div style={{display: dynamic_fieldsChecked ? 'block' : 'none'}}>
        <Row>
          {dynamic_fields.length > 0 &&
            dynamic_fields.map ((sub_field, i) => {
              return (
                <Col lg={5}>
                  <Element key={i} field={sub_field} />
                </Col>
              );
            })}
        </Row>
      </div>

      <div style={{display: CNG_fitment_fieldsChecked ? 'block' : 'none'}}>
        <Row>
          {CNG_fitment_fields.length > 0 &&
            CNG_fitment_fields.map ((sub_field, i) => {
              return (
                <Col lg={5}>
                  <Element key={i} field={sub_field} />
                </Col>
              );
            })}
        </Row>
      </div>
      <div style={{display: PA_cover_paid_fieldsChecked ? 'block' : 'none'}}>
        <Row>
          {PA_cover_paid_fields.length > 0 &&
            PA_cover_paid_fields.map ((sub_field, i) => {
              return (
                <Col lg={5}>
                  <Element key={i} field={sub_field} />
                </Col>
              );
            })}
        </Row>
      </div>

      <div style={{display: registeredKeeperChecked ? 'block' : 'none'}}>
        <Row>
          {registered_keeper_fields.length > 0 &&
            registered_keeper_fields.map ((sub_field, i) => {
              return (
                <Col lg={5}>
                  <Element key={i} field={sub_field} />
                </Col>
              );
            })}
        </Row>
      </div>

      <div style={{display: legalOwnerChecked ? 'block' : 'none'}}>
        <Row>
          {legal_owner_fields.length > 0 &&
            legal_owner_fields.map ((sub_field, i) => {
              return (
                <Col lg={6}>
                  <Element key={i} field={sub_field} />
                </Col>
              );
            })}
        </Row>
      </div>
      <div style={{display: legalOwnerChecked1 ? 'block' : 'none'}}>
        <Row>
          {legal_owner_fields1.length > 0 &&
            legal_owner_fields1.map ((sub_field, i) => {
              return (
                <Col lg={6}>
                  <Element key={i} field={sub_field} />
                </Col>
              );
            })}
        </Row>
      </div>

    </Form.Group>
  );
}

export default Radio;
