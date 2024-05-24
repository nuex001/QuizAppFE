import React from "react";

const Calendar = () => {
  const Startdate = new Date(
    "Thu May 23 2024 10:14:09 GMT+0100 (West Africa Standard Time)"
  );
  // console.log(today);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const totalDays = 30;
  const startDay = Startdate.getDay();
  const today = new Date();
  // Generate an array of dates for the next 30 days
  const dates = [];
  for (let i = 0; i < totalDays; i++) {
    const nextDate = new Date(Startdate);
    nextDate.setDate(Startdate.getDate() + i);
    dates.push(nextDate);
  }

  // Create the calendar list items
  const calendarItems = [];
  for (let i = 0; i < startDay; i++) {
    calendarItems.push(<li className="space" key={`space-${i}`}></li>);
  }
  dates.forEach((date, index) => {
    if (date.toDateString() === today.toDateString()) {
      calendarItems.push(
        <li key={`date-${index}`} className="current">
          {date.getDate()}
        </li>
      );
    } else if (date < today) {
      calendarItems.push(
        <li key={`date-${index}`} className="past">
          {date.getDate()}
        </li>
      );
    } else {
      calendarItems.push(<li key={`date-${index}`}>{date.getDate()}</li>);
    }
  });

  return (
    <div className="calendar" id="cal">
      <h1>30 Days Quiz</h1>
      <h2>May 2024</h2>
      <ul className="haed_days">
        {daysOfWeek.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
      <ul className="calendar_days">{calendarItems}</ul>
    </div>
  );
};

export default Calendar;
