import React, {useContext} from 'react';
import {Form, Button} from 'react-bootstrap';

import {FormContext} from '../Forms/FormContext';

const ButtonSelect = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
  field_mandatory,
  errors,
}) => {
  const {handleChange} = useContext (FormContext);

  return (
    <Form.Group>
      <Button
        variant="success"
        className="button-rounded green-btn"
        type="submit"
        //   onClick={e => handleChange(e)}
        onClick={event => handleChange (field_id, event)}
      >
        {field_label}
      </Button>

    </Form.Group>
  );
};

export default ButtonSelect;
