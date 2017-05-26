import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './RegistrationForm.css';

const required = value => value ? undefined : '';
const password = value => {
  console.log(value.length);
  value && value.length > 8;
}
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'hmm...that email is invalid' : undefined

const renderField = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
  <div className="formFieldContainer">

    <input {...input} placeholder={placeholder} type={type} className="formField" />
    {touched && error ? <span className="errorMsg">{error}</span> : <span className="errorMsg"></span>}
  </div>
)

const RegistrationForm = props => {
  let { submitHandler } = props;
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="fields">
        <Field
          name="email"
          placeholder="email"
          validate={[required, email]}
          type="text"
          component={renderField} />
        <Field
          name="password"
          placeholder="password"
          type="password"
          validate={required}
          component={renderField} />
      </div>
      <button className="submitBtn" type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'registration'
})(RegistrationForm)
