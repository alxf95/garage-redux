import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCar, deleteCar } from '../actions';

class CarsShow extends Component {
  componentDidMount = () => {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  };

  handleClick = () => {
    this.props.deleteCar(this.props.match.params.id);
  };

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    const { model, brand, owner, plate } = this.props.car;

    return (
      <div className="margin-top-15">
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmoFQhZ0_-TU%2Fmaxresdefault.jpg&f=1&nofb=1"
                alt="car"
              />
            </div>
            <div className="content">
              <h3 className="header">
                {brand} - <span style={{ fontWeight: 'lighter' }}>{model}</span>
              </h3>
              <div className="description">
                <p>
                  <span style={{ fontWeight: 'bold' }}>Owner: </span>
                  {owner}
                </p>
                <div className="margin-top-15">
                  <span className="plate">{plate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/" onClick={this.handleClick}>
            Delete
          </Link>
        </div>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(car => car.id === idFromUrl);
  return {
    car,
    garage: state.garage,
  };
};

export default connect(mapStateToProps, { fetchCar, deleteCar })(CarsShow);
