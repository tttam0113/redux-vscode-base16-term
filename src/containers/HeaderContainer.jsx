import { connect } from 'react-redux';
import { getActiveTheme } from 'redux/selectors/theme';
import Header from '../components/Header';

const mapStateToProps = state => ({
  activeTheme: getActiveTheme(state),
});

export default connect(mapStateToProps)(Header);
