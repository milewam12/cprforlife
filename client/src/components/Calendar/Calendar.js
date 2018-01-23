import React from "react"
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "./react-big-calendar.css";
import Events from "./Events"


BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Calendar = props => (

  <div className="container"  {...this.props}>
    {/* <h5 className="callout">
      Click an event to register.
    </h5> */}

    <BigCalendar
      selectable
      events={Events}
      startAccessor='startDate'
      endAccessor='endDate'
      views={
        { month: true }
      }
      scrollToTime={new Date(2017, 1, 1)}
      defaultDate={new Date(2018, 0, 1)}
      // onSelectEvent={(event) => alert(
      //   `selected Event: \n\nstart ${event.title} ` +
      //   `\nID: ${event.image}`
      // )
      // }

      onSelectEvent={(event) => props.handleEventSelect(event)}

      // onSelectEvent={props.handleEventSelect }
    />

  </div>
);

export default Calendar;
