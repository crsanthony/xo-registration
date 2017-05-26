import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './RegistrationForm.css';

const required = value => !value ? 'please complete all fields' : undefined;
const password = value => value && value.length < 8 ? 'whoops, password must be at least 8 letters' : undefined;
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
          validate={[required, password]}
          component={renderField} />
      </div>
      <button className="submitBtn" type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'registration'
})(RegistrationForm)
