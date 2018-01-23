import React, { Component } from "react"
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "./react-big-calendar.css";
import Events from"./Events"


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer



class Calendarv2 extends Component {

    render() {

        return(
        const Calendar = props => (
        <div {...props}>
        <h5 className="callout">
          Click an event to register.
        </h5>
    
        <BigCalendar
    
        selectable
          events={Events}
          startAccessor='startDate'
          endAccessor='endDate'
          views={
            {month: true}
          }
          scrollToTime={new Date(2017, 1, 1, 6)}
          defaultDate={new Date(2018, 0, 1)}
          onSelectEvent={(event) => alert(
            `selected Event: \n\nstart ${event.title} ` +
            `\nID: ${event.id}`
          )
          }
          // onSelectEvent={
          //   function ActionLink(event) {
          //     function handleClick(e) {
          //       e.preventDefault();
          //       console.log('The link was clicked.');
          //     }
            
          //     return (
          //       <a href="/" onClick={handleClick}>
                  
          //       </a>
          //     );
          //   }
          //   }
    
    
    
        />
    
      </div>
        );
    );
    }
}



export default Calendarv2;


// onSelectEvent={function onSelectEvent(event) {
//   var selected = event.title;
//   if (selected) {
    
//   }

// console.log(event)
// console.log(selected)
// }}

// onSelectSlot={slotInfo =>
//   alert(
//     `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
//       `\nend: ${slotInfo.end.toLocaleString()}` +
//       `\naction: ${slotInfo.action}`
//   )
// }