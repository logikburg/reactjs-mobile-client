import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions, storeitemsActions } from '../_actions';

import avatar from '../_images/avatar.jpg';

class HomePage extends React.Component {
  constructor(props) {
      super(props);

      const { user } = this.props;

      this.state = {
          mainList: [
            {
              name: "Aenean 1",
              headline: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
              icon: "1",
              id: 1,
            },
            {
              name: "Lorem 2",
              headline: "Aenean massa. Cum sociis natoque penatibus et magnis",
              icon: "2",
              id: 2
            },
            {
              name: "Massa 3",
              headline: "Aenean massa.Aenean massa. Aenean massa.Aenean massa.",
              icon: "3",
              id: 3
            },
            {
              name: "Promenatibus 4",
              headline: "Cum sociis natoque penatib Cum sociis natoque penatib",
              icon: "4",
              id: 4
            },
            {
              name: "Adipiscing 5",
              headline: "Cum sociis natoque penatibus et magnis. Cum sociis natoque",
              icon: "5",
              id: 5
            },
          ],
          loading : false,
      };

      this.props.getPrefSetting(user);
      this.props.getStoreItems(user);
    }

    componentDidMount() {

    }

    render() {
        const { user, setting } = this.props;

        return (
          setting.pref !== undefined ?
          (setting.pref === "M" ?
            (
              <div className="col-md-10 col-md-offset-3">
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <h3>Store Items :</h3>
                {setting.pref && this.state.mainList &&
                    <ul className="list-group">
                    { this.state.mainList.map((item, index) =>
                      <li key={"li_" + item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <a href={"/itemdetail/" + item.id}
                            className="list-group-item-action flex-column align-items-start">
                            <div className="row image-parent">
                              <div className="col-1">
                                <img src={avatar} className="rounded-circle" width="50px" alt="avatar" style={{float: "left"}}/>
                              </div>
                              <div className="col">
                                <h5 className="mb-1">{item.headline}</h5>
                                <p className="mb-1">{item.name}</p>
                              </div>
                            </div>
                        </a>
                      </li>
                    )}
                    </ul>
                }
            </div>)
            :
            (<div className="container-fluid">
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <h3>Store Items :</h3>
                {setting.pref && this.state.mainList &&
                    <div className="row">
                    { this.state.mainList.map((item, index) =>
                      <div key={"li_" + item.id} className="col-2 justify-content-between text-center">
                        <a href={"/itemdetail/" + item.id} onClick={this.goToDetailPage}
                            className="list-group-item-action align-items-start">
                                <img src={avatar} className="rounded-circle" width="100px" alt="avatar"/>
                                <p className="mb-1">{item.name}</p>
                        </a>
                      </div>
                    )}
                    </div>
                }
            </div>)) : ""
        );
    }
}

function mapState(state) {
    const { users, authentication, setting } = state;
    const { user } = authentication;
    return { user, users, setting };
}

const actionCreators = {
    getPrefSetting : storeitemsActions.getPrefSetting,
    getStoreItems : storeitemsActions.getStoreItems
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
