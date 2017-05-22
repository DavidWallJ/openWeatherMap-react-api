import React from 'react'
import { Link, IndexLink } from 'react-router'

const Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      {/*this one is IndexLink instead of Link because of the way weather is nested in the routing.  Without doing this the active class stuff doesn't work right*/}
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      {/*this activeClassName property is a function of react-router*/}
      {/*its an easy way to set the active class to the active link*/}
    </div>
  );
};

module.exports = Nav;