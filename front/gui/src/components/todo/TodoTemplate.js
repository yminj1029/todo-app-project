import React, { useState } from 'react';
import moment from 'moment';
import '../../lib/styles/TodoTemplate.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const TodoTemplate = ({ children }) => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const [date, setDate] = useState('');

  //startOf('month') : 그 달의 시작하는 week()
  const firstWeek = today.clone().startOf('month').week();
  //endOf('month'): 그 달의 끝나는 week()
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53 //1년은 52주, 며칠 더 있다면 53주로 표현해야함.
      : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line no-loop-func
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day');

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td
                    className="day"
                    key={index}
                    style={{ backgroundColor: '#ffe066' }}
                    onClick={() => handleDate(days.format('YYYY-MM-DD'))}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td
                    className="day"
                    key={index}
                    style={{ backgroundColor: '#dee2e6' }}
                    onClick={() => handleDate(days.format('YYYY-MM-DD'))}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td
                    className="day"
                    key={index}
                    onClick={() => handleDate(days.format('YYYY-MM-DD'))}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  const handleDate = (datepicker) => {
    setDate(datepicker);
    console.log('템플릿:', date);
  };

  return (
    <div className="TodoTemplate">
      <div className="white-box">
        <div className="logo-area">TODO</div>
        <div className="calendar-area">
          <div className="title">
            <h3>달력</h3>
          </div>
          <div className="date-setting">
            <button
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, 'month'));
              }}
            >
              <MdKeyboardArrowLeft />
            </button>
            <span> {today.format('YYYY년 MM월')} </span>
            <button
              onClick={() => {
                setMoment(getMoment.clone().add(1, 'month'));
              }}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="week" style={{ color: '#f03e3e' }}>
                  SUN
                </td>
                <td className="week">MON</td>
                <td className="week">TUE</td>
                <td className="week">WED</td>
                <td className="week">THU</td>
                <td className="week">FRI</td>
                <td className="week" style={{ color: '#1c7ed6' }}>
                  SAT
                </td>
              </tr>
              {calendarArr()}
            </tbody>
          </table>
        </div>
        <div className="todo-template">
          <div className="app-title">
            <h3>일정 관리</h3>
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TodoTemplate;
