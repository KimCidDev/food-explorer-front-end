import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './styles';

export function CustomDatePicker({ selectedDate, onDateChange }) {
  return (
    <Container>
      <DatePicker
        selected={selectedDate}
        onChange={date => onDateChange(date)}
        inline
      />
    </Container>
  );
}
