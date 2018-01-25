import React from "react"
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "./react-big-calendar.css";
import Events from "./Events"


BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

// let formats = {
//   dateFormat: 'dd',

//   dayFormat: (date, culture, localizer) =>
//     localizer.format(date, 'DDD', culture),

//   dayRangeHeaderFormat: ({ start, end }, culture, local) =>
//     local.format(start, { date: 'short' }, culture) + ' — ' +
//     local.format(end, { date: 'short' }, culture)
// }


const Calendar = props => (

  <div className="container"  {...this.props}>
    {/* <h5 className="callout">
      Click an event to register.
    </h5> */}

    <BigCalendar
      selectable
      // formats={formats}
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

      onView={(view) => {
        console.log('#### onView');
        console.log('#### view=', view);

      }}

      // onSelectEvent={props.handleEventSelect }
    />

  </div>
);

export default Calendar;
