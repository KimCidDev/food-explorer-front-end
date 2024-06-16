// src/components/DatePicker/index.jsx

import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function DatePicker({ selectedDate, onDateChange }) {
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={onDateChange}
      dateFormat="yyyy/MM/dd"
      className="datepicker-input"
    />
  );
}
