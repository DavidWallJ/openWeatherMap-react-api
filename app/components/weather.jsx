import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherResults from 'WeatherResults';
import OpenWeatherMap from 'OpenWeatherMap';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    let that = this;

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function () {
    const {temp, location, isLoading} = this.state

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherResults location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather

