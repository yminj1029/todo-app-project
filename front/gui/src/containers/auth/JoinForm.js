import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const JoinForm = () => {
  // const dispatch = useDispatch();
  // const { form } = useSelector(({ auth }) => ({
  //   form: auth.join,
  // }));
  // //인풋 변경 이벤트 핸들러
  // const onChange = (e) => {
  //   const { value, name } = e.target;
  //   dispatch(
  //     changeField({
  //       form: 'join',
  //       key: name,
  //       value,
  //     })
  //   );
  // };
  // //폼 등록 이벤트 핸들러
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   //구현 예정
  // };

  // // 컴포넌트가 처음 렌더링 될 때 form을 초기화함
  // useEffect(() => {
  //   dispatch(initializeForm('join'));
  // }, [dispatch]);
  return (
    <AuthForm
      type="join"
      // form={form}
      // onChange={onChange}
      // onSubmit={onSubmit}
    ></AuthForm>
  );
};

export default JoinForm;
