import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './RegistrationForm.css';

const RegistrationForm = props => {
  let { submitHandler } = props;
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="fields">
        <Field
          className="formField"
          name="email"
          placeholder="email"
          component="input"
          type="text" />
        <Field
          className="formField"
          name="email"
          placeholder="password"
          component="input"
          type="password" />
      </div>
      <button className="submitBtn" type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'regsistration' // a unique identifier for this form
})(RegistrationForm)
