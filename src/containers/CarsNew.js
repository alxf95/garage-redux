import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { createCar } from '../actions';

const required = value => (value ? undefined : 'Required');

const caps = string => {
  return string === string.toUpperCase() ? undefined : 'Must be all caps';
};

const noSpecialChars = string => {
  const regex = /[ `!@#£$%^&*()_+\-=[]{};':"\\|,.<>\/?~]/;
  return regex.test(string) ? "Can't contain special characters" : undefined;
};

class CarsNew extends Component {
  onSubmit = values => {
    this.props.createCar(values, this.props.garage, car => {
      this.props.history.push('/');
      return car;
    });
  };

  renderField({ label, type, input, meta: { touched, error, warning } }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input type={type} {...input} />
        {touched &&
          ((error && <span style={{ color: '#d00000' }}>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    );
  }

  render() {
    return (
      <div className="margin-top-15">
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            className="field"
            label="Brand"
            name="brand"
            type="text"
            validate={required}
            component={this.renderField}
          />
          <Field
            className="field"
            label="Model"
            name="model"
            type="text"
            validate={required}
            component={this.renderField}
          />
          <Field
            className="field"
            label="Owner"
            name="owner"
            type="text"
            validate={required}
            component={this.renderField}
          />
          <Field
            className="field"
            label="Plate"
            name="plate"
            type="text"
            validate={[required, caps, noSpecialChars]}
            component={this.renderField}
          />
          <div className="margin-top-15">
            <button
              className="ui button"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Create Car
            </button>
          </div>
        </form>
        <div className="margin-top-15">
          <Link to="/">Back to Garage</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    garage: state.garage,
  };
};

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
