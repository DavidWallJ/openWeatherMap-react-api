import React, { Component } from 'react';

const About = (props) => {
  return (
    <h3>About</h3>
  )
};

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