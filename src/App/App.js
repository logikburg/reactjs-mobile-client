import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { HomePage, ListItemPage, DetailItemPage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

import Background from '../_images/top_background.jpg';

var divStyle = {
  width: "100%",
  height: "200px",
  backgroundImage: `url(${Background})`,
  marginBottom: "10px"
};

var h1Style = {
  paddingLeft: "10px",
  paddingTop: "140px",
};

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on if change url(location)
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="">
                <div className="container">
                    <div style={ divStyle }>
                        <h1 style={h1Style}>{this.props.user ?  (this.props.user.name !== undefined ? "Welcome " + this.props.user.name : "") : ""}</h1>
                    </div>
                    <div className="col-sm-12 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route exact path="/itemdetail/:id" render={(props) => <DetailItemPage {...props} /> } />
                                <Route path="/" component={this.props.user ? HomePage : LoginPage} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert, authentication } = state;
    const { user } = authentication;
    return { alert, user };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
