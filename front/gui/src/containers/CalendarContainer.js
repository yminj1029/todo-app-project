import React from 'react';
import { useDispatch } from 'react-redux';
import Calendar from '../components/todo/Calendar';
import { changeDate } from '../modules/date';

const CalendarContainer = () => {
  //캘린더에 클릭한 날짜 -> redux state로
  const dispatch = useDispatch();
  const handleDate = (state) => dispatch(changeDate(state));
  return <Calendar handleDate={handleDate}></Calendar>;
};

export default CalendarContainer;
