import React, { Component } from 'react'
import {Link} from 'react-router';
const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Keelung">Keelung, TW</Link>
        </li>
        <li>
          <Link to="/?location=Hualien">Hualien, TW</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples