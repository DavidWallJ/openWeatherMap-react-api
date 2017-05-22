/**
 * Created by david on 5/21/17.
 */
import React, { Component } from 'react';

const WeatherResults = ({temp, location}) => {
  // the code above is the same as assigning 'props.temp' and 'props.location' to temp and location vars (or consts)

  return (
      <h5>It's {temp} in {location}.</h5>
  )
}

module.exports = WeatherResults;