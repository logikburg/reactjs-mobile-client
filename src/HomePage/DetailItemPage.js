import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../_images/avatar.jpg';

export default class DetailItemPage extends React.Component {

  constructor(props) {
      super(props);
      console.log(props);
    }

    componentDidMount() {

    }

  render() {
    return(
      <div className="container">
        {/*<h2>{this.props.match.params.id}</h2> */}
        <div className="row">
          <div className="col-md-12 col-md-offset-3">
          <p>
              <a href="/">Back</a>
          </p>
          </div>
          <div className="container">
              <div className="row">
                <div className="col-3">
                  <img src={avatar} className="rounded-circle" width="200px" alt="avatar" style={{float: "left"}}/>
                </div>
                <div className="col">
                  <h5 className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing </h5>
                  <p className="mb-1">Lorem ipsum</p>
                  <input type="button" name="install" value="Install" className="install" onChange={this.handleChange} />
                </div>
                <div className="row">
                  <div className="col">
                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
