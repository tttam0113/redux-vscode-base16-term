import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTheme } from 'redux/actions/theme';
import ThemeContainer from 'containers/ThemeContainer';

class ThemeView extends React.Component {
  componentDidMount() {
    this.handleChangeTheme(this.props.match.params);
  }

  componentWillReceiveProps(nextProps) {
    this.handleChangeTheme(nextProps.match.params);
  }

  handleChangeTheme = params => {
    const { themeId } = params;
    this.props.changeTheme(themeId);
  };

  render() {
    return <ThemeContainer />;
  }
}

ThemeView.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  changeTheme,
};

export default connect(null, mapDispatchToProps)(ThemeView);
