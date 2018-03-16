var React = require('react');


// var About= React.createClass({
//   render: function(){
//
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About Page</h1>
      <p>This is a weather application build on ReactJS. </p>

      <p>Here are some the toolds I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react"> React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
      <p>You can clone the github repo here: <a href="https://github.com/vamisola/React-Weather-Map.git">https://github.com/vamisola/React-Weather-Map.git</a></p>
    </div>
  )
};

module.exports = About;
