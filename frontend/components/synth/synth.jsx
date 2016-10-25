
import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones.js';
import Note from '../../util/note.js';
import $ from 'jquery';


class Synth extends React.Component {
  constructor (props) {
    super(props);

    this.notes = NOTE_NAMES.map(note => {
      return new Note(TONES[note]);
    });

    this.playNotes = this.playNotes.bind(this);
  }

  onKeyDown(e) {
    e.preventDefault();
    const keyName = e.key;
    this.props.keyPressed(keyName);
  }

  onKeyUp(e) {
    e.preventDefault();
    const keyName = e.key;
    this.props.keyReleased(keyName);
  }

  //listeners
  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    let freqs = this.props.notes.map( note => {
      return TONES[note];
    });
    this.notes.forEach( note =>{
      if (freqs.includes(note.oscillatorNode.frequency.value)) {
        note.start();
      } else {
        note.stop();
      }
    });
  }

  render () {
    this.playNotes();
    return (
      <ul>
        {NOTE_NAMES.map(note => <li key={note}>{note}</li>)}
      </ul>
    );
  }
}

export default Synth;
