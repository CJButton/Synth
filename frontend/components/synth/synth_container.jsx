

import {connect} from 'react-redux';
import Synth from './synth.jsx';
import {keyPressed} from '../../actions/notes_actions.js';
import {keyReleased} from '../../actions/notes_actions.js';


const mapStateToProps = state => ({
  notes: state.notes
});

// this is now usable in the synth component
// it's sitting in between the presentational component and the store
// when a key press is registered, it will 'dispatch' the action
// to the store
const mapDispatchToProps = dispatch => ({
  // dispatch is a callback, passed in to function and called below
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);
