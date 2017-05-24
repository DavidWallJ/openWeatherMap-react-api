/**
 * Created by david on 5/24/17.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';


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
    const {title, message} = this.props;
    const modalMarkup = (
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
    // we put the meat of the modal up here instead of in render because it wasn't playing well with foundations
    // because foundation is going manipulate the DOM we want to start with no DOM at all

    const $modal = $(ReactDOMServer.renderToString(modalMarkup))
    // jsx to string version in a jquery object
    $(ReactDOM.findDOMNode(this)).html($modal);
    // when this component is called
    const modal = new Foundation.Reveal($('#errorModal'));
    // make a new instance of #errorModal
    modal.open();
    // and open it
  },
  render: function () {


    return(
      <div>

      </div>
    );

  }
});

module.exports = errorModal;