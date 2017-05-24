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
      errorMessage: undefined,
      location: undefined,
      temp: undefined
      // making sure everything is cleared out from previous runs before getting new data
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
  componentDidMount: function () {
    const location = this.props.location.query.location;
    // this works because of react router.  we have access to the query string

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
      // sets the url back to the root
    }
  },
  componentWillReceiveProps: function (newProps) {
    const location = newProps.location.query.location;
    // this works because of react router.  we have access to the query string
    // this fires when we receive props from the nav bar search
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
      // sets the url back to the root
    }
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
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather

