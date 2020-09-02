import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount = () => {
    this.props.fetchCars(this.props.garage);
  };

  renderCars = () => {
    if (this.props.cars.length > 0) {
      return this.props.cars.map(car => {
        const { model, brand, owner, plate } = car;
        return (
          <div key={model}>
            <h3>{brand}</h3>
            <p>{model}</p>
            <p>{owner}</p>
            <p>{plate}</p>
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
        <Link to={`/cars/new`}>Add Car to {this.props.garage}'s Garage</Link>
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
