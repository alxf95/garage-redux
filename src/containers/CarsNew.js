import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = values => {
    this.props.createCar(values, this.props.garage, post => {
      this.props.history.push('/');
      return post;
    });
  };

  renderField({ label, type, input }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input type={type} {...input} />
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
            component={this.renderField}
          />
          <Field
            className="field"
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <Field
            className="field"
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <Field
            className="field"
            label="Plate"
            name="plate"
            type="text"
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
