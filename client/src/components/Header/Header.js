import React from 'react';
import { Link } from 'react-router-dom';
import Payments from '../Payments/Payments';

const Header = props => {
  let link;
  switch (props.auth) {
    case null:
      break;
    case false:
      link = (
        <li>
          <a href="/auth/google">Login with Google</a>
        </li>
      );
      break;
    default:
      link = (
        <React.Fragment>
          <li>
            <Payments />
          </li>
          <li style={{ margin: '0 10px' }}>Credits: {props.credit}</li>
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        </React.Fragment>
      );
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={props.auth ? '/surveys' : '/'} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{link}</ul>
      </div>
    </nav>
  );
};

export default Header;
