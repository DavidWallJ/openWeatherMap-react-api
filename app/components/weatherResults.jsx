/**
 * Created by david on 5/21/17.
 */
import React, { Component } from 'react';

const WeatherResults = ({temp, location}) => {
  // the code above is the same as assigning 'props.temp' and 'props.location' to temp and location vars (or consts)

  return (
      <h3 className="text-center">It's {temp} in {location}.</h3>
  )
}

module.exports = WeatherResults;