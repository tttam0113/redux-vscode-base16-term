import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { getThemes } from 'redux/actions/theme';
import { getThemes as themesSelector } from 'redux/selectors/theme';
import indexRoutes from 'routes';
import Header from 'containers/HeaderContainer';
import Nav from 'containers/NavContainer';
import Spinner from 'components/Spinner';

export const history = createHistory({ basename: '', hashType: 'noslash' });

class App extends React.Component {
  componentDidMount() {
    if (!this.props.themesAvailable) {
      this.props.getThemes();
    }
  }

  renderRoute = route => {
    const { name, path, pathTo, component, redirect = false, exact = false } = route;
    return redirect ? (
      <Redirect from={path} to={pathTo} key={name} />
    ) : (
      <Route path={path} component={component} key={name} exact={exact} />
    );
  };

  switchRoutes = () => <Switch>{indexRoutes.map(this.renderRoute)}</Switch>;

  renderLayout = () =>
    !this.props.themesAvailable ? (
      <Spinner />
    ) : (
      <div className="app">
        <aside className="sidebar">
          <Nav />
        </aside>
        <Header />
        {this.switchRoutes()}
      </div>
    );

  render() {
    return <Router history={history}>{this.renderLayout()}</Router>;
  }
}

App.propTypes = {
  getThemes: PropTypes.func.isRequired,
  themesAvailable: PropTypes.bool,
};

const mapStateToProps = state => ({
  themesAvailable: !!themesSelector(state),
});

const mapDispatchToProps = {
  getThemes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
