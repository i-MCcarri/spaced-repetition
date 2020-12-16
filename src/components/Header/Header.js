import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import '../../css/Header.css';

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <div className='user-name'>
          Welcome Back {this.context.user.name}
        </div>
        <nav className='header-nav'>
        <Link to='/'className='home'>Home</Link>
        {' '}
          <Link
            onClick={this.handleLogoutClick}
            to='/login'
            className='logout'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className='header-nav'>
        <Link to='/login'className='login'>Login</Link>
        {' '}
        <Link to='/register'className='signup'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header className='title'>
        <h1>
          <Link to='/'>
            Diglot
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header