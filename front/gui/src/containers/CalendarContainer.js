import React from 'react';
import { useDispatch } from 'react-redux';
import Calendar from '../components/todo/Calendar';
import { changeDate } from '../modules/date';

const CalendarContainer = () => {
  const dispatch = useDispatch();
  const handleDate = (state) => dispatch(changeDate(state));
  return <Calendar handleDate={handleDate}></Calendar>;
};

export default CalendarContainer;
