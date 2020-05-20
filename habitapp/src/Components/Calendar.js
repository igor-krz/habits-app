import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import moment from 'react-moment';

class Calendar extends React.Component {
    state = { 
        dateContext: moment(),
        today: moment(),
        showMonthPopUp: false,
        showYearPopUp: false
    }
    
    constructor(props) {
    super(props);
    }
    
    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdayshort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate= () => {
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
  
  
  render() {
      
    return (
        <div classname="calendar-container">
        <h2>Calendar</h2>
      </div>
    );
  }
}

export default Calendar;