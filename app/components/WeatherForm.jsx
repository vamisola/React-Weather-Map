var React = require('react');

class WeatherForm React.Component ({
  onFormSubmit (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div><input type="search" ref="location" placeholder="Search weather by city..."/></div>
          <div><button className="button hollow expanded">Get Weather</button></div>
        </form>
      </div>
    );
  }
};

module.exports = WeatherForm;
