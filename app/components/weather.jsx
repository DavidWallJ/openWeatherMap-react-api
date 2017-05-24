import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherResults from 'WeatherResults';
import OpenWeatherMap from 'OpenWeatherMap';
import ErrorModal from 'ErrorModal';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function () {
    const {temp, location, isLoading, errorMessage} = this.state

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherResults location={location} temp={temp}/>;
      }
    }
    
    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather

