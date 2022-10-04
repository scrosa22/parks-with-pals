import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-light text-dark mb-1 py-1 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-start text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '2rem' }}>
          🎶 Listen to the Music 🎶
          </h1><br></br>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        </p>
        <div>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-1" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
            <Link className="btn btn-outline-primary mr-5" to="/Home">
                Home
              </Link>
              <Link className="btn btn-outline-primary mr-5" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-primary mr-5" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-outline-primary mr-5" to="/Friends">
                Friends
              </Link>
              
              
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
