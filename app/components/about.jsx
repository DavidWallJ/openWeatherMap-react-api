import React, { Component } from 'react';

const About = React.createClass({
    render: function () {

      return (
      <div>
      <h3>About</h3>
        <p>Created using:
          <a href="https://facebook.github.io/react" target="_blank"> React</a>, <a href="https://www.npmjs.com/"  target="_blank"> NPM</a>,
          <a href="https://babeljs.io/" target="_blank"> Babel</a>,
          <a href="http://foundation.zurb.com/" target="_blank"> Foundation</a>,
          <a href="http://openweathermap.org" target="_blank"> Open Weather Map API </a>
          and
          <a href="https://www.heroku.com/" target="_blank"> Heroku</a>.
        </p>
        <p>This is a full-stack React app that utilizes the Open Weather Map API service. This app can be accessed and run from anywhere.</p>
        <p>Heroku URL: https://openweathermap-react-api.herokuapp.com/</p>
      </div>

      )
    }
});

module.exports = About;

// same as above
// can only do it this way when you only have a render element
// const About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });
