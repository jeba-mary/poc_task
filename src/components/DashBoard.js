import React from 'react';
import { Link } from 'react-router-dom';

class DashBoard extends React.Component {
  render () {
    return (
      <div className="dash container">
        <div className="header text-center">
          <h5>Employee Home</h5>
        </div>
        <div className="main">
          <div className="row">
            <div className="col-md-8">
              <Link to="/info" className="user-name" style={{textDecoration: 'none'}}><h4>Hi, Jeba</h4></Link>
              <p>A warm welcome to the Ramco System's Family!!</p>
            </div>
            <div className="col-md-4">
              <img src="./assets/images/user1.jpeg" alt="user" className="profile" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashBoard;