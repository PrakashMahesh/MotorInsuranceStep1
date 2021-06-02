import React from 'react';
import {Form} from 'react-bootstrap';


function Title({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_mandatory,
  errors,
}) {
  return (
    <Form.Group>

      <h5 style={{color: '#00000'}}>
        <b>
          {field_label}
        </b>
      </h5>

    </Form.Group>
  );
}

export default Title;
