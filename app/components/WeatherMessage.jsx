var React = require('react');

var WeatherMessage = ({temp, location}) => {
  const { lon, lat } = location.city.coord;
  return (
    <div>
      <h3>It's {temp} in {location}</h3>
    </div>
  )
};

module.exports = WeatherMessage;
