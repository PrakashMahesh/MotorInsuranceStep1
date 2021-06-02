import React from 'react';
import TextInput from '../elements/TextInput';

import DateInput from '../elements/DateInput';
import Title from '../elements/Title';

import Select from '../elements/Select';
import MultipleSelect from '../elements/MultipleSelect';
import ButtonSelect from '../elements/ButtonSelect';
import Radio from '../elements/Radio';

function Element({field}) {
  switch (field.field_type) {
    case 'text':
      return (
        <TextInput
          field_id={field.field_id}
          field_label={field.field_label}
          field_placeholder={field.field_placeholder}
          field_value={field.field_value}
          field_mandatory={field.field_mandatory}
          errors={field.errors}
        />
      );
    case 'onlytext':
      return (
        <Title
          field_id={field.field_id}
          field_label={field.field_label}
          field_placeholder={field.field_placeholder}
          field_value={field.field_value}
          field_mandatory={field.field_mandatory}
          errors={field.errors}
        />
      );

    case 'date':
      return (
        <DateInput
          field_id={field.field_id}
          field_label={field.field_label}
          field_placeholder={field.field_placeholder}
          field_value={field.field_value}
          field_mandatory={field.field_mandatory}
          errors={field.errors}
        />
      );

    case 'select':
      return (
        <Select
          field_id={field.field_id}
          field_label={field.field_label}
          field_value={field.field_value}
          field_options={field.field_options}
          field_mandatory={field.field_mandatory}
          errors={field.errors}
        />
      );

    case 'multiple_select':
      return (
        <MultipleSelect
          field_id={field.field_id}
          field_label={field.field_label}
          field_value={field.field_value}
          field_options={field.field_options}
          field_mandatory={field.field_mandatory}
          errors={field.errors}
        />
      );
    case 'button':
      return (
        <ButtonSelect
          field_id={field.field_id}
          field_label={field.field_label}
          field_value={field.field_value}
          field_options={field.field_options}
          field_mandatory={field.field_mandatory}
          errors={field.errors}
        />
      );

    case 'radio':
      return (
        <Radio
          field_id={field.field_id}
          field_label={field.field_label}
          field_value={field.field_value}
          field_options={field.field_options}
          field_mandatory={field.field_mandatory}
          yes_options={field.yes_options ? field.yes_options : ''}
          registered_keeper_fields={
            field.registered_keeper_fields ? field.registered_keeper_fields : ''
          }
          dynamic_fields={field.dynamic_fields ? field.dynamic_fields : ''}
          legal_owner_fields={
            field.legal_owner_fields ? field.legal_owner_fields : ''
          }
          CNG_fitment_fields={
            field.CNG_fitment_fields ? field.CNG_fitment_fields : ''
          }
          PA_cover_paid_fields={
            field.PA_cover_paid_fields ? field.PA_cover_paid_fields : ''
          }
          legal_owner_fields={
            field.legal_owner_fields ? field.legal_owner_fields : ''
          }
          legal_owner_fields1={
            field.legal_owner_fields1 ? field.legal_owner_fields1 : ''
          }
          errors={field.errors}
        />
      );

    default:
      return null;
  }
}

export default Element;
