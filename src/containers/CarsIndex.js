import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount = () => {
    this.props.fetchCars(this.props.garage);
  };

  renderCars = () => {
    if (this.props.cars.length > 0) {
      return this.props.cars.map(car => {
        const { model, brand } = car;
        return (
          <div key={model}>
            <h3>{brand}</h3>
            <p>{model}</p>
          </div>
        );
      });
    }
    return null;
  };

  render() {
    return (
      <div>
        <div>{this.renderCars()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    garage: state.garage,
  };
};

export default connect(mapStateToProps, { fetchCars })(CarsIndex);
