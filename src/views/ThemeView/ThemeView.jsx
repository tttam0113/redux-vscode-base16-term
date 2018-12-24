import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTheme } from 'redux/actions/theme';
import { getActiveTheme } from 'redux/selectors/theme';
import Theme from 'components/Theme';
import Spinner from 'components/Spinner';

class ThemeView extends React.Component {
  componentDidMount() {
    this.handleChangeTheme(this.props.match.params);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.handleChangeTheme(this.props.match.params);
    }
  }

  handleChangeTheme = params => {
    const { themeId } = params;
    if (themeId) {
      this.props.changeTheme(themeId);
    }
  };

  render() {
    const { activeTheme } = this.props;
    return !activeTheme ? <Spinner /> : <Theme activeTheme={activeTheme} />;
  }
}

ThemeView.propTypes = {
  activeTheme: PropTypes.object,
  changeTheme: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  activeTheme: getActiveTheme(state),
});

const mapDispatchToProps = {
  changeTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeView);
