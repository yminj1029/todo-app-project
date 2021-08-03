// import React from 'react';
// import { connect } from 'react-redux';
// import TodoTemplate from '../components/todo/TodoTemplate';

// const DateContainer = ({ date, handleDate }) => {
//   console.log('값 넘어오는거임?', date);
//   return <TodoTemplate date={date} changeDate={handleDate} />;
// };

// //리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정
// const mapStateToProps = (state) => ({
//   datepicker: state.datepicker,
// });
// //액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용
// const mapDispatchToProps = (dispatch) => ({
//   changeDate: () => {
//     console.log('먼말이지');
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(DateContainer);
