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
        const { model, brand, owner } = car;
        return (
          <Link
            className="item cars-index-car"
            key={model}
            to={`/cars/${car.id}`}
          >
            <div className="image">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmoFQhZ0_-TU%2Fmaxresdefault.jpg&f=1&nofb=1"
                alt="car"
              />
            </div>
            <div className="content">
              <div className="margin-top-15">
                <h3 className="header">
                  {brand} -{' '}
                  <span style={{ fontWeight: 'lighter' }}>{model}</span>
                </h3>
                <div className="description">
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Owner: </span>
                    {owner}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
    return null;
  };

  render() {
    return (
      <div className="margin-top-15">
        <h2>{this.props.garage}'s Garage</h2>
        <Link to="/cars/new">Add Car</Link>
        <div className="ui items">{this.renderCars()}</div>
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
