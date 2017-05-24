/**
 * Created by david on 5/24/17.
 */
import React, { Component } from 'react';

const errorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: "Error"
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    // when this component is called
    const modal = new Foundation.Reveal($('#errorModal'));
    // make a new instance of #errorModal
    modal.open();
    // and open it
  },
  render: function () {
    const {title, message} = this.props;
    return (
      <div id="errorModal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            {/*'data-close' means button will close on click*/}
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = errorModal;