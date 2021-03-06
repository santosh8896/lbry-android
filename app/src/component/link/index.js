import { connect } from 'react-redux';
import { doNotify } from 'lbry-redux';
import Link from './view';

const perform = dispatch => ({
  notify: (data) => dispatch(doNotify(data))
});

export default connect(null, perform)(Link);
