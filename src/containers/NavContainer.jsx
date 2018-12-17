import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  items: state.themes,
});

export default connect(mapStateToProps)(Nav);
