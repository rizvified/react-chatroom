import React, { Component } from 'react';
import { arrayOf, string } from 'prop-types';

class Users extends Component {
  render() {
    const data = this.props.users;
    return (
      <section className='users'>
        <h3> Online Users </h3>
        <ul>
          {
            data.map((user, index) => (
              <li key={ index }>
                {user}
              </li>
              ))
          }
        </ul>
      </section>
    );
  }
}

Users.propTypes = {
  users: arrayOf(string),
};

export default Users;
