import React from 'react';
import './App.css';

const Calendar = props => (
  <div className="pull-right">
    <button
      onClick={props.handleEventSelect}
      type="submit"
      className="btn btn-lg btn-danger"
      id="12"
    >
      Select Event
    </button>
  </div>
);

export default Calendar;
